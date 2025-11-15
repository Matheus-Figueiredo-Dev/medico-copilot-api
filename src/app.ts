import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import diagnoseRoutes from "./routes/diagnoseRoutes";
import transcription from "./routes/transcriptionsRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Rota para teste
app.get("/health", (_req, res) => {
	res.json({ status: "OK" });
});

//Registro das rotas
app.use("/api/transcricao", transcription);
app.use("/api/diagnostico", diagnoseRoutes);

export default app;
