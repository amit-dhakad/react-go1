# Stage 1: Build Go binary
FROM golang:1.17-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module files and download dependencies
COPY go.mod ./
RUN go mod download

# Copy the rest of the Go application source code
COPY . .

# Build the Go binary
RUN go build -o myapp .

# Stage 2: Final image
FROM alpine:latest

# Copy the built binary from the previous stage
COPY --from=build /app/myapp /usr/local/bin/myapp

# Set the entry point for the container
ENTRYPOINT ["myapp"]
