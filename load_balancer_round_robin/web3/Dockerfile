FROM ubuntu:latest
RUN apt update && apt install -y python3 && apt install -y iputils-ping && apt install -y curl
RUN echo "Hello from Web3" > index.html

CMD ["python3", "-m", "http.server", "80"]