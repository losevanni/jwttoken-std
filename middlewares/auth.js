const { secretKey } = require('../config/secretkey');
const jwt = require('../modules/jwt');

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtill={
    checkToken:async(req,res,next)=>{
        //authorization 을 사용하는 경우에 
        // const token = req.headers.authorization.split(' ')[1];
        let token =req.cookies.node_token;
        if(!token) // 토큰이 없으면
            return res.send("token not found");
        const tokeninfo=await jwt.verify(token); // 토큰 검증
        if (tokeninfo=== TOKEN_EXPIRED) // 시간 초과
            return res.send("token time error");
        if(tokeninfo=== TOKEN_INVALID) // 없음
            return res.send('not use token');
        if(tokeninfo.idx===undefined) // idx 가 없음
            return res.send('not user idx')
        req.user_idx=tokeninfo.idx; // req에 유저 idx 값 을 넣는다 number임
        req.user_id=tokeninfo.id;
        next();
    }   
}
module.exports=authUtill;