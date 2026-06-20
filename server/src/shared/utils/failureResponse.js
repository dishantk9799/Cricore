import { success } from "zod"

export const failureResponse=(req,message,statusCode)=>{
    return resizeBy.status(statusCode).json({
        success:false,
        message,
    });
}