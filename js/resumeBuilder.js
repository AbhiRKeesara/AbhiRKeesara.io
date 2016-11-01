
	/***********************************************************/
	// biography
	var bio = {

			"name": "Abhinay Reddy Keesara",
			"role": "iOS Developer | Front-end Developer",
			"contacts": {
				"mobile": "551-222-1207",
				"email": "abhinayreddy_keesara@student.uml.edu",
				"github": "AbhiRKeesara",
				"twitter": "AbhiRKeesara1",
				"Location": "Lowell, MA."
			},

			"skills": ["HTML","CSS","JS","Swift","Objective-C","Python","C"],
			"welcomeMessage": "Hello!, And welcome to my personal portfolio",
			"bioPic": "images/me.jpg"
			}



	// work
	var work = {
	    "jobs": [
	        {
	            "employer": "Bharat Sanchar Nigam Limited",
	            "title": "Summer Engineering Intern.",
	            "Location": "Hyderabad,India.",
	            "dates" : "May-July '2012.",
	            "description":"IP addressing and subnetting, Routing concepts.Thorough understanding of switching concepts and LAN technologies.Thorough understanding of OSI Model, TCP/IP protocol suite.Configured Cisco Routers using RIP, OSPF, and EIGRP.Meticulously documented the work performed during the day."


	        },

	        {
	            "employer": "Univerity of Massachusetts Lowell",
	            "title": "Graduate Teaching Assistant.",
	            "Location": "Lowell, Massachusetts.",
	            "dates" : "September-December '2015.",
	            "description":"Assisting Dr. Vinod Vokkarane for the Network Design: Principals, Protocols, and Applications which deals with the introduction of various types networks and programming projects which include implementing RDT Protocols, TCP Protocol by holding weekly office hours to assist students with class material and grading their programming assignments."


	        }
	    ]


	}

	// Education
	var education = {

		"schools": [
						{
							"name":"JNTU",
							"Location": "Hyderabad,India",
							"degree": "B.Tech",
							"major":"Electronics and Communications Engineering",
							"graduationYears": "2009-2013",
							"url":"http://www.jntuh.ac.in/new/"


						},

						{
							"name": "Univerity of Massachusetts Lowell",
							"Location": "Lowell,USA",
							"degree": "Master's",
							"major": "Computer Engineering",
							"graduationYears": "2014-2015",
							"url":"https://www.uml.edu/"

						}


		],
		"onlineCourses" : [ {

							"title":"intro to python programming",
							"school":"Umass Lowell",
							"dates":"2015",
							"url":"www.uml.edu"



		}




		]
	}

	// projects
	var projects = {

		"projects" : [
					{
						"title":"Client-Server Architecture",
						"dates":"January-April'2015",
						"description":"Implemented client-server architecture by following RDT 1.0, RDT 2.2, RDT 3.0 protocols.Which mainly focus on transferring files over UDP. I used python 3 as a platform to implement.",
						"images": ["images/client-server-1.png"]

						},
						{
							"title": "ToDoLists (iOS Application)",
							"dates": "January-April'2016",
							"description": "The application can be used in any one's  day-to-day life to keep tracking of the things they need to do. It sends a notification when the time set by you for a particular task has arrived and then you can mark the task as done using the checkmark( if you did complete it ), you can edit and delete the tasks as you wish.",
							"images": ["images/todolist.jpeg","images/ios.png"]



						}

		]

	}

	bio.displayBio = function() {


	 	if(bio.name.length >0 ) {

		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);




		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);




	if (bio.skills.length > 0) {

		var numOfSkills = bio.skills.length;

		$("#header").append(HTMLskillsStart);

		for (i in bio.skills){

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill)
		}

	}



	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);


	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);


	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);


	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.Location);
	$("#topContacts").append(formattedLocation);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#footerContacts").append(formattedEmail);


	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);


	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#footerContacts").append(formattedGithub);


	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.Location);
	$("#footerContacts").append(formattedLocation);



	}
	}

	 work.displayWork = function() {


		for ( job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

		var formattedEmpTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmpTitle);



		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].Location);
		$(".work-entry:last").prepend(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);



	}

	}

	education.displaySchools = function() {

		for ( school in education.schools) {

			$("#education").append(HTMLschoolStart);

			var formattedSchoolName =  HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

			var formattedSchoolDegree = formattedSchoolName + formattedDegree;

			$(".education-entry:last").append(formattedSchoolDegree);


			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].graduationYears);
			$(".education-entry:last").append(formattedDates);

			var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].Location);
			$(".education-entry:last").append(formattedCity);


			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}


	}

	projects.displayProjects = function() {


		for (project in projects.projects) {

			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);

		}

		}
	}

	$("#mapDiv").append(googleMap);

	bio.displayBio();
	education.displaySchools();
	work.displayWork();
	projects.displayProjects();




