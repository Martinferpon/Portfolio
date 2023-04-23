FROM amazoncorretto:11-alpine-jdk
MAINTAINER MAFP
#COPY target/mafp-0.0.1-SNAPSHOT.jar mafp-app.jar
ADD target/mafp-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

