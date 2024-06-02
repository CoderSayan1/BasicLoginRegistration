import { Router } from "express";
import { loginUser, registerUser, getProfile, logoutUser } from "../controllers/user.controller.js";

const router = Router()


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(getProfile);
router.route('/logout').post(logoutUser);

export default router;