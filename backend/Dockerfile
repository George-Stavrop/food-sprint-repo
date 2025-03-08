FROM maven:3.8-openjdk-17 as build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline -B 

COPY src ./src 

RUN mvn package -DskipTests

RUN mkdir -p target/extracted && \
    java -Djarmode=layertools -jar target/*.jar extract --destination target/extracted


FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=build /app/target/extracted/dependencies/ ./
COPY --from=build /app/target/extracted/spring-boot-loader/ ./
COPY --from=build /app/target/extracted/snapshot-dependencies/ ./
COPY --from=build /app/target/extracted/application/ ./

EXPOSE 8080

ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]