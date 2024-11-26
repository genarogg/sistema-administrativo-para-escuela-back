import express from "express";
import { obtenerUsuarios } from "@controllers";
import { verificarToken } from "@fn";

const router = express.Router()

router.get("/get-all", obtenerUsuarios);


export default router;