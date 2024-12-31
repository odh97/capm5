import { CashService } from './service/cash.service.js';
import { ProductService } from './service/product.service.js';

export class ProductController {
  buyProduct = (req, res) => {
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
  };

  refundProduct = (req, res) => {
    const productService = new ProductService();

    // 1. 판매여부 검증하는 코드()
    const isSoldOut = productService.checkSoldOut();

    // 2. 상품 환불하는 코드()
    if (isSoldOut) {
      res.send('상품 환불 성공');
    }

    res.send('상품 환불 실패');
  };
}
