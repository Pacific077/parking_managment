import express from "express";
import { LoginUser, RegisterUser } from "../controllers/UserController.js";

const UserRoutes = express.Router();
UserRoutes.post("/register",RegisterUser)
UserRoutes.post("/login",LoginUser)

export default UserRoutes;
