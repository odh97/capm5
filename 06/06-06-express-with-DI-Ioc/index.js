import express from 'express';
import { ProductController } from './mvc/controllers/product.controller.js';
import { CouponController } from './mvc/controllers/coupon.controller.js';

const app = express();
app.use(express.json()); // json 형태로 데이터를 주고 받을 수 있게 해줌

// 상품 API
const productController = new ProductController();

app.post('/products/buy', productController.buyProduct); // 상품 구매하기 API
app.post('/products/refund', productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController();

app.post('/coupons/buy', couponController.buyCoupon); // 상품권을 돈주고 구매하는 API

// 게시판 API
// app.get('/board..')

app.listen(5500);
