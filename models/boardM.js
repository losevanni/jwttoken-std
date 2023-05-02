const { query } = require('express');
const db=require('../modules/pool');
const { value } = require('../config/database');

const errret=false;

exports.getAllBoard=async()=>{
    const query="SELECT * FROM BOARDS ORDER BY idx DESC";
    try {
        const result=await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.writeBoard=async(user_idx,user_id,boarddata)=>{ //idx ,id, title, content, user_idx
    const questions='?, ?, ?, ?';
    var query= `INSERT INTO BOARDS (user_idx, user_id, title, content ) VALUES (${questions})`;
    var dataarr=[user_idx, user_id, boarddata.title, boarddata.content];
    try {
        const result = await db.queryParamArr(query,dataarr);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.getDetailBoard=async(idx)=>{
    const query=`SELECT * FROM BOARDS WHERE idx=${idx}`
    try {
        const result= await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
        return errret;   
    }
}

exports.editBoard=async(idx,newdata)=>{
    // console.log(newdata);
    console.log(idx);
    const query= `UPDATE BOARDS SET title=?, content=?  WHERE idx=${idx}`;
    var dataarr=[newdata.title,newdata.content];
    try {
        const result=await db.queryParamArr(query,dataarr);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}

exports.deleteBoard=async(idx)=>{
    console.log('sdfasfdsf');
    console.log(idx);
    const query=`DELETE FROM BOARDS WHERE idx=${idx}`;
    try {
        const result = await db.queryParam(query);
        return result;
    } catch (error) {
        console.log(error);
        return errret;
    }
}