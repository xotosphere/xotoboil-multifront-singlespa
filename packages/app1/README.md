# app1

The Angular Application

## Installing and running the application

1. Run:

    ```shell script
    yarn install
    npm run start
    ```

    Note that you **must** use **yarn** as your package manager for the `app1`, it allows you to override the webpack dependencies for the CLI.
    The `app1/package.json` contains the following section to override webpack to use version 5 instead of 4:

    ```json
      "resolutions": {
        "webpack": "5.0.0"
      },
    ```

2. Access the application at <http://localhost:8081>
