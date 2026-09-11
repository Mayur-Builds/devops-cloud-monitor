# DevOps Cloud Monitor

A simple cloud and DevOps monitoring dashboard built to demonstrate AWS deployment, Linux administration concepts, and basic web development.

## 🚀 Live Demo

https://d15sptahuiv3de.cloudfront.net/

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
🛠️ AWS Services Used
Amazon S3

Amazon S3 is used to store the static website files:

index.html
style.css
script.js
Amazon CloudFront

Amazon CloudFront is used as the content delivery network and HTTPS entry point for the application.

CloudFront Origin Access Control

Origin Access Control (OAC) allows CloudFront to securely access objects stored in the S3 bucket without requiring the website files to be publicly accessible.

💻 Technologies Used
HTML5
CSS3
JavaScript
Git
GitHub
Amazon S3
Amazon CloudFront
🐧 Linux Concepts Demonstrated

The dashboard includes examples of common Linux administration and troubleshooting commands:

systemctl status sshd
ss -tuln
df -h
top
curl

These commands represent common activities involved in Linux system administration, service management, network inspection, disk usage monitoring, process monitoring, and connectivity testing.

📊 Dashboard Features
Infrastructure overview
EC2 monitoring concept
CPU demonstration metric
Memory demonstration metric
Network connectivity status
AWS services overview
Linux command demonstrations
Live local date and time
Dashboard status interaction
Responsive web design

Note: The CPU and memory values displayed in the dashboard are demonstration metrics and are not real-time EC2 monitoring data.

🌐 Deployment

The application was deployed using the following process:

Created an Amazon S3 bucket.
Uploaded the website files to Amazon S3.
Configured Amazon CloudFront with the S3 bucket as the origin.
Enabled CloudFront Origin Access Control.
Configured index.html as the default root object.
Used the CloudFront distribution to serve the application over HTTPS.
Verified the application through the CloudFront distribution domain.
🔐 Security

The project uses CloudFront Origin Access Control to provide controlled access between CloudFront and the S3 origin.

The architecture follows:

User
  |
  v
CloudFront
  |
  | OAC
  v
Private S3 Origin

This avoids directly exposing the S3 objects as a public website through the S3 bucket.

📚 What I Learned

Through this project, I gained practical experience deploying a static web application using AWS.

I learned how to upload website files to Amazon S3, configure Amazon CloudFront with an S3 origin, use CloudFront Origin Access Control, configure the default root object, and troubleshoot an AccessDenied error during deployment.

I also practiced Git and GitHub workflows including initializing a repository, creating commits, working with branches, configuring a remote repository, staging files, and pushing code to GitHub.

This project helped me understand how cloud services can be combined to deploy and deliver a web application securely.

🔧 Git Workflow Practiced

The project was managed using Git and GitHub.

Common commands practiced include:

git init
git status
git add
git commit
git branch
git remote -v
git push
👨‍💻 Author
Mayur Khairnar
AWS Certified Cloud Practitioner
B.Sc. Computer Science
Interested in Cloud Operations, Linux Administration, and DevOps
🎯 Project Goal

The goal of this project is to build practical cloud and DevOps knowledge through hands-on AWS deployment and Linux administration practice.

📄 License

This project is created for learning, experimentation, and portfolio purposes.
