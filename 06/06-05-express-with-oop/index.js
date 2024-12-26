import express from 'express';
import { CashService } from './cash.js';
import { ProductService } from './product.js';

const app = express();
app.use(express.json()); // json 형태로 데이터를 주고 받을 수 있게 해줌

app.post('/products/buy', (req, res) => {
  const cashService = new CashService();
  const productService = new ProductService();

  // 1. 가진돈 검증하는 코드 ()
  const hasMoney = cashService.checkValue();

  // 2. 판매여부 검증하는 코드()
  const isSoldOut = productService.checkSoldOut();

  // 3. 상품 구매하는 코드()
  if (hasMoney && !isSoldOut) {
    res.send('상품 구매 성공');
  }

  res.send('상품 구매 실패');
});

app.post('/products/refund', (req, res) => {
  const productService = new ProductService();

  // 1. 판매여부 검증하는 코드()
  const isSoldOut = productService.checkSoldOut();

  // 2. 상품 환불하는 코드()
  if (isSoldOut) {
    res.send('상품 환불 성공');
  }

  res.send('상품 환불 실패');
});

app.listen(5500);
