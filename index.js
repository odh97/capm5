import express from 'express';

const app = express();
app.use(express.json()); // json 형태로 데이터를 주고 받을 수 있게 해줌

// import express from 'express';                         // export default 가져오기
// import abc from 'express';                             // export default 이름 바꿔서 가져오기
// import defaultFn, {abc, def} from 'express';           // export default 와 export 같이 가져오기
// import defaultFn, {abc as change, def} from 'express'; // export default 와 export 이름 바꿔서 가져오기 as를 사용하면 이름을 바꿀 수 있음 ex) abc >> change

app.get('/', (req, res) => {
    const result = [
        {number : 1, writer: '김', title:'제목1', content:'내용1'},
        {number : 2, writer: '이', title:'제목2', content:'내용2'},
        {number : 3, writer: '박', title:'제목3', content:'내용3'},
    ]

    res.send(result);
});

app.post('/board', (req, res) => {
    console.log('============ board post ============');
    console.log('request >>>>>',req);
    console.log('=================================');
    console.log('request body >>>>>',req.body);

    res.send('board post success');
});

app.listen(5500);
