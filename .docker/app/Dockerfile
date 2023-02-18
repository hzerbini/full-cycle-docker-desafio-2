FROM node:current

WORKDIR /app

COPY ./src /app

EXPOSE 3000

ENTRYPOINT ["sh", "-c", "npm install && npm run dev"]
