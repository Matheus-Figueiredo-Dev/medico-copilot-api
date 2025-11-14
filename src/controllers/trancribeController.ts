/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import type { Request, Response } from "express";
import {
	openaiTranscribeAudio,
	openaiTranscribeText,
} from "../services/openaiService.js";

// Controlador para transcrever áudio
export const transcribeAudio = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		if (!req.file) {
			res.status(400).json({ error: "Nenhum arquivo de áudio enviado!" });
		}
		// Chama o serviço para transcrever o áudio
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const transcript = await openaiTranscribeAudio(req.file!);

		return res.json({ transcript });
	} catch (error) {
		console.error("Erro ao transcrever áudio:", error);
		return res.status(500).json({ error: "Erro ao transcrever áudio!" });
	}
};

// Controlador para transcrever texto
export const transcribeText = async (
	req: Request,
	res: Response,
): Promise<any> => {
	try {
		const { text } = req.body;

		if (!text) {
			res.status(400).json({ error: "Nenhum texto enviado!" });
			// Chama o serviço para transcrever o texto
			const transcript = await openaiTranscribeText(text);

			return res.json({ transcript });
		}
	} catch (error) {
		console.error("Erro ao transcrever texto:", error);
		return res.status(500).json({ error: "Erro ao transcrever texto!" });
	}
};
