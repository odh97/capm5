FROM node:18


# package.json, yarn.lock 파일을 복사해서 yarn install을 먼저 실행
# 내용 변경 x => 캐시 사용
# 내용 변경 o => 캐시 사용 x

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

CMD yarn start:docker
