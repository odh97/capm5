import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
// api docs 설정
// api-docs router 경로로 접속하면 API 문서를 볼 수 있게 설정
// config 파일에서 설정한 options를 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

app.get('/', (req, res) => {
  const result = [
    { number: 1, writer: '김', title: '제목1', content: '내용1' },
    { number: 2, writer: '이', title: '제목2', content: '내용2' },
    { number: 3, writer: '박', title: '제목3', content: '내용3' },
  ];

  res.send(result);
});

app.post('/mail', (req, res) => {
  // apiKey, apiSecret 설정

  res.send(result);
});

app.post('/mail', (req, res) => {});

app.listen(5500);
