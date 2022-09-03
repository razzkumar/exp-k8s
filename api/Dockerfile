FROM golang:1.19-alpine AS builder

WORKDIR /build

COPY . .

RUN go get

RUN go build -o api

FROM alpine

WORKDIR /app

COPY --from=builder /build/api /app/

EXPOSE 4000

ENTRYPOINT [ "/app/api" ]
