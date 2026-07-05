FROM ubuntu:latest
RUN apt update && apt install -y python3 && apt install -y iputils-ping
RUN echo "Hello from Backend3" > index.html

CMD ["python3", "-m", "http.server", "80"]