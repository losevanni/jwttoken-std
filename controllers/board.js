const boardM=require('../models/boardM');


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
    // 유저의 정보를 게시물에 넣어야함 
    // 유저의 정보는 어디에 ?
    // 로그인 되어있는 유저 만 작성 할수있어야만함
    const result= await boardM.writeBoard(userdata);
    console.log(result);
    res.send('good write');
}

exports.boardDetail=async(req,res)=>{
    var inputidx=req.params();
    const detailBoard=boardM.getDetailBoard(inputidx);
    console.log(detailBoard);
    res.send('good get one board');
}
