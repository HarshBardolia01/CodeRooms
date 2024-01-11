import mongoose from "mongoose";
import UserMaster from "../models/userSchema";
import { UserDto } from "../dto/user-dto";

const attributes = [
    "email",
    "firstName",
    "lastName",
    "city",
    "country",
    "organization",
    "friendOfCount",
    "avatar",
    "about",
    "coverPhoto",
    "twitterLink",
    "linkedinLink",
    "website"
];

export const create = async (
    request: any
): Promise<any> => {
    try {
        const {
            email,
            password,
            firstName,
            lastName
        } = request;

        const result = await UserMaster.create({
            email,
            password,
            firstName,
            lastName
        });

        const userInfo = new UserDto(result);
        return userInfo;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

export const getById = async (
    id: mongoose.Types.ObjectId
): Promise<any> => {
    try {
        let where: { [key: string]: any }[] = [];
        where.push({ id: id });

        const result = await UserMaster.findOne({
            attributes: attributes,
            where: where
        });

        if (!result) {
            return null;
        }

        const userInfo = new UserDto(result);
        return userInfo;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};