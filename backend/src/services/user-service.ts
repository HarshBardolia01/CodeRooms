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
            hashedPassword,
            firstName,
            lastName
        } = request;

        const result = await UserMaster.create({
            email,
            password: hashedPassword,
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
    id: string
): Promise<any> => {
    try {
        const result = await UserMaster.findById(id, attributes);

        if (!result) {
            return null;
        }

        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

export const getAll = async (): Promise<any> => {
    try {
        const result = await UserMaster.find();

        if (!result) {
            return null;
        }

        return result;
    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

export const getByEmail = async (
    email: string
): Promise<any> => {
    try {
        const result = await UserMaster.findOne({ email: email });

        if (!result) {
            return null;
        }

        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

export const updateById = async (
    id: string,
    request: any,
): Promise<any> => {
    try {
        const result = await UserMaster.updateOne(
            { _id: id },
            { ...request }
        );

        if (!result) return false;
        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

export const deleteById = async (
    id: string
): Promise<any> => {
    try {
        const result = await UserMaster.deleteOne({ _id: id });

        if (!result) return false;
        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};