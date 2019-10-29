## Application Setup

* clone to the local machine using `git clone`
* go to directory futureeducation using `cd futureeducation` 
* install the node modules using ` npm install`
* run the npm test to ensure that tests are running `npm test`

## Making changes to UI only
When you are planning to make the changes in the UI and validate against the api server then run the spring boot application and at the same time run the react app
* From the futureeducation directory fire `./gradlew bootRun -PisLocal=true` it will run the java application which will give the access to API
* From the frontend directory start the npm `npm start`, this will run the node app


## Testing the APP
Run `./gradlew clean test -PisLocal=true` from the futureeducation directory

## Building the APP
Run `./gradlew clean build -PisLocal=true ` from the futureeducation directory, this will create the jar which can deployed. The jar will be created in futureeducation/build/libs folder

## Running the APP
Run `./gradlew bootRun -PisLocal=true` from the futureeducation directory, After it is successfully started then you can navigate to http://localhost:8080

