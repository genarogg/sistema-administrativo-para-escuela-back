import express from "express";

import { obtenerAsistencias } from "@controllers";

const router = express.Router();

router.get("/get-all", obtenerAsistencias);



export default router;