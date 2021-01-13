# Rate My Post
Response prediction system for Stack Exchange communities. Predict if a post will get answered based on i.a. post content, title and user data.

Built on AWS.

## Data
Data used comes from [Stack Exchange Data Dump](https://archive.org/details/stackexchange). Stack Exchange data is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Web application
End user interface is provided at http://ratemypost-app.s3-website-us-east-1.amazonaws.com/.

>Note: Underlying AWS Sagemaker model is not deployed currently due to cost saving, so predictions won't be generated. Please contact me if you would like to test it in action.

## Architecture
![Architecture](setup/architecture.png?raw=true "Architecture")

Most of the system components are defined in the [Cloudformation template](setup/stack.yaml).
