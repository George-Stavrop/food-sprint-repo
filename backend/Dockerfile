FROM maven:3.8-openjdk-17 AS build

WORKDIR /app


COPY pom.xml .

COPY src ./src

RUN mvn dependency:go-offline -B  && mvn dependency:resolve-plugins -B


RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]