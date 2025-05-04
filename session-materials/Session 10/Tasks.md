# Docker Tasks

# Submission Guidelines, please read this first:

- Make a directory called Docker Task 1.
- Inside the directory make 2 directories called `P1` and `P2`

Directory Structure should be like this

```bash
.
├── P1
│   ├── markdown-file-with-commands-used.md
│   ├── screenshot-mongodb-docker.png
│   └── screenshot-data-mongodb.png
└── P2
    ├── expressjs-app/
    ├── Dockerfile
    ├── markdown.md
    └── exported-docker-image.tar (bonus)

```
## Task 1:1: Docker Container Management

**Objective:** Practice working with Docker containers by setting up and managing a MongoDB database container.

**Tasks:**

1. Pull the official MongoDB image from Docker Hub.
2. Create a named container called `my-mongodb` from the MongoDB image.
3. Run the MongoDB container in detached mode with proper port mapping (example: 27017:27017).
4. Connect to the MongoDB container and create a new database called `student_records` with a collection called `students`.
5. Insert at least three student documents into the collection.
6. View the logs of your MongoDB container.
7. Stop the container, restart it, and verify your data persists.
8. Create a markdown file with the commands you used with screenshots showing the output.

**Deliverables:**
- markdown file with the commands you used 
- Screenshot of MongoDB running in Docker
- Screenshot of your data in MongoDB

## Task 1:2: Creating Custom Docker Images

**Objective:** Create and distribute your own Docker image for a simple Node.js application.

**Tasks:**

1. Create a simple "Hello World" Express.js API with the following endpoints:
   - GET `/`: returns {"message": "Hello Docker World!"}
   - GET `/info`: returns information about the Docker container (hostname, environment, etc.)

2. Write a Dockerfile that:
   - Uses an appropriate Node.js base image
   - Copies your application code into the image
   - Installs dependencies
   - Exposes the correct port
   - Sets the correct start command

3. Build your Docker image with a meaningful name and tag (e.g., `my-express-api:v1`).

4. Run a container from your image and test that your API endpoints work correctly.

5. Save your Docker image as a file that could be shared with teammates. (bonus)

6. Write a markdown file that explains your Dockerfile choices and how to run your container.

**Deliverables:**
- Express.js application code
- Complete Dockerfile
- Markdown file
- Exported Docker image file (bonus)
