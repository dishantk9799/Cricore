import { StatusCodes } from "http-status-codes";

export const successResponse = (res, message, data, statusCode) => {
    const response = {
        success: true,
    }
    if (message) response.message = message;
    if (data) response.data = data;

    return res.status(statusCode || StatusCodes.OK).json(response);
}