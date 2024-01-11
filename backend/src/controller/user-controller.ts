import { Request, Response } from "express";
import * as userService from "../services/user-service";
import * as responses from "../response/http-responses";
import { UserDto } from "../dto/user-dto";

export const create = async (
    request: Request,
    response: Response
) => {
    try {
        const {
            email,
            password,
            firstName,
            lastName
        } = request.body;

        if (!email || !password || !firstName || !lastName) {
            let notFound = (!email ? "email" : (
                !password ? "password" : (
                    !firstName
                        ? "First Name"
                        : "Last Name"
                )
            ));

            return responses.NotFound(
                response,
                `${notFound} not found!`,
            );
        }

        const userInfo: UserDto = await userService.create({
            email,
            password,
            firstName,
            lastName
        });

        return responses.Ok(
            response,
            "User Successfully Created",
            userInfo
        );

    } catch (error) {
        return responses.HandleAllError(
            response,
            error
        );
    }
};