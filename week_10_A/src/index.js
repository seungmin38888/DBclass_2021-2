//모듈 선언
import express from "express";
import logger from "morgan";
import path from "path";

//login.js,select.js,delete.js 파일과 연결한다.
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";

const PORT = 3000;//포트넘버는 3000

const app = express();//express기능:알아서 서버를 연결해주는 모듈

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);

app.listen(PORT, () => {//listen으로 서버를 실행시킴
    console.log(`Example app listening at http://localhost:${PORT}`)//출력창의 주소는 http://localhost:3000
})