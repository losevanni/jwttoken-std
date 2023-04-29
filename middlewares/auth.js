const jwt = require('../modules/jwt');
// const MSG = require('../models/responseMessage');
// const CODE = require('../models/statusCode');
// const util = require('../models/util');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtill={
    checkToken:async(req,res,next)=>{
        var token =req.headers.cookie;
        console.log(token);   
        if(!token)
            return res.send("token not found");
        const tokeninfo=await jwt.verify(token);
        if (tokeninfo=== TOKEN_EXPIRED)
            return res.send("token time error");
        if(tokeninfo=== TOKEN_INVALID)
            return res.send('not use token');
        // if(user.idx===undefined)
        //     return res.send('not user idx')
        // req.idx=user.idx;
        next();
    }   
}
module.exports=authUtill;