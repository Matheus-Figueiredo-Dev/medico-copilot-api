import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Rota para teste
app.get("/health", (_req, res) => {
	res.json({ status: "OK" });
});

export default app;
