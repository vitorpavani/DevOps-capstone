[![CircleCI](https://circleci.com/gh/vitorpavani/DevOps-capstone.svg?style=svg)](https://app.circleci.com/pipelines/github/vitorpavani/DevOps-capstone)

# DevOps-capstone

#### Step 1: Propose and Scope the Project

- [ ] Plan what your pipeline will look like. 
- [ ] Continuous Integration with Circle CI
- Pick a deployment type - either rolling deployment
- For Docker I will use Amazon Elastic Container Service to deploy in my Lambda function

#### Step 2: Circle CI, and implement rolling deployment.

- If you're using Circle CI, set up your circle CI account and connect your git repository.
- Set up your environment to which you will deploy code.

#### Step 3: Pick AWS Kubernetes as a Service, or build your own Kubernetes cluster.

- Use CloudFormation to build your “infrastructure”; i.e., the Kubernetes Cluster.
- It should create the EC2 instances (if you are building your own), set the correct networking settings, and deploy software to these instances.
- As a final step, the Kubernetes cluster will need to be initialized. The Kubernetes cluster initialization can either be done by hand, or with Ansible/Cloudformation at the student’s discretion.

#### Step 4: Build your pipeline

- Construct your pipeline in your GitHub repository.
- Set up all the steps that your pipeline will include.
- Configure a deployment pipeline.
- Include your Dockerfile/source code in the Git repository.
- Include with your Linting step both a failed Linting screenshot and a successful Linting screenshot to show the Linter working properly.

#### Step 5: Test your pipeline

- Perform builds on your pipeline.
- Verify that your pipeline works as you designed it.
- Take a screenshot of the Circle CI or Jenkins pipeline showing deployment, and a screenshot of your AWS EC2 page showing the newly created (for blue/green) or modified (for rolling) instances. Make sure you name your instances differently between blue and green deployments.

## Submitting your Project

Make sure you have taken all the screenshots you need, as directed above, and create a text file with a link to your GitHub repo.

Zip up these screenshots and text file into a single doc, and this will constitute your project submission.

Before you submit your project, please make sure you have checked all of your work against the project [rubric](https://review.udacity.com/#!/rubrics/2577/view). If you find that you have not satisfied any area of the rubric, please revise your work before you submit it. This rubric is what your reviewer will be using to assess your work.

You'll then submit your project on the next page.
