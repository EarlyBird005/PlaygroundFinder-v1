import express from "express";
import { getUserDetail, updateUserData, userAccDlt, userLogin, userLogout, userRegister } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", authUser, userLogout);
router.delete("/delete", authUser, userAccDlt);
router.get("acc-detail", authUser, getUserDetail);
router.put("/update-profile", authUser, updateUserData);


export default router;