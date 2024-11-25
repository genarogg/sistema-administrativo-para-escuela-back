import express from "express";
import { registerPost, loginPost } from "@controllers";

const router = express.Router();

router.post("/register", registerPost);

router.post("/login", loginPost);

export default router;