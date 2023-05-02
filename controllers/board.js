const boardM=require('../models/boardM');
const userM=require('../models/userM');

exports.listBoards = async(req,res)=>{
    const boards=await boardM.getAllBoard();
    console.log(boards[0]);
    res.render('boardList.ejs',{board : boards});
}

exports.boardWrite_view=async(req,res)=>{
    res.render('boardWrite.ejs');
}

exports.boardWrite=async(req,res)=>{
    var inputdata= req.body;
    var user_idx=req.user_idx;
    var user_id=req.user_id;
    const result= await boardM.writeBoard(user_idx,user_id,inputdata);
    console.log(result);
    res.redirect('/board/list');
}

exports.boardDetail=async(req,res)=>{
    var inputidx=parseInt(req.params.idx);//params() 이거인지 앞에 있는거인지 모름겠음
    const detailBoard=await boardM.getDetailBoard(inputidx);
    console.log(detailBoard[0]);
    res.render('boardDetail.ejs',{board:detailBoard[0]});
}

exports.boardEdit_view=async(req,res)=>{// 
    var inputidx=parseInt(req.params.idx);//params() 이거인지 앞에 있는거인지 모름겠음
    const detailBoard=await boardM.getDetailBoard(inputidx);
    if(req.user_idx==detailBoard[0].user_idx){
        res.render('boardEdit.ejs',{board:detailBoard[0]});
    }else{
        res.send('get board fail');
    }
}
exports.boardEdit=async(req,res)=>{
    var newdata=req.body;
    var idx=parseInt(newdata.idx);
    const detailBoard=await boardM.getDetailBoard(idx, newdata);
    if(detailBoard[0].user_idx==req.user_idx){
        const result=await boardM.editBoard(detailBoard[0].idx,newdata);  
        console.log(result);
        res.redirect('/board/list');
    }
}
exports.boardDelete=async(req,res)=>{
    var inputidx =req.body.idx;
    const detailBoard=await boardM.getDetailBoard(inputidx);
    if(req.user_idx==detailBoard[0].user_idx){
        const result=await boardM.deleteBoard(detailBoard[0].idx);
        console.log('adsfdsafdsf',result);
        if (result==false) {
            console.log('error');
        } 
    }
    res.redirect('/board/list');
}