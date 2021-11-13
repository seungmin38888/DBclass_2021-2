# 2021-02-database
<br><br>
## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:seungmin38888/db2021-2.git
    - (token을 사용하는 경우) git clone https://github.com/seungmin38888/db2021-2.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root',//본인의 user ud
        database: 'tutorial',//본인이 만든 데이터 베이스 이름
        password: 'password',//본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

# DBclass_2021-2

## <span style="color:purple"> 3주차 테이블 설명

- 테이블 이름: **student**

Name|StudentNumber|Major|Class|AdmissionDate|Email
----|-------------|-----|-----|-------------|----|
| 최승민 |      12152839 | 정보통신공학과 |     4 | 2015-03-01    | seungmin38@naver.com |
| 홍길동 |      12162838 | 기계공학과     |     3 | 2016-03-01    | hgd@naver.com        |
| 안창호 |      12172835 | 신소재공학과   |     3 | 2017-03-01    | ach@naver.com        |
| 장영실 |      12182836 | 전기공학과     |     2 | 2018-03-01    | jys@naver.com        |
| 이순신 |      12192837 | 전자공학과     |     1 | 2019-03-01    | lss@naver.com        |


학생들을 나타낸 테이블 이다.<br><br>
학생의 이름,학번,전공,학년,입학일 그리고 이메일이 적혀 있다.<br><br>
**name**의 경우 타입은 **varchar**형태로 최대 5개의 문자를 입력할 수 있고<br>
**null**값은 불허 하며 **default**값 또한 존재하지 않는다.
<br>
**studentnumber**의 경우 **int**형태의 값을 받으며<br>
이 테이블의 **primary key**를 담당한다<br>
**null**값은 불허한다.
<br>
**major**의 경우 이름과 유사하게 **varchar**타입으로 값을 받아
최대 5개의 문자를 받는다.<br>
**null**값과 **default**값은 존재한다. 
<br>
**class**의 경우 **int**형태의 값을 받으며 **default**값과 **null**값은 존재한다.<br>
**AdmissionDate**의 경우 **date**형태로 받는다.<br>
**date**형태는 년-월-일 형태로 날짜를 나타내는 타입이다.<br>
**AdmissionDate**이기 때문에 **null**값은 존재하지 않는다.<br>
**email**의 경우 **varchar**(30)의 형태로 최대 30개의 문자를 입력할 수 있다.<br>

<br><br>


## <span style="color:purple"> 8주차 테이블 설명
- 테이블 이름: **employee**

Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
-----|-----|-----|----|----|-------|---|------|---------|---|
| 철수  | M     | 김    | 12123456 | 2000-01-01 | 인천    | 남   |   1000 |           |   1 |
| 길동  | M     | 홍    | 12134565 | 1999-09-09 | 서울    | 남   |   1000 | 12123456  |   2 |
| 창호  | M     | 안    | 12172835 | 1998-10-17 | 경기    | 남   |   3000 | 12123456  |   4 |
| 관순  | F     | 유    | 12182836 | 1997-09-09 | 부산    | 여   |   2500 | 12123456  |   5 |
| 순신  | M     | 이    | 12192837 | 1995-06-08 | 경기    | 남   |   2000 | 12123456  |   3 |

**employee** 테이블은 성과 이름,ssn,주소,성,연봉,super_ssn 과 부서번호를 보여준다.<br><br>
**fname**,**lname**과**address**는 입력값이 모두 상이하기 때문에 **varchar**타입으로 입력받는다.<br>
이름은 **null**값을 허용하며 주소값은 허용하지 않는다.<br>
하지만 **super_ssn**,**sex**와**ssn**은 모두 값의 크기가 동일하기 때문에 **char**형태로 입력받는다. 
<br>한편 **ssn**은 이 테이블의 **primary key**이다.
**bdate**의 경우 년월일 형태로 표현학 위해 **date**타입으로 입력받으며 **null**값은 존재한다.<br>
**dno**는 **int**타입으로 입력받으며 **salary**의 경우 소수값을 0만큼 받는 5자리수를 받기위해 **decimal**(5,0)형태로 받는다.<br><br>




- 테이블 이름: **department**


Dname| Dnumber | Mgr_ssn  | Mgr_start_date |
|----|---------|----------|----------------|
| 정보통신공학과 |       1 | 12123456 | 1960-04-05     |
| 기계공학과     |       2 | 12134565 | 1959-08-01     |
| 신소재공학과   |       3 | 12192837 | 1965-05-01     |
| 컴퓨터공학과   |       4 | 12172835 | 1970-05-01     |
| 전기공학과     |       5 | 12182836 | 1965-05-01     |


**department**테이블의 경우 **부서이름**과 **부서번호**,**mgr_ssn****,**mgr_start_date**를 보여준다.<br><br>
**dname**의 경우 부서의 이름이 각각 다르기 때문에 메모리값을 절약하기 위해 **varchar**타입으로 입력받는다.<br>부서이름이 동일한 경우는 없으니 **unique**한 속성을 갖는다.<br>
**dnumber**의 경우는 **int**형으로 입력받고 이 테이블의 **primary key**를 담당한다.<br>
**mgr_start_date**는 특정 날을 의미하기 때문에 **date**타입으로 입력받는다.<br><br>

## <span style="color:purple"> 10주차 테이블 설명
- 테이블 이름: **bus**

Bname  | Bnumber |
|------|---------|
| 강남행 |    2000 |
| 송도행 |     120 |
| 신촌행 |    2700 |
| 일산행 |    9700 |
| 주안행 |     511 |

**bus**테이블은 **버스 이름**과 **버스번호**를 나타낸다.<br>
**버스 번호**는 이 테이블의 **primary key**를 담당한다.<br>
버스는 각각 강남,송도,신촌,일산,주안으로 향한다.<br><br>


- 테이블 이름: **department**

Dname          | Dnumber |
|--------------|---------|
| 전기공학과     |       2 |
| 전자공학과     |       3 |
| 정보통신공학과 |       0 |
| 컴퓨터공학과   |       1 |

**department**테이블은 **학과**와 **학과번호**를 보여주는 테이블이다.<br>
**학과 번호**는 이 테이블의 **primary key**를 담당한다.<br><br>

- 테이블 이름: **user**

Id    | Password  | Role  |
|-----|-----------|-------|
| admin | admin1234 | admin |
| test  | test1234  | users |

**user**테이블은 로그인하는 **ID**들과 각각의 **PW**와 **역할** 보여준다.<br>
**admin**의 경우 관리자의 **ID**이며 **test**의 경우 일반 유저의 **ID**이다.<br><br>