export class AppError extends Error {
    constructor(code, message) {
        super(message)
        this.statusCode = code
    }
}

export function errorHandler(err, req, res, next) {
    // אם בראשון יש ערך שם אותו בסטטוס ולא ממשיך בקריאת השורה (בדומה לפעולת תנאי רגילה) 
    // אם לא ממשיך לקרוא את הערך הבא ושם אותו בסטטוס
    const status = err.statusCode || 500

    res.status(status).send(err.message)
}