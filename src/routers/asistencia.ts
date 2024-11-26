import express from "express";

import { obtenerAsistencias, registrarAsistencia } from "@controllers";

const router = express.Router();

router.get("/get-all", obtenerAsistencias);

router.post("/registrar", registrarAsistencia);

export default router;