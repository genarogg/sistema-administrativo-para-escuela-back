import express from "express";

import { obtenerBitacora } from "@controllers";

const router = express.Router();

router.get("/get-all", obtenerBitacora);

export default router;