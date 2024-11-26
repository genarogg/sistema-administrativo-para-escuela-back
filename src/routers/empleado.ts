import express from "express";
import { registerEmpleado, obtenerEmpleados } from "@controllers";
import { verificarToken } from "@fn";

const router = express.Router();

router.post("/register", verificarToken, registerEmpleado);

router.get("/get-all", obtenerEmpleados);


export default router;