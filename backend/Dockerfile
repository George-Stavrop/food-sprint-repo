FROM maven:3.8-openjdk-17

WORKDIR /app

COPY . .


RUN mvn clean package -DskipTests


EXPOSE 8080


CMD ["java", "-jar", "target/*.jar"]
