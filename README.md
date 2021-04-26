# Revature Max: Frontend


## Project Description
A streamlined training web service, acting as an extension of the Revature Pro functionality. Revature Max is centered around enhanced feedback streams between the trainer and associates within a batch. The web service incites collaboration between associates and allows the trainer to have constant feedback from the entire batch. Associates can share topic notes and stay updated on batch progress with class assessment, QC rating, and topic competence averages. Each trainer has additional flexibility in setting the curriculum calendar and visualizing batch competency statistics.

## Technologies Used

* Visual Studio Code
* Git Bash 2.30.1
* GitLab
* Angular 11.2.9
* Node 14.2.0
* HTML/ CSS/ TypeScript
* Postman for Windows 8.1.0
* DBeaver 21.0.1
* Azure SQL database
* Azure Blob Storage
* Azure Virtual Machine
* Jenkins 2.277.1
* Ubuntu 18.04.5

## Features
###List of Features
* Potential users can register an account. Their default role is ASSOCIATE
* All registered associates can log in and view their information in the associate tab located in the navigation bar. 
* Registered associates assigned to a batch can access the batch dashboard, located in the navigation bar.
* The Batch Dashboard contains three tabs: 
 1. My Info
   * View personal info such as role (Associate or Trainer), full name, and email.
   * A Personal Competencies button, which displays:
      * A chart for personal topic competency analysis
	  * A chart for a personal quiz grade 
 2. Batch Averages
    * A bar chart that compares the associate's quiz grade with the batch's average grade.
	* A bar chart that compares the associate's topic competency with the batch's average topic competency.
 3. Curriculum
    * A calendar that contains topics reviewed per day
	* Clicking on a topic will route the associate to a view that displays the following sub-features:
      * A meter (ranging from 0 to 5) sets the selected topic competency for the associate.
	  * A list of notes shared by other associates within the selected topic
	  * A text box to save and share notes for other associates to review
* Trainers... 
###Example User's Credentials
Batchless Associate:
* *Email-* test@revature.net
* *Password-* password

Associate in a batch without data:
* *Email-* jose.rubio@revature.net
* *Password-* password

Associate in a batch with data:
* *Email-* andrew.shields@revature.net
* *Password-* in2Space!

Trainer:
* *Email-* carolyn@revature.net
* *Password-* password

###To-Do List


## To Access the Application

To clone, open git and cd to your documents folder, then enter the following command: 

`git clone https://gitlab.com/210301-java-azure/p2-revengers/revature-max-frontend.git`

##Getting Started
After cloning the repository, we must install the node_modules. Thus, open Git-bash within the application and input the following commands:
### Node Modules
`npm install`
>Installs all the modules listed as dependencies in package.json

### Bootstrap
`npm install bootstrap`
### Chart.js
`npm install chart.js`
### Ng2-charts
`npm install ng2-charts`

##Usage
To start the application, open git bash in the application and input the following command:
`ng serve -o'
>This will open a development server and open a browser tab to localhost:4200/home.

[![index](https://gitlab.com/rubioj.m.93/revature-max-frontend-images/-/raw/master/front-page.png "index")](http://https://gitlab.com/rubioj.m.93/revature-max-frontend-images/-/raw/master/front-page.png "index")

##Contributors
Project Lead: **Andrew Shields**
Git Flow Controller: **M. Tucker Richlie**
Back-end Lead: **Steffen Moseley**
UI Lead: **Jose Michael Rubio**

