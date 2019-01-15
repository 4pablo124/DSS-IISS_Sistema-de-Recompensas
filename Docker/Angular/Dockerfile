FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx
RUN apk update && apk add npm && apk add git
RUN npm install -g @angular/cli@6.2.8
RUN git clone https://github.com/4pablo124/DSS-IISS_Sistema-de-Recompensas.git
WORKDIR /usr/share/nginx/DSS-IISS_Sistema-de-Recompensas/ProyectoRecompensa
RUN git pull
RUN npm rebuild node-sass
RUN npm install
RUN ng build --prod
WORKDIR /usr/share/nginx/html
RUN cp -R ../DSS-IISS_Sistema-de-Recompensas/ProyectoRecompensa/dist/ProyectoRecompensa/* .