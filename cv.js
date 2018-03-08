// NOTE from current self to future self: 
// One day you'll get real drunk and be dared to put your SSN on here
// DON'T DO IT!!!! IT STAYS ON GITHUB FOREVER AND EVER AND EVER UNTIL THE END OF TIME
var format = "resume";
var resumeData = data();
var sectionHeader = "h3";
function data() {
    // Can't be bothered to make a db just for this...
    // Literally need this stuff every once in a blue moon
    let data =
        {
            // Header almost never changes. 
            header: {
                name: "Zhengqi Xi",
                tel: "(212) 617-4396",
                email: "zxi8@bloomberg.net"
                // NO SSN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // ABSOLUTELY NOT!!!!!
            },
            education: {
                college: {
                    institution: "Cooper Union for the Advancement of Science and Art",
                    major: "Bachelor of Engineering, Mechanical Engineering",
                    honors: ["Graduated Cum Laude", "Full Tuition Scholarship"],
                    notableCourses: [
                        "Computational Graphs for Machine Learning",
                        "Natural Language Processing",
                        "Computer Operating Systems"
                    ]
                }
            },
            work: [
                {
                    duration: "2017-Present",
                    title: "Software Engineer",
                    company: "Bloomberg LP",
                    responsibilities: [
                        "Responsible for maintaining and creating Bloomberg data center management infrastructure",
                        "Develop API endpoints to allow programmatic access of various data center asset information, such as location and connectivity of server machines",
                        "Create UI screens to display data center information such as energy consumption and fuel reserves",
                        "Create tools for improving continuous integration and deployment using Apache Kafka and Github"
                    ]
                },
                {
                    duration: "Summer 2016",
                    title: "Engineering Intern",
                    company: "Energy Metrics",
                    responsibilities: [
                        "Designed a Linux based micro-service that extends the capabilities of the Energy Metrics core software service, transforming a real time energy monitoring dashboard into robust software that provides analysis and insight into building energy usage",
                        "Conducted energy simulations of building systems using EnergyPlus and OpenStudio",
                        "Utilized C# and Ruby to calibrate simulation models with hourly real time data such as occupancy and air conditioning setpoints, allowing for greater accuracy in simulating building energy usage",
                        "Created workflow to analyze energy usage data from building simulations using Python with NumPy and SciPy",
                        "Performed fieldwork installing smart thermostats in various buildings to monitor and control air conditioning usage"
                    ]
                },
                {
                    duration: "Summer 2015",
                    title: "Web Developer",
                    company: "Etza Group",
                    responsibilities: [
                        "Utilized web technologies such as PHP and JavaScript to create front and backend solutions for various websites",
                        "Implemented features such as user login and search using MySQL and PHP",
                        "Ensured smooth and continuous user experience using techniques such as lazy loading",
                        "Met with clients to design and propertly detail the deliverables and timetables of various projects"
                    ],
                    hideForResume: true
                },
                {
                    duration: "Summer 2015",
                    title: "Teaching Assistant",
                    company: "The Cooper Union Summer Stem Program",
                    responsibilities: [
                        "Instructed the designing and prototyping of Rube Goldberg machines using salvaged parts",
                        "Manufactured various components using machining equipment such as lathes, mills, and drills, as well as design software such as AutoCAD and SolidWorks",
                        "Facilitated implementation of efficient solutions to coordinate movement of various components in Rube Goldberg machine"
                    ]
                },
                {
                    duration: "2014-2017",
                    title: "Student Manager",
                    company: "Cooper Union Computer Center",
                    responsibilities: [
                        "Managed Computer Center student staff and acted as liason between student workers and full time staff",
                        "Maintained equipment and solved various IT related issues for students and faculty members",
                        "Upgraded old and outdated equipment and software to modern computing standards",
                        "Managed and distributed responsibilities to student staff"
                    ],
                    hideForResume: true
                }
            ],
            schoolProjects: [
                {
                    duration: "Spring 2017",
                    title: "Computational Graph for Machine Learning",
                    responsibilities: [
                        "Train neural networks on a variety of classification tasks, such as MNIST",
                        "Apply facial recognition technique from FaceNet to classification of brain wave(EEG) data",
                        "Pre-process large quantities of brain wave data using Fourier Transforms",
                        "Utilize Wasserstein GAN to generate MNIST style data from noise",
                        "Source code for MNIST classifier available at: https://github.com/zhengqixi/cgml/tree/master/Assignment3",
                        "Source code for MNIST generator available at: https://github.com/krisht/WassersteinGAN",
                        "Source code and paper for EEG classifier available at: https://github.com/krisht/EEGEmbedding"
                    ]
                },
                {
                    duration: "Fall 2017",
                    title: "Autonomous Mobile Robots",
                    responsibilities: [
                        "Designed and manufactured a robot using various techniques such as laser cutting and 3D printing",
                        "Competed against other robots in various competitions such as robot soccer and robot sumo",
                        "Created algorithms to traverse field, as well as perform tasks such as object avoidance",
                        "Programmed microcontrollers such as Arduinos and PIC using C and Assembly"
                    ]
                },
                {
                    duration: "Spring 2016",
                    title: "Natural Language Processing",
                    responsibilities: [
                        "Created model to classify various news snippets using a Naive Bayes approach",
                        "Implemented a model to solve SHSAT scrambled paragraphs using a mix of Naive Bayes and N-grams",
                        "Source for projects available at: https://github.com/zhengqixi/NLP"
                    ]
                },
                {
                    duration: "Spring 2014",
                    title: "Design and Prototyping",
                    responsibilities: [
                        "Designed and prototyped an arcade machine by iterating through various prototypes and ideas via user feedback",
                        "Created various injection mold designs for manufacturing wax candles",
                    ],
                    hideForResume: true
                },
                {
                    duration: "Fall 2013",
                    title: "GAIA, Sustainable Greenhouse for the Future",
                    responsibilities: [
                        "Assisted in designing a self sustained greenhouse positioned on NYC rofftops that gathers required resources from surroundings and is adaptable to a wide variety of environments",
                        "Designed external and internal water collection/distribution systems and internal hydroponics setups to facilitate healthy plant growth",
                    ],
                    hideForResume: true
                }

            ],
            skills: [
                {
                    category: "Programming Languages (Relevant Frameworks and Libraries)",
                    items: [
                        "C/C++",
                        "C# (EntityFrameworks, WebAPI)",
                        "JavaScript/TypeScript (Angular, D3)",
                        "Python (Flask, NumPy, SciPy, Tensorflow)",
                        "Matlab",
                        "SQL/SQLLite",
                        "PHP",
                        "HTML/CSS"
                    ]
                },
                {
                    category: "Software Tools and Suites",
                    items: [
                        "SolidWorks",
                        "AutoCAD",
                        "Microsoft Office"
                    ]
                },
                {
                    category: "Miscellaneous",
                    items: [
                        "Native Chinese Speaker",
                        "Long distance runner",
                        "Kenpo practitioner"
                    ]
                }
            ]
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
    college.append("div")
        .text(`Notable Courses: ${resumeData.education.college.notableCourses.join(", ")}`)
        .attr("id", "courses");
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
    format = "resume";
    generateHeader();
    generateEducation();
    generateWork();
    generateSchoolProjects();
    generateSkills();
    resume();
}

initialLoad();