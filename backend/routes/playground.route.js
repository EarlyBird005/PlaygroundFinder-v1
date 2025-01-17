import express from "express";
import { getAllPG, getPGById } from "../controllers/playground.controller.js";

const router = express.Router();

router.get("/", getAllPG);
router.get("/:id", getPGById);


export default router;