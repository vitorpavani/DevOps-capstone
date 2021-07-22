
[![CircleCI](https://circleci.com/gh/vitorpavani/DevOps-capstone.svg?style=svg)](https://app.circleci.com/pipelines/github/vitorpavani/DevOps-capstone)

# DevOps-capstone
## Simple signing app 
### The final project for the Udacity Nano DevOps course will be deploying the investhub app to the cloud using CircleCi, AWS Cloudformation, Ansible and AWS CloudFront. 
The Investhub app is running with react in the frontend and NodeJS for the backend. The Database is with MongoDB at Atlas MongoDB. 
For deploying the app,  it will be divided in 2 main parts:
- The frontend will be deployed in an S3 bucket and distributed with AWS Cloudfront. 
- The backend will be deployed in a EC2 machine using Docker for the content and ansible for configuring. 
- everything will be deployed thought the circleci pipeline and monitor with prometheus. 

For testing, the backend won't have a DB running. So the only user and password that it will pass is:
   
    user: "admin"
    password: "1234"
#### Step 1: Propose and Scope the Project
- [X] Plan what your pipeline will look like.
- [X] Continuous Integration with Circle CI
- [X] Pick a deployment type - green/ blue strategy. 
- [X] For Docker I will use Docker.com as repo.
#### Step 2: Circle CI, and implement rolling deployment.
- [X] If you're using Circle CI, set up your circle CI account and connect your git repository.
- [X] Set up your environment to which you will deploy code.  
#### Step 3: Build your pipeline
- [X] Construct your pipeline in your GitHub repository.
- [X] Set up all the steps that your pipeline will include.
- [X] Configure a deployment pipeline.
- [X] Include your Dockerfile/source code in the Git repository.
- [X] Include with your Linting step both a failed Linting screenshot and a successful Linting screenshot to show the Linter working properly.
#### Step 4: Test your pipeline
- [X] Perform builds on your pipeline.
- [X] Verify that your pipeline works as you designed it.
- [X] Take a screenshot of the Circle CI or Jenkins pipeline showing deployment, and a screenshot of your AWS EC2 page showing the newly created (for blue/green) or modified (for rolling) instances. Make sure you name your instances differently between blue and green deployments.
## Submitting your Project
Make sure you have taken all the screenshots you need, as directed above, and create a text file with a link to your GitHub repo.
Zip up these screenshots and text file into a single doc, and this will constitute your project submission.
Before you submit your project, please make sure you have checked all of your work against the project [rubric](https://review.udacity.com/#!/rubrics/2577/view). If you find that you have not satisfied any area of the rubric, please revise your work before you submit it. This rubric is what your reviewer will be using to assess your work.
You'll then submit your project on the next page.