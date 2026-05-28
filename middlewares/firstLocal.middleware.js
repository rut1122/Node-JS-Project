export function firstLocalMiddleware(req, res, next){
    console.log('First middleware to books'); 
    next()
    // if(req.query.includes('admin'))
    //     next()
    // else
    //     res.send('')
}