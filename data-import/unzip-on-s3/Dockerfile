# Setup python environment
FROM python:3.7-slim
ENV VIRTUAL_ENV=/opt/venv
RUN pip install virtualenv
RUN virtualenv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Run job
COPY data-import/unzip-on-s3/src /src
WORKDIR /src
ENTRYPOINT ["python", "main.py"]
