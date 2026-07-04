FROM ubuntu:latest
RUN apt-get update && apt-get install -y python3 iputils-ping
RUN echo "Hello from web1" > index.html
CMD ["python3", "-m", "http.server", "80"]