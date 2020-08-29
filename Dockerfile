FROM node:alpine

RUN yarn global add serve

WORKDIR /app

RUN yarn run build

COPY build /app/build

ENV PORT 800
EXPOSE ${PORT}

CMD serve -p $PORT -s build/