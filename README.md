# ML Exp Tracker

A simple Node.js API to track machine learning experiments, including their associated models and metrics.

## Features

-   Create, Read, Update, and Delete (CRUD) operations for experiments.
-   CRUD operations for models associated with experiments.
-   CRUD operations for metrics associated with experiments.
-   Built with Express.js and Mongoose.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or later recommended)
-   [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ml-exp-tracker
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1.  Create a `.env` file in the root of the project.
2.  Add your MongoDB connection string to the `.env` file:
    ```
    MONGO_URL=your_mongodb_connection_string
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB URI.

## Running the Application

-   **Development Mode:**
    To run the server with automatic restarts on file changes (using `nodemon`):
    ```bash
    npm run dev
    ```

-   **Production Mode:**
    ```bash
    npm start
    ```

The server will start on port 5000 by default, unless a `PORT` environment variable is specified.

## API Endpoints

All endpoints are prefixed with `/api`.

### Experiments

-   `POST /api/experiments/add`
    -   Adds a new experiment.
-   `GET /api/experiments/getall`
    -   Retrieves all experiments.
-   `GET /api/experiments/get/:id`
    -   Retrieves a single experiment by its ID.
-   `PUT /api/experiments/update/:id`
    -   Updates an existing experiment by its ID.
-   `DELETE /api/experiments/delete/:id`
    -   Deletes an experiment by its ID.

### Metrics

-   `POST /api/metrices`
    -   Adds a new metric.
-   `GET /api/metrices`
    -   Retrieves all metrics.
-   `GET /api/metrices/experiment/:experimentId`
    -   Retrieves all metrics for a specific experiment.
-   `GET /api/metrices/:id`
    -   Retrieves a single metric by its ID.
-   `PUT /api/metrices/:id`
    -   Updates an existing metric by its ID.
-   `DELETE /api/metrices/:id`
    -   Deletes a metric by its ID.

### Models

-   `POST /api/models`
    -   Adds a new model.
-   `GET /api/models`
    -   Retrieves all models.
-   `GET /api/models/experiment/:experimentId`
    -   Retrieves all models for a specific experiment.
-   `GET /api/models/:id`
    -   Retrieves a single model by its ID.
-   `PUT /api/models/:id`
    -   Updates an existing model by its ID.
-   `DELETE /api/models/:id`
    -   Deletes a model by its ID.
