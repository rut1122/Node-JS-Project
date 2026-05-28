export function secondLocalMiddleware(req, res, next){
    console.log('Second middleware to books');
    next() 
}
