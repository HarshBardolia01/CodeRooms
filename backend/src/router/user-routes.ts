import { Router } from "express";
import * as userController from "../controller/user-controller";
import { authentication, authorization } from "../middleware/userAuth";
import { Roles } from "../dto/user-dto";

const router = Router();

router.post(
    "/signUp",
    userController.signUp
);

router.post(
    "/login",
    userController.login
);

router.get(
    "/getAll",
    authentication,
    authorization([Roles.ADMIN]),
    userController.getAll
);

router.get(
    "/getById/:id",
    authentication,
    userController.getById
);

router.put(
    "/updateById/:id",
    authentication,
    userController.updateById
);

router.delete(
    "/deleteById/:id",
    authentication,
    userController.deleteById
);

export default router;