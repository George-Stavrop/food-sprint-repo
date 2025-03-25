FROM maven:3.8-openjdk-17 AS build

WORKDIR /app

# Copy pom.xml first to leverage Docker cache for dependencies
COPY pom.xml .
# Copy source code
COPY src ./src

RUN mvn dependency:go-offline -B  && mvn dependency:resolve-plugins -B

# Package the application
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]