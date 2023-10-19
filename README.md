# Quick test

## Introduction

Thanks for using this test. We have created a simple api that deploys in a docker container. 
We've devised some small tasks that will help us guage your fit. 

Please follow the installation instructions carefully and don't spend any more time than allocated in the tasks below, if you run out of time or it is too exhausting please post what you have and we will review it regardless.

## Installation (15 minutes)

### Prerequisites

- docker installed | https://docs.docker.com/get-docker/
- git installed | https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- WSL2 for windows | https://learn.microsoft.com/en-us/windows/wsl/install
- A database GUI
- NPM | https://docs.npmjs.com/cli/v6/commands/npm-install
- Postman | https://www.postman.com/

### Steps

1. Git clone the repository `git clone https://github.com/ECliamb/engineering-test.git`
2. `cd` into the engineering-test directory
3. run `docker-compose up -d --force-recreate`  (some versions of docker will use docker compose rather than docker-compose)
4. run `docker exec -it engineering-test_eurocamp-api_1 npm run seed:run` (sometimes the name is different, check with docker ps)
5. Check that there is data in the database tables (see below for connection details). Also review the api documentation at http://localhost:3001/api
6. Load the postman collection from the root directory 'Engineering.postman_collection.json' and test the api endpoints

#### Connection details
Credentials for your database GUI 

HOST=localhost
PORT=5433
USER=postgres
PASSWORD=postgres
NAME=eurocamp_api


# Tasks

Your task is to answer some questions and complete the following tasks below - We're looking for solutions that demonstrate passion, effort and knowledge (typescript, caching, testing, state etc.). Send a link with your solution and accompanying notes to engineering@eurocamp.co.uk or your representative. <b>Please note we can't accept zip files containing solutions, please utilise github, dropbox or google drive.</b>

With all tasks - **please add comments, utilise tests and submit clear instructions on running your solution.**

## All Applicants

### Task 1 (15 minutes). 

 - Review the `eurocamp_api` database and make notes on the current structure and state of the database. How would you improve it using relational database best practices? We're mainly interested in how you would improve the database theoretically

I do not have a lot of experience in database designs. But from reading about relational databases a couple of enhancements I would do are:

- Insure the data types are inline with the data expected in order to provide consistency and constrains ( currently they are all set to varchar)
- In the user table I would create a first name and last name column to increase consistency and ensure data is as atomic as possible
- For readability I woud update the foreign keys in the user table to userId and parc to parcId in bookings and would create the relationship a booking and a parc have to a user.
    I would imagine the following logic:
        Assuming a user can only book one parc at a time:

            User relation could have a one to many parcs and one to many bookings
            Booking can have a one to one relationship with parc

       

### Task 2 (10 minutes)

- Brief explanation of the latest practices in your respective field of expertise.


- During my time at Banked I started working on web components talking to a ruby monolithic which was very light and allowed us to experiment with various ways of collecting/ processing payments (build a checkout journey for the uk and payment links). We used storybook to build and house all design components.

As the company grew and the need to scale grew, the consumer team migrated to using react/nextjs and focusing more on building different customer journeys based on regions/api availability. With different regions came different languages and accessibility requirements. We integrated with Lokalise and ensured we were WCAG commpliant.
New journeys brought in Xstate for state management. We used sentry, circle ci argo cd and github actions for deployment. All ran in docker containers in GCP. I was more involved in the user experience and front-end side of this.


<hr />

## Senior Roles (1 hour)

:warning: Please note that you should just picks the tasks that fit your specialisation e.g. .NET developer should choose` [.Net]` tasks. <i>Do not do all the tasks</i>

The API at localhost:3001 is what you will communicate with. It has 3 entity collections with various CRUD operations. 

However some of the endpoints do fail sometimes and return exceptions or 500 error responses every so often.

<b>Please note we would appreciate Typescript being used.</b>

### **[.Net Only] >> Task 1.**

Create a .NET core client service that consumes the api (as seen on http://localhost:3001/api) and actions the api endpoints. This service should handle api failures or bad responses. 


### **[Node Only] >> Task 1.**

Create a Node client service that consumes the api (as seen on http://localhost:3001/api) and actions the api endpoints. This service should handle api failures or bad responses. 

An example of a test(s) is expected.


### **[Frontend Only] >> Task 1.**

Using your favourite frontend framework please interact with the API and handle potential API failures.


# Thanking you
Please understand we don't expect you too spend too much time on this. We're happy to review whatever you finish at engineering@eurocamp.co.uk
