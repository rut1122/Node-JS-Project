export function firstGlobalMiddleware(req, res, next){
    console.log('First middleware');
    next()
}