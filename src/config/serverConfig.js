const dotenv =require('dotenv');
const bcrypt = require('bcrypt');
                                                          //instead of these two lines we can direct use "require('dotenv').config()"
dotenv.config();

module.exports ={
    PORT:process.env.PORT,
    SALT: bcrypt.genSaltSync(10)
}