var format = "cv";
var resumeData = data();
var sectionHeader = "h3";
function data() {
    let data =
        {
            header: {
                name: "Priscilla Cheng",
		[tel: "(646) 731-0877", email: "priscillacheng221@gmail.com"]
            	    },
            education: {
                college: {
                    institution: "Boston University",
                    major: "B.A., Economics",
                    honors: ["GPA 3.52", "Dean's List"]
                       	 }
            	       },
            work: [
                {
                    duration: "2018-Present",
                    title: "Data Analyst",
                    company: "Bloomberg LP",
                    responsibilities: [
                        "Saved team 1300+ hours annually and reduced rejection rates by 14.34% by preventing 32,000+ work items from being generated through insights extracted from JIRA and news data using Python (pandas, numpy, seaborn, matplotlib) and SQL",
			"Coordinates between product managers, engineers, data scientists, and other client facing teams to develop mainstream pipeline for data routing by extracting data, developing ROIs, performing analyses, and overhauling team workflow to improve annotation quality for models",
			"Created reusable modules for data extraction and transformation, putting in place structure granting flexible data access and bypassing 3 week data request approval",
			"Generated powerful visualizations on immigration, green bonds, and office vacancies presented at Bloomberg’s Equality Summit and Canadian Fixed Income Conference events with over global 5000+ attendees, broadcasting to an audience of 437 million across live channels and Bloomberg TV",
			"Integrated the largest Asian-American non-profit into Bloomberg Philanthropies as part of Global Pan-Asian Community Management; Recognized as Diversity & Inclusion Champion for planning milestone intersectionality event"
                    ]
                },
		    
                {
                    duration: "May 2018 - Aug 2018",
                    title: "Policy Data Analyst",
                    company: "U.S. Council of Competitiveness",
                    responsibilities: [
                        "Published graphs on patent statistics in Council's annual publication and researched difference in differences impact of patent law implementation on global innovation and manufacturing trends",
			"Wrote research reports on effectiveness of national labs' innovation accelerators and Cyclotron Road; Reports were used to help national labs modify their programs"
                    ]
                },

                {
                    duration: "June 2017 - Aug 2017",
                    title: "Credit Analyst",
                    company: "JP Morgan Chase & Co",
                    responsibilities: [
                        "Finalist in Network & Philanthropy competition who spearheaded the successful permanent integration of a non-profit partnership with the firm to prepare underrepresented women for STEM high schools",
			"Extracted and manipulated sort code/product code data to examine the balances of the top 20 performing  demand deposit accounts (DDAs) and their call report (Schedule RC-E) mapping"            
                    ],
                },

                {
                    duration: "May 2016 - Aug 2016",
                    title: "Economic Empowerment Intern",
                    company: "Massachusetts State Treasury",
                    responsibilities: [
                        "Strategized with leaders on methods to engage and direct minority groups to start college savings with government's new $eedMA program",
			"Conducted econometric research on college affordability and socioeconomic statuses of local minority groups which was used in the marketing material for the $eedMA program"           
                    ]
                },

		{
		    duration: "May 2016 - Nov 2016",
		    title: "Marketing and Consulting Associate",
		    company: "Argopoint LLC",
		    responsibilities: [
			    "Improved web traffic from 17% to 50% of total traffic for specified keywords resulting in netting a Fortune 500 company client, bringing page link from Google page rank 3 to page rank 1"
				      ],
		}
			
            ], //End of work section
            schoolProjects: [
                {
                    duration: "Spring 2018",
                    title: "Effects of Tax Cuts and Jobs Act (H.R.1. § 4968) on Universities and Student Financial Outcomes (Directed Study Thesis with advisory from Dr. Kent Hughes, Wilson Center Fellow)",
                    responsibilities: [
                        "Researched the effect of a 1.4% excise tax on net investment income of private universities with thesis reviewed by head of economics department.",
			"Grade: A"
                    ],
                },

		{
		    duration: "2015 - 2016",
		    title: "Boston University Student Government VP of Internal Affairs",
		    responsibilities: [
			    "Expanded organization by 300% working with a $55,000 budget creating meaningful impact through sponsorships",
			    "Led culture initiative which won Excellence in Student Activities Award for ‘Best Collaboration’"

		    ],
		}
            ], //End of projects
            skills: [
                {
                    category: "Technical",
                    items: [
                        "Python (Pandas, NumPy, Seaborn, Matplotlib)",
                        "SQL",
                        "STATA",
                        "BASH",
			"Microsoft SQL Server",
			"Pycharm",
			"Jupyter",
			"Git"
                    ]
                },
                {
                    category: "Other",
                    items: [
                        "German (A2/B1)",
                        "Cantonese (Native)",
                        "Microsoft Office",
			"Networking & Communication"
                    ]
                }
            ] //End of Skills
        };
    return data;
}

function cv() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", null);
}

function resume() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", true);
}

function generateHeader() {
    let section = d3.select("div.mainBody").append("section").attr("class", "introduction");
    section.append("h1").text(resumeData.header.name)
        .attr("id", "name");
    section.append("h3")
        .text(`Tel: ${resumeData.header.tel}`)
        .attr("id", "tel");
    section.append("h3")
        .text(`Email: ${resumeData.header.email}`)
        .attr("id", "email");
}

function generateEducation() {
    let section = d3.select("div.mainBody").append("section").attr("class", "education");
    section.append(sectionHeader)
        .text("Education")
        .attr("id", "header");
    let college = section.append("div")
        .attr("id", "college");
    college.append("div").append("strong")
        .text(resumeData.education.college.institution)
        .attr("id", "institution");
    college.append("div")
        .text(resumeData.education.college.major)
        .attr("id", "major");
    college.append("div")
        .text(`Honors: ${resumeData.education.college.honors.join(", ")}`)
        .attr("id", "honors");
        /*
    college.append("div")
        .text(`Notable Courses: ${resumeData.education.college.notableCourses.join(", ")}`)
        .attr("id", "courses");
        */
}

function generateWork() {
    let section = d3.select("div.mainBody").append("section").attr("class", "work");
    section.append(sectionHeader)
        .text("Work Experience")
        .attr("id", "header");
    let workExperience = section.append("div")
        .attr("id", "work-container");
    let workData = workExperience.selectAll("div")
        .data(resumeData.work)
        .enter().append("div")
        .attr("id", "single-work")
        .attr("class", function(d) { return hideForResume(d); });
    let itemHeader = workData.append("div")
        .attr("id", "item-header");
    itemHeader.append("span")
        .attr("id", "company-role")
        .append("strong")
        .text(function (d) {
            return `${d.company}, ${d.title}`;
        });
    itemHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function (d) {
            return d.duration;
        });
    workData.append("div").append("ul")
        .selectAll("li")
        .data(function (d) {
            return d.responsibilities;
        }).enter().append("li")
        .text((function (d) {
            return d;
        }));
}

function generateSchoolProjects() {
    let section = d3.select("div.mainBody").append("section").attr("class", "school-projects");
    section.append(sectionHeader)
        .text("Projects")
        .attr("id", "header")
    let projects = section.append("div")
        .attr("id", "project-container");
    let projectsData = projects.selectAll("div")
        .data(resumeData.schoolProjects)
        .enter().append("div")
        .attr("id", "single-project")
        .attr("class", function(d) { return hideForResume(d); });
    let projectHeader = projectsData.append("div")
        .attr("id", "item-header");
    projectHeader.append("span")
        .attr("id", "project-name")
        .append("strong")
        .text(function(d) {
            return d.title;
        });
    projectHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function(d) {
            return d.duration;
        });
    projectsData.append("div").append("ul")
        .selectAll("li")
        .data(function(d) {
            return d.responsibilities;
        }).enter().append("li")
        .text(function(d) {
            return d;
        }); 
}

function generateSkills() {
    let section = d3.select("div.mainBody").append("section").attr("class", "skills");
    section.append(sectionHeader)
        .text("Skills")
        .attr("id", "header");
    
    let skills = section.append("div")
        .attr("id", "container")
        .selectAll("div")
        .data(resumeData.skills).enter().append("div")
        .attr("id", "skills");
    skills.append("span")
        .attr("id", "category")
        .append("strong")
        .text(function(d) {
            return `${d.category}: `;
        });
    skills.append("span")
        .text(function(d) {
            return d.items.join(", ");
        })
        .attr("id", "skill");
}

function hideForResume(d) {
    if (d.hideForResume === true) {
        return "hide-for-resume";
    }
    return "always-display";

}

function toggleFormat() {
    if (format === "resume") {
        format = "cv";
        cv();
    } else {
        format = "resume";
        resume();
    }
    console.log(`Viewing ${format} mode`);
}

function dumpToConsole() {
    console.log(format);
    console.log(data());
}

function initialLoad() {
    format = "cv";
    generateHeader();
    generateEducation();
    generateWork();
    generateSchoolProjects();
    generateSkills();
    cv();
}

initialLoad();
