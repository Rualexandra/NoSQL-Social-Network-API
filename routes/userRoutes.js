import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);
router.post("/users/:userId/friends/:friendId", userController.addFriend);
router.delete("/users/:userId/friends/:friendId", userController.removeFriend);

export default router;
