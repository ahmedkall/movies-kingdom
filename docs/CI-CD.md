# CI/CD

The provided GitHub Actions workflow file and Dockerfile work together to automate the deployment process for a React application to GitHub Pages. The workflow is triggered by a push event on the **`main`** branch and utilizes Docker Hub and GitHub Container Registry for image storage. It starts by checking out the code from the repository and logging in to Docker Hub. The Dockerfile builds a multi-stage image, installing dependencies and running tests. If the tests pass, the image is tagged and pushed to GitHub Packages. The built React app is then copied from the Docker container to the **`build`** directory. Finally, the app is deployed to GitHub Pages using the **`peaceiris/actions-gh-pages`** GitHub Action, which publishes the contents of the **`build`** directory. This automation enables seamless and reliable deployments of the React application to GitHub Pages, ensuring that only tested and approved changes are deployed.

## Steps:

### 

1. The workflow file is triggered when a push event occurs on the **`main`** branch.
2. The workflow sets an environment variable **`DOCKER_IMAGE_NAME`** with the value **`oussamf/carthagians`**.
3. The workflow defines a job named **`build-and-deploy`** that runs on an Ubuntu environment.
4. Within the job, the code is checked out from the repository.
5. The workflow logs in to Docker Hub using the provided Docker credentials, the credentials are stored as secrets in the repository.
6. The Docker image is built and pushed to Docker Hub using the specified Dockerfile located in the **`./client`** directory. The build arguments are passed, including the **`REACT_APP_TMDB_KEY`** value from the secrets.
7. The built Docker image is then tested by running the **`npm test`** command within a container.
8. The test results are stored in a file named **`test-results.txt`**.
9. The workflow checks the test status by analyzing the contents of **`test-results.txt`**. If the tests fail, it skips the deployment; otherwise, it proceeds with the deployment.
10. The workflow logs in to GitHub Container Registry using the GitHub token.
11. The Docker image is pulled from Docker Hub.
12. The Docker image is tagged for GitHub Packages using the **`ghcr.io`** registry and the repository name.
13. The tagged Docker image is pushed to GitHub Packages.