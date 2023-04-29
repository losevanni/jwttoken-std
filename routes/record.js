const express=require('express');
const router=express.Router();

const user=require('../controllers/user');
const board=require('../controllers/board');
const authUtill=require('../middlewares/auth').checkToken

// router.post('/login',recordController.login);

router.get('/',(req,res)=>{
    res.render('index.ejs');
})
router.get('/join',user.joinView);
router.post('/join',user.join);

router.get('/login',user.loginView);
router.post('/login',user.login);

router.get('/board/list',board.listBoards);
router.get('/board/write',authUtill,board.boardWrite_view);
router.post('/board/write',authUtill,board.boardWrite);
router.get('/board/detail/:idx',board.boardDetail);
// router('/board').get('/list',board.list);
module.exports=router;