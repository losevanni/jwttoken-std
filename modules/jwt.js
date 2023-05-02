
const randToken=require('rand-token');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretKey;
const option=require('../config/secretkey').option;
const TOKEN_EXPIRED=-3;
const TOKEN_INVALID=-2;

module.exports={
    sign:async(userdata)=>{
        const payload={
            idx:userdata.idx,
            id:userdata.id,
        };
        const result={
            token:jwt.sign(payload, secretKey, option),
            refreshToken:randToken.uid(256)
        };
        return result;
    },
    verify:async(token)=>{
        let decoded;
        try {
            decoded=jwt.verify(token,secretKey);
        } catch (err) {
            console.log(err.message);
            if(err.message==='jwt expired'){
                console.log('expired token');
                return TOKEN_EXPIRED;
            }else if(err.message==='invalid token'){
                console.log('invalid token');
                return TOKEN_INVALID;
            }else{
                console.log('invalid token');
                return TOKEN_INVALID;
            }
        }
        return decoded;
    },

    // signin:async(userdata)=>{ //idx를 넣어 받은 값으로 jwt 토큰 생성
    //     const jwtToken=await jwt.sign(user);
    //     return res.status(statuscode.OK).send(util.success(statusCode.OK,responseMsg.LOGIN_SUCCESS,{
    //         token:jwtToken.token
    //     }))
    
    // }
}

