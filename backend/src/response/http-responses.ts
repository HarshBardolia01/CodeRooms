import { Response } from "express";
import { Logger } from "../util/logger";
import { StatusCodes } from "http-status-codes";


// SUCCESSFUL RESPONSES

/**
 * OK: 200
 * Returns a succeeded response with 200 status code
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 * @param body: An optional body that will be send within the response' body
 */

export const Ok = (
    response: Response,
    message?: string,
    body?: any
): Response => {
    Logger.info(message ? message : "");
    return response
        .status(StatusCodes.OK)
        .send({
            status: true,
            message: message ? message : null,
            result: body ? body : null
        });
};


/**
 * Created: 201
 * The request succeeded, and a new resource was created as a result. 
 * This is typically the response sent after POST requests, or some PUT requests.
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 * @param body: An optional body that will be send within the response' body
 */

export const Created = (
    response: Response,
    message?: string,
    body?: any
): Response => {
    Logger.info(message ? message : "");
    return response
        .status(StatusCodes.CREATED)
        .send({
            status: true,
            message: message ? message : null,
            result: body ? body : null
        });
};


// CLIENT ERROR RESPONSES

/**
 * Bad Request: 400
 * The server cannot or will not process the request due to something that is 
 * perceived to be a client error (e.g., malformed request syntax, invalid 
 * request message framing, or deceptive request routing).
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 * @param body: An optional body that will be send within the response' body
 */

export const BadRequest = (
    response: Response,
    message?: string,
    body?: any
): Response => {
    Logger.error(message ? message : "");
    return body
        ? response
            .status(StatusCodes.BAD_REQUEST)
            .send({
                status: false,
                message: message ? message : null,
                error: body && Array.isArray(body) ? body : [body]
            })
        : response
            .status(StatusCodes.BAD_REQUEST)
            .send({
                status: false,
                message: message ? message : null
            });
};


/**
 * Unauthorized: 401
 * Meaning: The request lacks valid authentication credentials.
 * Implication: The user or application hasn't provided the necessary credentials to identify themselves, 
 *              such as a username and password, API token, or other authentication mechanism.
 * Common causes:
 *  - Missing or incorrect credentials in the request 
 *  - Expired or revoked credentials
 *  - Authentication mechanism not supported by the server
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 */

export const UserUnAuthenticated = (
    response: Response,
    message?: string
): Response => {
    Logger.error(message ? message : "User is not authenticated");
    return response
        .status(StatusCodes.UNAUTHORIZED)
        .send({
            status: false,
            errors: [
                {
                    message: message ? message : "User is not authenticated",
                    detail: "No valid access token provided",
                }
            ]
        });
};


/**
 * Forbidden: 403
 * Meaning: The server understands the request, but refuses to fulfill it due to insufficient permissions.
 * Implication: The user or application has been authenticated but doesn't have the required rights to 
 *              access the specific resource or perform the requested action.
 * Common causes:
 *  - Access restrictions based on user roles or permissions
 *  - Attempts to access protected resources without authorization
 *  - Server-side configuration preventing access
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 */

export const Forbidden = (
    response: Response,
    message?: string
): Response => {
    Logger.error(message ? message : "Access Denied");
    return response
        .status(StatusCodes.FORBIDDEN)
        .send({
            status: false,
            errors: [
                {
                    message: message ? message : "Access denied",
                    detail: "The user is trying to access a resource that he doesn't has the right to access"
                }
            ]
        });
};


/**
 * Not Found: 404
 * Meaning: The requested resource cannot be found on the server.
 * Implication: This simply means the specific page, file, or resource the user or application 
 *              tried to access doesn't exist on the server or is unreachable.
 * Common Causes:
 *  - Broken links: Clicking on an outdated or incorrect link that points to a non-existent resource.
 *  - Mistyped URLs: Typing the URL incorrectly can lead to a 404.
 *  - Deleted content: Resources might have been removed after publishing.
 *  - Server misconfiguration: Incorrect server settings could lead to resources being inaccessible.
 * @param response: The http-response to be modified
 * @param message: An optional message that will be send with the response' body
 * @param body: An optional body that will be send within the response' body
 */

export const NotFound = (
    response: Response,
    message?: string,
    body?: any
): Response => {
    Logger.error(message ? message : "Request not found");
    return response
        .status(StatusCodes.NOT_FOUND)
        .send({
            status: false,
            errors: [
                {
                    message: message ? message : "Request not found",
                    details: "The requested data is not found",
                    body: body ? body : null
                }
            ]
        });
};


export const Conflict = (
    response: Response,
    message?: string
): Response => {
    Logger.error(message ? message : "Conflict occured");
    return response
        .status(StatusCodes.CONFLICT)
        .send({
            status: false,
            errors: [
                {
                    message: message ? message : "Conflict occured",
                    detail: "ToDo"
                }
            ]
        });
};


// SERVER ERROR RESPONSES

/**
 * Internal Server Error: 500
 * Meaning: The server encountered an unexpected condition that prevented it from fulfilling the request. This is a 
 *          generic error message that indicates a problem on the server's side, rather than with the user's request.
 * Implication: It's difficult to pinpoint the exact cause immediately, as it could stem from various issues within the server's operation.
 *              The server is unable to provide a more specific error message or complete the requested action.
 * Common Causes:
 *  - Coding errors: Bugs or flaws in the website's code, such as syntax errors, missing files, or incorrect logic.
 *  - Server configuration issues: Incorrect settings in the server software, database connections, or file permissions.
 *  - Resource exhaustion: The server might be overloaded with too many requests, running out of memory or processing power.
 *  - Third-party software conflicts: Issues with plugins, extensions, or other software interacting with the server.
 *  - Database problems: Errors in database queries or connections.
 *  - File system errors: Corrupted files or inaccessible directories.
 * @param response The http-response to be modified.
 * @param error The error or error-message to be sent within the response' body.
 */

export const InternalServer = (
    response: Response,
    error: string | Error
): Response => {
    Logger.error("Internal Server Error");
    console.log(error);
    return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({
            status: false,
            errors: [
                {
                    message: "Internal server error",
                    detail: typeof error === "string" ? error : error.message,
                },
            ],
        });
};


/**
 * Handle all error
 * Returns an internal server error response with 500 status code.
 * @param response The http-response to be modified.
 * @param error The error or error-message to be sent within the response' body.
 */

export const HandleAllError = (
    response: Response,
    error: Error | any
): Response => {
    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    let errors = [];
    let message = "Internal server error";

    if (error.response && error.response.data && error.response.data.error) {
        error = error.response.data.error;
        statusCode = error.code;
        message = error.message;
        errors = error.errors;
    } else {
        statusCode = error.statusCode ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
        message = error.message;
        errors.push({
            message: message,
            detail:
                error.statusCode != StatusCodes.INTERNAL_SERVER_ERROR
                    ? error.message
                        ? error.message
                        : null
                    : error.error,
        });
    }

    Logger.error(message);
    return response
        .status(statusCode)
        .send({
            status: false,
            errors: errors
        });
};