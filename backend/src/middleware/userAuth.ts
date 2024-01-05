import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import { Forbidden, UserUnAuthenticated } from "../response/http-responses";
import { Roles } from "../dto/user-dto";

export interface CustomRequest extends Request {
    userInfo: JwtPayload;
};

export const authentication = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const token = request.body.token ||
            request.query.token ||
            request.params.token ||
            request.headers["x-access-token"] ||
            request.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return UserUnAuthenticated(
                response,
                "Token not found!"
            );
        }

        const secretKey = process.env.JWT_SECRET_KEY as string;
        const info = jwt.verify(token, secretKey) as JwtPayload;

        (request as CustomRequest).userInfo = info.user;
        next();

    } catch (error: any) {
        return UserUnAuthenticated(
            response,
            error.message
        );
    }
};

export const authorization = (roles: Array<Roles>) => {
    return async (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        try {
            const { userInfo } = (request as CustomRequest);

            if (!userInfo.role) {
                return Forbidden(response);
            }

            const index = roles.indexOf(userInfo.role);

            if (index === -1) {
                return Forbidden(response);
            }

            next();

        } catch (error: any) {
            return Forbidden(
                response,
                error.message
            );
        }
    };
};