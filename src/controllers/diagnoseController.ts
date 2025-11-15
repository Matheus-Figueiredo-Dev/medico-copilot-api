import type { Request, Response } from "express";
import { openaiGenerateDiagnosis } from "../services/openaiService";

export const diagnoseController = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const { transcript } = req.body;

		if (!transcript) {
			return res.status(400).json({ error: "Transcript não enviado!" });
		}
		const result = await openaiGenerateDiagnosis(transcript);

		return res.json(result);
	} catch (error) {
		console.error("Erro ao gerar diagnóstico:", error);

		return res.status(500).json({ error: "Erro ao gerar diagnóstico" });
	}
};
