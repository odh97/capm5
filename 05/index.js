const createMessage = () => {
  // 입력된 메시지 : "안녕하세요 https://www.naver.com에 방문해 주세요."

  // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기! (.find() 등의 메소드 사용)
  const url = 'https://www.naver.com';

  // 2. axios.get으로 요청해서 html코드 받아오기 => 스크랩핑
  const result = axios.get(url);
  console.log('네이버 요청', result?.data);

  // 3. 스크랩핑 결과에서 OG(Open Graph) 코드를 골라내서 변수에 담기 => cheerio 사용
  const qqq = cheerio.load(result.data);
  qqq('meta').each(() => {});
};
