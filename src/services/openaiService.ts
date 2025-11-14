/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import OpenAI from "openai";

//Instância cliente
const client = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

//Transcrição de áudio
export const openaiTranscribeAudio = async (
	file: Express.Multer.File,
): Promise<any> => {
	const response = await client.audio.transcriptions.create({
		file: file.buffer,
		model: "gpt-4o-audio",
	});

	return response.text;
};

//Apenas retorna o próprio texto ou opcionalmente "melhora"
export const openaiTranscribeText = async (
	text: string,
): Promise<Promise<any>> => {
	return text;
};

//Gera diagnóstico baseado na transcrição completa
export const openaiGenerateDiagnosis = async (
	transcript: string,
): Promise<Promise<any>> => {
	const prompt = `
Você é um médico assistente.  
Com base na conversa abaixo, gere:

1. Diagnóstico provável  
2. Lista de doenças associadas  
3. Lista de exames recomendados  
4. Lista de medicamentos possíveis  

Transcrição:
"${transcript}"
`;

	const response = await client.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [{ role: "user", content: prompt }],
		temperature: 0.2,
	});

	const content = response.choices[0]?.message.content;

	return { result: content };
};
