# Use Java 17 runtime
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy jar file
COPY target/url-shortener-sb-0.0.1-SNAPSHOT.jar app.jar

# Expose port (Render uses 8080 usually)
EXPOSE 8080

# Run app with PROD profile
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]