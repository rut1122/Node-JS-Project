export function secondGlobalMiddleware(req, res, next){
    console.log('Second middleware');
    next()
}