// exports
const db=require('../modules/pool');
const query=require('../query/user-query');
const errret=false;

exports.join=async(userdata)=>{
    const questions='?, ?, ?, ?';
    var query= `INSERT INTO USERS (id, pw, name, phone) VALUES ( ${questions})`;
    var dataarr=[userdata.id,userdata.pw,userdata.name,userdata.phone];
    try {
        const result=await db.queryParamArr(query,dataarr);
        //여기서 무슨 값을 result 가 받는지 알아보기
        const insertId=result;
        return insertId;
    } catch (error) {
        
        console.log('[err]',error);
    }
}

exports.login=async(userid)=>{
    var query=`SELECT * FROM USERS WHERE id="${userid}"`;
    try {
        const result=await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.jwtvalue=async(idx)=>{
    const query="SELECT * FROM USERS WHERE idx="+idx;
    try {
        const result=await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
    }
    
}