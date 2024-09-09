import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
app.use(express.json());

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

app.listen(5000);
