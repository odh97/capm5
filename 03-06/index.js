import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 스키마 정의
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// 스키마에 대한 데이터를 반환하는 함수의 맵입니다.
const resolvers = {
  Query: {
    fetchBoard: (parent, args, context, info) => {
      return '게시물 조회 성공';
    },
  },

  Mutation: {
    createBoard: (parent, args, context, info) => {
      console.log('============ board post ============');
      console.log('parent >>>>>', parent); // parent는 부모 객체를 나타냅니다.
      console.log('request >>>>>', args); // args는 요청 매개변수를 나타냅니다.

      return '게시물 등록 성공';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,

  cors: true,
  // cors: {
  //     origin: ['http://localhost:5500', 'http://google.com'], // 허용할 도메인
  //     credentials: true, // 인증정보 허용
  // },
});

// ApolloServer 인스턴스를 `startStandaloneServer` 함수에 전달합니다
// 1. Express 앱을 생성합니다.
// 2. 미들웨어로 ApolloServer 인스턴스를 설치합니다.
// 3. 들어오는 요청을 처리하도록 앱을 준비합니다.
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
