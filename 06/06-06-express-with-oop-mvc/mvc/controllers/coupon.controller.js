import { CashService } from './service/cash.service.js';

export class CouponController {
  buyCoupon(req, res) {
    const cashService = new CashService();

    // 1. 가진돈 검증하는 코드 ()
    const hasMoney = cashService.checkValue();

    if (hasMoney) {
      res.send('쿠폰 구매 성공');
    }
  }
}
