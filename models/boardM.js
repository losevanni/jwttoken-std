const { query } = require('express');
const db=require('../modules/pool');
const { value } = require('../config/database');

const errret=false;

exports.getAllBoard=async()=>{
    const query="SELECT * FROM BOARDS";
    try {
        const result=await db.queryParam(query);
        return result;    
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.writeBoard=async(userinfo,boarddata)=>{ //idx ,id, title, content, user_idx
    const questions='?, ?, ?, ?';
    var query= `INSERT INTO BOARDS ( idx, id, title, content ) VALUES ( ${questions})`;
    var dataarr=[userinfo.idx, userinfo.id, boarddata.title, boarddata.content];
    try {
        const result = await db.queryParamArr(query,dataarr);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.getDetailBoard=async(idx)=>{
    console.log(typeof(idx));
    const query=`SELECT * FROM BOARDS WHERE idx=${idx}`
    try {
        const result= await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
        return errret;   
    }
}