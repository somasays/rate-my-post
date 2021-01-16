[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

# Rate My Post
Response prediction system for Stack Exchange communities. Predict if a post will get answered based on i.a. post content, title and user data.

Built on AWS.

## Data
Data used comes from [Stack Exchange Data Dump](https://archive.org/details/stackexchange). Stack Exchange data is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

## Web application
End user interface is provided at http://ratemypost-app.s3-website-us-east-1.amazonaws.com/.

>Note: Underlying AWS Sagemaker model may not be deployed due to cost saving when you visit the website. If this is the case, predictions won't be generated. Please contact me if you would like to test it in action.

## Architecture
![Architecture](setup/architecture.png?raw=true "Architecture")

Most of the system components are defined in the [Cloudformation template](setup/stack.yaml).

## License
[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

This project is licensed under
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].