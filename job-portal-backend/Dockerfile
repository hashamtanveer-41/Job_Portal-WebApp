# Build stage
FROM maven:3.9.9-eclipse-temurin-24-noble AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:24-jre-noble
WORKDIR /app
COPY --from=build /app/target/job-portal-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]