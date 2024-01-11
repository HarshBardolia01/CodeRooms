import { Router } from "express";
import * as userController from "../controller/user-controller";

const router = Router();

router.post(
    "/create",
    userController.create
);

export default router;