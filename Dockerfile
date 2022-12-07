FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN chmod 777 /usr/share/nginx/html/bubble-boom-graffiti-font/

CMD ["nginx", "-g", "daemon off;"]