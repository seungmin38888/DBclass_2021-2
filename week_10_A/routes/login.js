

import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;//내가 입력한값이 들어갈 변수 vars
    const users=await selectSql.getUsers();//데이터베이스에서 유저정보를 가져온뒤에 users변수에 저장
    let whoAmI='';//admin인지user인지 구분하기위한 변수
    //let은 값을 바꿀수있는 변수를 설정할때 쓰임 const와 반대
    let checkLogin = false;//처음은 로그인을 하지 않을 상태이기 때문에 false로 지정
    
    //for(let i =0;i<users.length;i++){
    //    if(vars.id === user[i].id && vars.password === user[i].password) {
    //        ;
    //    }
    //}

    //map함수란 어떤 함수를 받아서 하나씩 체크를 하면서 기능을 수행하는 함수
    //for loop와 비슷
    users.map((user) => {//function생략
        console.log(user.Id);
        //입력하는 아이디와 비밀번호가 db에 있는 아이디와 비밀번호와 일치하는지 확인
        if(vars.id === user.Id && vars.password === user.Password) {
            console.log('login success!');
            checkLogin = true;//로그인 성공
            if (vars.id === 'admin') {//아이디가 admin인지
                whoAmI = 'admin';
            } else {//아이디가 user인지 판단
                whoAmI = 'users';
            }
        }
    })

    

    if(checkLogin && whoAmI==='admin') {//로그인이 되었고 admin인지
        res.redirect('/delete');//delete페이지로 가라
    } else if (checkLogin && whoAmI === 'users') {//로그인이 되었고 users이면
        res.redirect('/select');//select페이지로 가라
    } else {//두가지 경우가 아니면 로그인 실패이기 때문에
        console.log('login failed!');
        //로그인이 실패했다는 팝업창을 띄움.
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")//location은 팝업창의 위치를 나타냄
    }
})

module.exports = router;