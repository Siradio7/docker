FROM ubuntu:latest

RUN apt update && apt install -y python3

WORKDIR /app

RUN echo "#BACKEND2" > index.html

CMD ["python3", "-m", "http.server", "8000"]