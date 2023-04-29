const jwt= require('../modules/jwt');
const userM=require('../models/userM');

exports.joinView=async(req,res)=>{
    res.render('join.ejs');
}
exports.loginView=async(req,res)=>{
    res.render('login.ejs');
}

exports.join=async(req,res)=>{ // name, id , pw , phone
    const userdata=req.body;
    console.log(userdata);
    try {
        const result =userM.join(userdata); 
        console.log(result);   
    } catch (error) {
        return res.send('fail');
    }
    
    res.redirect('login.ejs');
};

exports.login=async(req,res)=>{
    const userdata=req.body;
    try {
        var user=await userM.login(userdata.id);
        if(user[0].pw==userdata.pw){
            //jwt 토큰 생성 후 전달 
            token=await jwt.sign(userdata);
            res.cookie("node_token",token)
            .status(200)
            .redirect('/');
        };
    } catch (error) {
        console.log(error);
        res
        .redirect('/login');
    }
}

exports.signin =async(req,res)=>{ //idx를 넣어 받은 값으로 jwt 토큰 생성
    const user =await userM.jwtvalue(req.params.idx);
    const jwtToken=await jwt.sign(user);
    return res.status(statuscode.OK).send(util.success(statusCode.OK,responseMsg.LOGIN_SUCCESS,{
        token:jwtToken.token
    }))

}
