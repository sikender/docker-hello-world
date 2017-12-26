FROM node:latest
ENTRYPOINT [ "node" ]
CMD [ "app.js" ]
WORKDIR /app
COPY app.js app.js
EXPOSE 3000