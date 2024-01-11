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

router.put(
    "/updateById/:id",
    userController.updateById
);

router.delete(
    "/deleteById/:id",
    userController.deleteById
);

export default router;