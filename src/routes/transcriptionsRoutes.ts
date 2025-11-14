import { Router } from "express";
import multer from "multer";

// Configuração do Multer para receber arquivos de áudio
const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

// Rota que recebe um áudio e devolve a transcrição
router.post("/audio", upload.single("audio"));

// Rota que recebe um texto e devolve um resumo
router.post("/texto");

export default router;
