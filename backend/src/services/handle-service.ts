import HandleMaster from "../models/handleSchema";
import { HandleDto } from "../dto/handle-dto";

const attributes = [
    "userId",
    "codeforces",
    "codechef",
    "leetcode",
    "atcoder",
    "hackerrank",
    "hackerearth",
    "geeksForGeeks",
    "newtonSchool",
    "codingNinjas"
];

const create = async (
    request: any
): Promise<any> => {
    try {
        const result = await HandleMaster.create(request);
        const userHanldes = new HandleDto(result);
        return userHanldes;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

const getById = async (
    id: string
): Promise<any> => {
    try {
        const result = await HandleMaster.findById(id, attributes);

        if (!result) {
            return null;
        }

        const userHanldes = new HandleDto(result);
        return userHanldes;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

const getByUserId = async (
    userId: string
): Promise<any> => {
    try {
        const result = await HandleMaster.findOne({ userId: userId });

        if (!result) {
            return null;
        }

        const userHanldes = new HandleDto(result);
        return userHanldes;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

const getAll = async (): Promise<any> => {
    try {
        const result = await HandleMaster.find();

        if (!result) {
            return null;
        }

        const usersHandles = result.map((user) => {
            const userHandle = new HandleDto(user);
            return userHandle;
        });

        return usersHandles;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

const updateById = async (
    id: string,
    request: any
): Promise<any> => {
    try {
        const result = await HandleMaster.updateOne(
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

const updateByUserId = async (
    userId: string,
    request: any
): Promise<any> => {
    try {
        const result = await HandleMaster.updateOne(
            { userId: userId },
            { ...request }
        );

        if (!result) return false;
        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};

const deleteById = async (
    id: string
): Promise<any> => {
    try {
        const result = await HandleMaster.deleteOne({ _id: id });
        if (!result) return false;
        return result;

    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.bold);
        throw error;
    }
};