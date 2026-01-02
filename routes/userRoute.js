import express from "express";
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from "../controller/userController.js";

const router = express.Router();

// POST /api/user
router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById)
router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser)
export default router;
