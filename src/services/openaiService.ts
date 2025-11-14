export const openaiTranscribeAudio = async (
	_file: Express.Multer.File,
): Promise<void> => {
	// Lógica para transcrever o áudio usando OpenAI
};

export const openaiTranscribeText = async (_text: string): Promise<void> => {
	// Lógica para transcrever o texto usando OpenAI
};

export const openaiGenerateDiagnosis = async (
	_transcript: string,
): Promise<void> => {
	// Lógica para gerar diagnóstico usando OpenAI
};
