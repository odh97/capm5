# 1. 운영체제 및 프로그램 설치(하나하나 입력해서 설치하는 방식)
# 1.1 운영체제 설치 (FROM 명령어 - 이미지 다운로드)
#FROM ubuntu:22.04

#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn이 설치된 이미지를 사용하는 방식)
FROM node:14


# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커 컴퓨터 안에서 실행할 명령어
CMD node index.js

# RUN과 CMD의 차이
# RUN - 도커 컴퓨터 안에서 실행할 명령어 (도커 이미지를 만들 때 실행 후 결과를 이미지로 저장)
# CMD - 도커 컨테이너가 실행될 때 실행할 명령어


# docker build
# 도커 이미지는 도커 컨테이너를 만들기 위한 틀