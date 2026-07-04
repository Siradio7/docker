FROM ubuntu:latest
RUN apt-get update && apt-get install -y python3 iputils-ping
RUN echo "Hello from web2" > index.html
CMD ["python3", "-m", "http.server", "8000"]