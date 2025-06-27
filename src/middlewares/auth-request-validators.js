const validateUserAuth = (req, res, next) => {
    if(!req.body.password || !req.body.email) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalid request body for login or signup',
            err: 'Missing mandatory properties to login or signup'
       });
    }
    next();        //next() means proceed to the next middleware or route handler in the Express request-response cycle.
}


module.exports = {
    validateUserAuth
};


//we don't have to build two different middleware for sigIn and signUp because both have same logic, both should have 'email' and 'password'