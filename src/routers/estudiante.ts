import express from "express";
import { registrarEstudiantePost, getAllEstudiante } from "@controllers";
import { verificarToken } from "@fn";

const router = express.Router();

router.post("/register", verificarToken, registrarEstudiantePost);

router.get("/get-all", getAllEstudiante);

export default router;