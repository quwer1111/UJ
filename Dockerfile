FROM registry.application.net/dbase/server-nodejs6:master6

COPY ./ /app

WORKDIR /app

RUN npm install
ENV PORT 80
CMD ["npm", "start"]
#CMD ["nginx", "-c", "/usr/share/nginx/html/server.conf", "-g", "daemon off;"]
