import { Router } from "express";
import * as userController from "../controller/user-controller";

const router = Router();

router.post(
    "/create",
    userController.create
);

router.get(
    "/getAll",
    userController.getAll
);

router.get(
    "/getById/:id",
    userController.getById
);

export default router;