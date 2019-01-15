FROM node:8-alpine
RUN apk update && apk add mongodb && apk add git
RUN mkdir -p /data/db
WORKDIR /usr/scr/app
RUN npm install -g @angular/cli@6.2.8
RUN git clone https://github.com/4pablo124/DSS-IISS_Sistema-de-Recompensas.git
WORKDIR /usr/scr/app/DSS-IISS_Sistema-de-Recompensas/ProyectoRecompensa/BD
RUN git pull
RUN npm rebuild node-sass
RUN npm install
COPY wrapper.sh wrapper.sh
CMD ["sh","wrapper.sh"]