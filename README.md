# DevOps Cloud Monitor

A simple cloud and DevOps monitoring dashboard built to demonstrate AWS deployment, Linux administration concepts, and basic web development.

The project was created as part of the AWS Weekend Deployment Challenge and deployed using Amazon S3 and Amazon CloudFront.
## 🚀 Live Demo

[Open DevOps Cloud Monitor](https://d15sptahuiv3de.cloudfront.net/)

## 📌 Project Overview

DevOps Cloud Monitor is a responsive dashboard created as part of the AWS Weekend Deployment Challenge.

The project presents cloud infrastructure and DevOps concepts through a simple monitoring-style interface. It includes infrastructure status cards, AWS service information, Linux command demonstrations, and a project showcase.

The application is built as a static web application using HTML, CSS, and JavaScript and is deployed on AWS using Amazon S3 and Amazon CloudFront.
## ☁️ AWS Architecture

```text
                    User
                      |
                      | HTTPS
                      v
              Amazon CloudFront
                      |
                      | Origin Access Control
                      v
                Amazon S3
                      |
          -------------------------
          |           |           |
          v           v           v
      index.html  style.css   script.js
```


## 🔄 How the Architecture Works

1. A user opens the application using the CloudFront distribution URL.
2. Amazon CloudFront receives the HTTPS request.
3. CloudFront uses Origin Access Control (OAC) to securely access the S3 origin.
4. Amazon S3 provides the requested static website files.
5. CloudFront delivers the content back to the user over HTTPS.

This architecture separates content storage from content delivery and provides controlled access between CloudFront and the S3 origin.

## 🛠️ AWS Services Used

### Amazon S3
Amazon S3 is used to store the static website files:
- `index.html`
- `style.css`
- `script.js`

### Amazon CloudFront
Amazon CloudFront is used as the content delivery network (CDN) and HTTPS entry point for the application.

### CloudFront Origin Access Control
Origin Access Control (OAC) allows CloudFront to securely access objects stored in the S3 bucket without making the S3 objects publicly accessible.
## 💻 Technologies Used

- HTML5 — Structure of the web application
- CSS3 — Responsive design and styling
- JavaScript — Dynamic functionality and local time display
- Git — Version control
- GitHub — Source code repository
- Amazon S3 — Static file storage
- Amazon CloudFront — Content delivery
- Linux — System administration concepts and command demonstrations
- Bash — Basic shell scripting

## 🐧 Linux Concepts Demonstrated

The project also demonstrates basic Linux system administration and troubleshooting concepts practiced during development.

- SSH — Remote server access
- File Management — `ls`, `cat`, `cp`, `mv`, `rm`
- File Permissions — `chmod`
- File Ownership — `chown`
- Process Monitoring — `top`
- Service Management — `systemctl`
- System Logs — `journalctl`
- Network Troubleshooting — `ip`, `ss`, `curl`
- Disk Usage — `df`, `du`
- Bash Scripting — Variables, conditions, and basic loops
- ## 📊 Dashboard Features

- Infrastructure overview dashboard
- EC2 status demonstration
- CPU and memory demonstration metrics
- Network connectivity status concept
- AWS services overview
- Linux command demonstrations
- Live local time display using JavaScript
- Responsive design for desktop and mobile screens
- HikeVerse project showcase
- GitHub project links
- ## 🚀 Deployment

The application was deployed using Amazon S3 and Amazon CloudFront.

### Deployment Steps

1. Created an Amazon S3 bucket in the Mumbai AWS Region (`ap-south-1`).
2. Uploaded the static website files to the S3 bucket.
3. Created an Amazon CloudFront distribution.
4. Configured the S3 bucket as the CloudFront origin.
5. Enabled CloudFront Origin Access Control (OAC).
6. Configured `index.html` as the default root object.
7. Tested the application using the CloudFront HTTPS URL.

### Live Application

[Open DevOps Cloud Monitor](https://d15sptahuiv3de.cloudfront.net/)

## 🔐 Security

The project follows basic AWS security practices:

- S3 objects are not publicly exposed for direct website access.
- CloudFront Origin Access Control (OAC) is used to access the S3 origin.
- HTTPS is provided through Amazon CloudFront.
- Only the required AWS resources were used for the deployment.
- No sensitive credentials or AWS access keys are stored in the project repository.



## 📚 What I Learned

Building this project helped me understand how a static web application can be deployed on AWS using cloud services.

Key learning outcomes:

- Understanding Amazon S3 static content storage
- Understanding Amazon CloudFront and CDN concepts
- Configuring CloudFront with an S3 origin
- Understanding Origin Access Control (OAC)
- Working with AWS regions and resources
- Using Git and GitHub for version control
- Connecting Linux administration concepts with cloud infrastructure
- Practicing basic Bash scripting and Linux troubleshooting
- Understanding the difference between application demonstration metrics and real monitoring data
- Deploying and testing a real application on AWS


## 🔄 Git Workflow

Git was used to manage the project source code and track changes.

Basic workflow used:

```bash
git status
git add .
git commit -m "Update project files"
git push origin main
```

## 🎯 Project Goal

The goal of DevOps Cloud Monitor is to demonstrate practical knowledge of cloud deployment, Linux administration, basic DevOps concepts, and web development through a simple working project.

This project is part of my continuous learning journey toward Cloud Operations, Linux Administration, and DevOps roles.

## 🔮 Future Improvements

The project can be extended with additional DevOps and cloud monitoring capabilities:

* Integrate real-time AWS CloudWatch metrics
* Add EC2 health and resource monitoring
* Add CPU, memory, and disk utilization monitoring
* Implement CloudWatch alarms and notifications using Amazon SNS
* Add AWS IAM role-based access
* Add automated deployment using CI/CD
* Containerize the application using Docker
* Add infrastructure automation using Terraform
* Implement centralized logging and monitoring
## 👨‍💻 Author

**Mayur Khairnar**

B.Sc. Computer Science | AWS Certified Cloud Practitioner | Cloud & DevOps Learner

- GitHub: [Mayur-Builds](https://github.com/Mayur-Builds)
- LinkedIn: [Mayur Khairnar](https://www.linkedin.com/in/mayur-khairnar-5b27ab3ba/)
