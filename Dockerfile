FROM node:12

RUN git clone https://github.com/abouneau/CDP_gr1eq3_release
ADD package*.json /app/
WORKDIR /app
RUN npm install
ADD . /app/
EXPOSE 4321
EXPOSE 4320
VOLUME /app/

CMD node app.js
