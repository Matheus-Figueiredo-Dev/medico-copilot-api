import { Router } from "express";
import { diagnoseController } from "../controllers/diagnoseController";

const router = Router();

// Rota que recebe a transcrição e devolve diagnóstico, exames recomendados e medicamentos

router.post("/", diagnoseController);

export default router;
