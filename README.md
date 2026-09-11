\# DevOps Cloud Monitor



A simple cloud and DevOps monitoring dashboard built to demonstrate AWS deployment, Linux administration concepts, and basic web development.



\## 🚀 Live Demo


[
https://YOUR-CLOUDFRONT-DOMAIN.cloudfront.net](https://d15sptahuiv3de.cloudfront.net/)



\## 📌 Project Overview



DevOps Cloud Monitor is a responsive dashboard created as part of the AWS Weekend Deployment Challenge.



The project presents cloud infrastructure concepts through a simple monitoring-style interface. It includes AWS service information, Linux command demonstrations, infrastructure status cards, and a project showcase.



\## ☁️ AWS Architecture



```text

User Browser

&#x20;    |

&#x20;    | HTTPS

&#x20;    v

Amazon CloudFront

&#x20;    |

&#x20;    | Origin Access Control

&#x20;    v

Amazon S3

&#x20;    |

&#x20;    v

index.html

style.css

script.js





🛠️ AWS Services Used

Amazon S3



Used to store and host the static website files.



Amazon CloudFront



Used as the content delivery network and HTTPS entry point for the application.



CloudFront Origin Access Control



Used to allow CloudFront to securely access objects stored in the S3 bucket.



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



These represent common tasks used when monitoring and troubleshooting Linux servers.



📊 Dashboard Features

Infrastructure overview

EC2 monitoring concept

CPU and memory demonstration metrics

Network connectivity status

AWS services overview

Linux terminal demonstrations

Live local date and time

Dashboard status interaction

Responsive design



The CPU and memory values shown in the dashboard are demonstration metrics and are not real-time EC2 monitoring data.



📚 What I Learned



Through this project, I practiced deploying a static web application using AWS services.



I learned how to upload website files to Amazon S3, configure CloudFront with an S3 origin, use Origin Access Control, configure the default root object, and troubleshoot an AccessDenied error during deployment.



I also practiced Git workflows including repositories, commits, branches, remotes, and pushing code to GitHub.



👨‍💻 Author



Mayur Khairnar



AWS Certified Cloud Practitioner

B.Sc. Computer Science

Interested in Cloud Operations, Linux Administration and DevOps

📄 License



This project is created for learning and portfolio purposes.







