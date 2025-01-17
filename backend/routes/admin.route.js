import express from "express";
import { getAllUserDetail } from "../controllers/user.controller.js";
import { addPG } from "../controllers/playground.controller.js";


const router = express.Router();

// User
router.get("/user/allUser", getAllUserDetail);

// Playground
router.post("/playground/new", addPG);

export default router;