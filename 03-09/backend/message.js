import express from 'express';
import coolsms from 'coolsms-node-sdk';

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

app.post('/board', (req, res) => {
  console.log('============ board post ============');
  console.log('request >>>>>', req);
  console.log('=================================');
  console.log('request body >>>>>', req.body);

  res.send('board post success');
});

app.post('/phone', (req, res) => {
  const result = [
    { number: 1, writer: '김', title: '제목1', content: '내용1' },
    { number: 2, writer: '이', title: '제목2', content: '내용2' },
    { number: 3, writer: '박', title: '제목3', content: '내용3' },
  ];

  // apiKey, apiSecret 설정
  const mysms = coolsms.default;
  const messageService = mysms('ENTER_YOUR_API_KEY', 'ENTER_YOUR_API_SECRET');

  // 1건 이상의 메시지를 발송할 때는 sendMany, 단일 건 메시지 발송은 sendOne을 이용해야 합니다.
  messageService
    .sendOne({
      to: '01011112222',
      from: '01011112222',
      text: '한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 발송됩니다.',
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  res.send(result);
});

app.listen(5500);
