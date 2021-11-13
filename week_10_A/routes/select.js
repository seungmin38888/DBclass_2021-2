import express from "express";
import { selectSql } from "../database/sql";//sql에서 selectSql모듈을 가져와서 사용

const router = express.Router();//express함수 사용

//select화면에 부서 테이블과 버스테이블을 출력
//부서 테이블 위엔 IT공대라는 대제목을 띄우고
//버스 테이블 위엔 버스정류장 이라는 대제목을 띄운다.
router.get('/', async function(req, res) {// '/' 는 /select을 생략한것 ex)'/a'는 '/select/a'를 의미
    //selectSql에서 getDepartment불러와서 department변수에 저장하고
    //selectSql에서 getBus불러와서 bus변수에 저장함
    const department = await selectSql.getDepartment(); 
    const bus = await selectSql.getBus();
    res.render('select', {//title을 두개로 나눔
        title: 'IT 공대',
        title2: '버스정류장',
        department,
        bus
    });  
});

module.exports = router;