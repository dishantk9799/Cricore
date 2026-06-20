export const asyncHandler = (handler) => {
    return (req, res, next) => {
        try {
            handler(req, res, next);
        } catch (error) {
            next(err);
        }
    }
}