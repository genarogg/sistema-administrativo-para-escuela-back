import express from "express";
import { registrarEstudiantePost } from "@controllers";
import { verificarToken } from "@fn";

const router = express.Router();

router.post("/register", verificarToken, registrarEstudiantePost);

export default router;