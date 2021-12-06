# Healfhir

This repository is for the project created by Junior Design Team 1122. The purpose of our application is to demonstrate the capabilities of the FHIR patient record format while utilizing Microsoft's Healthcare API for FHIR.

## Project Structure
There are two main frameworks in our application:

- Spring Boot: Utilized for the backend.
- React: Utilized for the frontend.

The project is then strucutred as following:
- [`frontend/`](frontend): Contains all the front-end code.
  - [`package.json`](frontend/package.json): Contains all the dependencies and commands to run and build React app.
  - [`src/`](frontend/src): Contains the code that is rendered and seen by the user.
- [`src/`](src): Contains all the backend code.
- [`pom.xml`](pom.xml): Contains general information about the project, required dependencies and configurations to build the project.

## Front end
### Pre-requisites

The following tools and technologies are used to build and run the project.

1. Node.js

Node.js is a Javascript runtime that allows you to run Javascript outside of your browser. For this project, please download and perform
the instalation for this technology here:

- [Installing Node.js on Windows 10](https://stackoverflow.com/questions/27344045/installing-node-js-and-npm-on-windows-10)
- [Installing Node.js on Mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)

After installing, you can verify the that you have the latest version required for this project by running the following command:

```console
$ node -v
  v17.0.1
```

2. NPM (Node Package Manager)

NPM helps with downloading and installing packages (dependencies) that are required to run the application, particularly the frontend. It should be immediately
installed with npm, which you can verify with the command:

```console
$ npm -v
8.1.0
```

However, if `npm` is missing, download npm from [here](https://www.npmjs.com/get-npm) (this includes all the installation guide).

3. Installing Dependencies

Once you have the required technologies installed, you can install all the required dependencies for the front-end by running the command:

```console
$ npm install
```

### Running front-end application

If you wish to run only the frontend code, you can run the command:

```console
$ npm run start
```

This should initialize the application on `https://localhost:3000`.

## Backend
### Pre-requisites

1. Java JDK

JDK (Java Development Kit) is a development environment for building application and components using Java. <br />
For this project, please download OpenJDK 11  LTS version from [here](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=openj9) and perform the installation.
  - Choose OpenJDK 11 (LTS) as the version
  - Choose OpenJ9 as the JVM.
  - Click the Latest release download button to download the package.

To verify the installation, run the following command:

```console
$ java -version
openjdk version "17" 2021-09-14
OpenJDK Runtime Environment Homebrew (build 17+0)
OpenJDK 64-Bit Server VM Homebrew (build 17+0, mixed mode, sharing)
```

2. Maven

Maven is a command-line tool for building and managing any Java-based project. Please see the installation instructions [here](https://www.baeldung.com/install-maven-on-windows-linux-mac) for different platforms.

### Installing Dependent Libraries
To install of the required dependencies:

```console
$ mvn install
```

### Running the backend

In order to run this project, you will need an Azure environment set up with the Azure Healthcare Api for FHIR available. The full tutorial to create
the environment can be found [here](https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/tutorial-web-app-fhir-server).

Once you have completed the environment setup and have created a token for authentication, you can use that same token in order to access the FHIR api from the application. You can copy and paste the entire token string into the `token.txt` file.

Once you already have React, Spring-Boot, Maven installed and you have set up the token.txt file you can run the command:

```console
$ mvn spring-boot:run
```

This should initialize the application on `https://localhost:8080`.

## Troubleshooting

These are possible problems that may arise and their possible solutions:
1. Error code 403

Error code 403 stands for "Forbidden Request". This means that you don't have the permissions to make the call to the API. This is normally due to not having a valid token or not having a token at all, which can be fixed by generating a new token (can be done by clicking the Generate Token button in the authorization tab in Postman) and copying the token to the `token.txt` file.

2. Error code 5000

Error code 500 stands for "Internal Server Error". In this case, typically this is due to using an expired token, which can be fixed by generating a new token and copying it into the `token.txt` file.


