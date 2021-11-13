

import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();



// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment();
    const bus = await selectSql.getBus();
    res.render('delete', {
        title: "부서 삭제",//처음 대제목은 부서 삭제
        title2: "버스 삭제",//두번째 대제목은 버스 삭제
        department,
        bus
    })
});




// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 입력값 삭제
router.post('/', async (req, res) => {
    
    console.log('delte router:',req.body.delBtn);
    const data = {
        Dnumber: req.body.delBtn,
        Bnumber: req.body.delBtn,
    }
    await deleteSql.deleteDepartment(data);
    await deleteSql.deleteBus(data);
    res.redirect('/delete'); 
});


module.exports = router;