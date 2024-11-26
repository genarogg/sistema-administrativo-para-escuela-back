import express from "express";
import { registerEmpleado } from "@controllers";
import { verificarToken } from "@fn";

const router = express.Router();

router.post("/register", verificarToken, registerEmpleado);


export default router;