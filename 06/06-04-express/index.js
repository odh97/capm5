import express from 'express';

const app = express();
app.use(express.json()); // json 형태로 데이터를 주고 받을 수 있게 해줌

app.post('/products/buy', (req, res) => {
  // 1. 가진돈 검증하는 코드 ()

  // 2. 판매여부 검증하는 코드()

  // 3. 상품 구매하는 코드()

  res.send('board post success');
});

app.post('/products/refund', (req, res) => {
  // 1. 판매여부 검증하는 코드()

  // 2. 상품 환불하는 코드()

  res.send('board post success');
});

app.listen(5500);
