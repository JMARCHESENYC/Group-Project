---
---
PROJECT 3
---

GROUP# Team Drogon

- Members:
	- Jeff
	- Justin
	- David
---

Links:

- Instructions:
	- https://github.com/madhat5/wdi_lettuce_students/blob/master/projects/project3/project3_prompt.md

- Project:
	- GitHub
		- https://github.com/JMARCHESENYC/Group-Project
	- Heroku
		- 

---
Technical Requirements:

Your app must:

- Use Mongo & Express to build an API and a front-end that consumes it
- Create an API using at least 2 related models, one of which should be a user
- Include all major CRUD functions in a RESTful API for at least one of those models
- Consume your own API by making your front-end with HTML, Javascript, & jQuery
- Add authentication to your API to restrict access to appropriate users
- Craft thoughtful user stories together, as a team
- Manage team contributions and collaboration using a standard Git flow on Github
- Layout and style your front-end with clean & well-formatted CSS
- Deploy your application online so it's publically accessible


Necessary Deliverables:

- A working API, hosted somewhere on the internet
- A handmade front-end that consumes your own API, hosted somewhere on the internet
- A link to your hosted working app in the URL section of your Github repo
- A team git repository hosted on Github, with a link to your hosted project, and frequent commits from every team member dating back to the very beginning of the project
- A readme.md file with:
	- Explanations of the technologies used
	- A couple paragraphs about the general approach you took
	- Installation instructions for any dependencies
	- Link to your user stories – who are your users, what do they want, and why?
	- Link to your wireframes – sketches of major views / interfaces in your application
	- Descriptions of any unsolved problems or major hurdles your team had to overcome

---
Team organization-

Roles:
	- Justin
		- Git Czar
	- Jeff
		- Mockups Czar
	- David
		- Trello Czar

Timeline goals:
	- Friday 11/16
		- git flow --x--
		- User story --o--
		- trello --o--
		- skeleton
	- Tuesday 11/20
		- Mini MVP
			- (functioning app with at least 1 route)
	- Saturday
		- +features complete
	- Monday 11/26
		- Full app done

Sync schedule:
	- Sunday 11/22
	- Wednesday 11/25
	- Friday 11/27
	- Saturday 11/25

Trello link: https://trello.com/b/t0tm1Sd3

Wireframes: https://moqups.com/jeffkral/KvwcN460/p:a16b2c2a4

Slack Channel: Yes

Git flow:

- Justin is Czar
- Steps:
	- git clone git@github.com:JMARCHESENYC/Group-Project.git
	- Justin merges end of day
	- Team creates 1 branch per file task
		- from master
			- git checkout -b name_feature
	- Team pushes by end of day 
		- from branch
			- git add .
			- git commit -m "update details"
			- git push origin name_feature
		- slack note when pushed
	- Team pulls @ beginning of day
		- from master
			- git pull origin master
			- npm install (the first time)

---
User story:

MVP:

- MOAR MODALS!!!

- landing page:
	- map
		- modal for location details
		- cannot add location until logged in
	- log in button
		- > opens user page
	- register buton
		- > opens register form

- user page
	- map
		- modal dislpays
			- task
			- location
			- details
			- button add to to-do
	- to do list (div)
		- task
		- button complete
			- complete pushes to Done
	- user updates button
		displays form 
		- edit
		- 
	- logout


+features:

- 




---
---
App Build Steps:

- touch server.js --xo--

- npm init --o--
    - 'enter' through all the prompts

- express setup (npm install --save express) --o--
    - server.js
    	- var express = require('express');
		- var app = express();

- set app port --o--
    - server.js
        - var port = process.env.PORT || 3000;

- morgan setup (npm install --save morgan) --o--
    - server.js
        - var morgan = require('morgan');
        - app.use(morgan('dev'));

- bodyparser setup (npm install --save body-parser) --o--
    - server.js
        - var bodyParser = require('body-parser');
        - app.use(bodyParser.urlencoded({ extended: false}));
        - app.use(bodyParser.json());

- mongoose setup (npm install --save mongoose) --o--
    - server.js
        - var mongoose = require('mongoose');
        - mongoose.connect('mongodb://localhost/db_name');

- md5 setup (npm install --save md5) --o--
	- server.js
		- var md5 = require('md5');

- cookies setup (npm install --save cookie-parser) --o--
	- server.js
		- var cookieParser = require('cookie-parser');
		- app.use(cookieParser());

- mkdir public --o--
	- server.js
		- app.use(express.static('public'));
	- touch public/index.html
	- touch public/app.js

- middleware setup --o--

- CDN
	- Handlebars URL --x--
	- js-cookie URL --x--

- models --x--
	- mkdir models
		- touch models/user.js
		- touch models/task.js
	- server.js
		- var User = require('./models/user');
		- var Task = require('./models/task');

- test connection --X--
	- launch server (nodemon)
		
- model build --o--
	- user.js
		- var mongoose = require('mongoose');
		- var userSchema = new mongoose.Schema({ ... });
			- link taskSchema
		- var User = mongoose.model('User', userSchema);
		- module.exports = User;
		- embed tasks (ref Complaints)
	- task.js
		- var mongoose = require('mongoose');
		- var taskSchema = new mongoose.Schema({ ... });
		- var Task = mongoose.model('Task', taskSchema);
		- module.exports = Task;
		- ?embed users?

- Story build --o--
	- server: 
		- server.js 
			- TEST 
	- client: --o--
		- TEST
		- index.html
		- app.js
			- user 
				- signup
				- update
				- delete
			- task
				- all
				- new
				- delete (auto delete when done)

- CSS --o--

- [seed 1 user + task --o--
	- node server.js]


---
---
Reference

- Git merging
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md





---
---
Comments

- 






