import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';
import { checkEmail, getWelcomeMailTemplate, sendTemplateMail } from './checkMail.js';

const app = express();
app.use(express.json());
app.use(cors());
// api docs 설정
// api-docs router 경로로 접속하면 API 문서를 볼 수 있게 설정
// config 파일에서 설정한 options를 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

app.get('/', (req, res) => {
  const result = 'success';

  res.send(result);
});

app.post('/users', async (req, res) => {
  console.log('===== users start =====');
  console.log(req.body);

  // 1. 이메일이 정상인지 확인
  const isValid = checkEmail(req.body.email);

  if (!isValid) {
    console.log('===== users email invalid =====');
    res.status(400).send('이메일 형식이 아닙니다.');
    return;
  }

  // 2. 가입환영 템플릿 만들기
  const template = getWelcomeMailTemplate(req.body.name);

  // 3. 이메일에 가입환영 템플릿 전송하기
  await sendTemplateMail(req.body.email, template);

  res.send('success');
});

app.listen(5500);
