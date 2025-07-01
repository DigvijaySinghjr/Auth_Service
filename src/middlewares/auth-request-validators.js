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

const validateIsAdminRequest = (req, res, next) =>{
    if(!req.body.id) {
        return res.status(400).json({
            success: false,
            data: {},
            err: 'User id not given',
            message: 'Something went wrong'
        })
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
};


//we don't have to build two different middleware for sigIn and signUp because both have same logic, both should have 'email' and 'password'