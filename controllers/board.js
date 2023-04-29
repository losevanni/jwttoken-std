const boardM=require('../models/boardM');
const userM=require('../models/userM');

exports.listBoards = async(req,res)=>{
    const boards=await boardM.getAllBoard();
    console.log(boards);
    res.send('goodboards');
}

exports.boardWrite_view=async(req,res)=>{
    res.render('boardWrite.ejs');
}

exports.boardWrite=async(req,res)=>{
    var inputdata= req.body;
    var user_idx=req.user_idx;
    //유저 를 idx로 조회
    const userinfo=await userM.info(user_idx);
    const result= await boardM.writeBoard(userinfo,inputdata);
    console.log(result);
    res.redirect('/');
}

exports.boardDetail=async(req,res)=>{
    var inputidx=req.params();
    const detailBoard=boardM.getDetailBoard(inputidx);
    console.log(detailBoard);
    res.send('good get one board');
}
