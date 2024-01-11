import { Request, Response } from "express";
import bcrypt from "bcrypt";
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

        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS as string, 10);
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userInfo: UserDto = await userService.create({
            email,
            hashedPassword,
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

export const getAll = async (
    request: Request,
    response: Response
) => {
    try {
        const result = await userService.getAll();

        if (!result) {
            return responses.NotFound(
                response,
                "No Users Found"
            );
        }

        return responses.Ok(
            response,
            "Success",
            { users: result }
        );

    } catch (error) {
        return responses.HandleAllError(
            response,
            error
        );
    }
};

export const getById = async (
    request: Request,
    response: Response
) => {
    try {
        const id = request.params.id;
        const userInfo = await userService.getById(id);

        if (!userInfo) {
            return responses.NotFound(
                response,
                "No User Found"
            );
        }

        return responses.Ok(
            response,
            "Success",
            { userInfo }
        );

    } catch (error) {
        return responses.HandleAllError(
            response,
            error
        );
    }
};

export const updateById = async (
    request: Request,
    response: Response
) => {
    try {
        const id = request.params.id;
        const userInfo = await userService.getById(id);

        if (!userInfo) {
            return responses.NotFound(
                response,
                "User not found",
            );
        }

        const user = request.body;
        const result = await userService.updateById(id, user);

        return responses.Ok(
            response,
            "Updated Successfully",
            result
        );

    } catch (error) {
        return responses.HandleAllError(
            response,
            error
        );
    }
};

export const deleteById = async (
    request: Request,
    response: Response
) => {
    try {
        const id = request.params.id;
        const user = await userService.getById(id);

        if (!user) {
            return responses.NotFound(
                response,
                "No such User Found",
            );
        }

        const result = await userService.deleteById(id);

        return responses.Ok(
            response,
            "User Deleted Successfully",
            result
        );

    } catch (error) {
        return responses.HandleAllError(
            response,
            error
        );
    }
};