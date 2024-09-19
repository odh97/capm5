import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from "@apollo/server/standalone";

// 스키마 정의
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// 스키마에 대한 데이터를 반환하는 함수의 맵입니다.
const resolvers = {
    Query: {
        hello: () => 'world',
    },

};



const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// ApolloServer 인스턴스를 `startStandaloneServer` 함수에 전달합니다
// 1. Express 앱을 생성합니다.
// 2. 미들웨어로 ApolloServer 인스턴스를 설치합니다.
// 3. 들어오는 요청을 처리하도록 앱을 준비합니다.
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);