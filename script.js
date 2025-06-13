function createElement(type, text, className, children = []) {
  const el = document.createElement(type);
  if (text) el.textContent = text;
  if (className) el.className = className;
  children.forEach(child => el.appendChild(child));
  return el;
}

function Image(src, alt = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.objectFit = "contain";
  return img;
}

// Root layout
const root = createElement("div", null, "layout");

// Sidebar
const sidebar = createElement("div", null, "profile-bar");

// Profile Top Section
const avatar =  Image("image/formal.png", "Profile Image");
avatar.style.width="200px";
avatar.style.height="200px";

const name = createElement("h2", "Anay Agrawal");
const role = createElement("h3", "Web Developer", "profile-bar-role");

const sidebarHead = createElement("div", null, "profile-bar-head");
sidebar.appendChild(sidebarHead);
const sidebarHeadItem=[avatar, name, role];
const profileTop = createElement("div", null, "profile-bar-profile",sidebarHeadItem );
sidebarHead.appendChild(profileTop);

// Contact Info Section
const sidebarBody = createElement("div", null, "profile-bar-contact");
sidebar.appendChild(sidebarBody);

const infoList = [
  { icon: "📧", title: "Email", label: "agrawalanay20@gmail.com" },
  { icon: "📞", title: "Phone", label: "+91 8401429439" },
  { icon: "🎂", title: "Birth Day", label: "September 10, 2002" },
  { icon: "📍", title: "Location", label: "Ahmedabad, Gujarat, India" }
];

infoList.forEach(info => {
  const icon = createElement("div", info.icon);
  const textBlock = createElement("div", null, null, [
    createElement("p", info.title),
    createElement("p", info.label)
  ]);
  const sidebarBodyItem = [icon, textBlock];
  const row = createElement("div", null, "contact-list-div",sidebarBodyItem );
  sidebarBody.appendChild(row);
});

// Footer Social Icons
const sidebarFooter = createElement("div", null, "profile-bar-icons");
sidebar.appendChild(sidebarFooter);

const sidebarIcons = [
  { icon: Image("image/GitHub.png", "Github"), title: "Github", link: "https://github.com/Lucky-light-1729" },
  { icon: Image("image/linkedin.png", "LinkedIn"), title: "LinkedIn", link: "https://www.linkedin.com/in/anay-agrawal-872b682b3/" },
  { icon: Image("image/Facebook.jpeg", "Facebook"), title: "Facebook", link: "#" },
  { icon: Image("image/Instagram.png", "Instagram"), title: "Instagram", link: "#" }
];

sidebarIcons.forEach(item => {
  const anchor = document.createElement("a");
  anchor.href = item.link;
  anchor.title = item.title;
  anchor.target = "_blank";  
  item.icon.style.width  = "24px";
  item.icon.style.height = "24px";
  anchor.appendChild(item.icon);
  sidebarFooter.appendChild(anchor);
});

// Main content
const main = createElement("div", null, "main-content");

// Navigation Bar
const navBar = createElement("div", null, "nav-bar");
const navBarItems=[
  {title:"About",link:"#about"}, 
  {title:"Resume",link:"#resume"}, 
  {title:"Portfolio",link:"#portfolio"}, 
];

navBarItems.forEach(item => {
  const navItem = createElement("a", item.title);
  navItem.href = item.link;
  navItem.title = item.title;
  navItem.target = "_self";
  navBar.appendChild(navItem);
});

main.appendChild(navBar);

// About Section
const aboutSection = createElement("div", null, "about-section", [
  createElement("h1", "About Me"),
  createElement("hr"),
  createElement("p", "I am an MCA student specializing in Cloud Computing at Parul University, with a BTech in Electrical & Electronics Engineering fromBITS Pilani, Hyderabad. I have a strong foundation in C, C++, Java, PHP, and MySQL, along with hands-on experience in webdevelopment, cloud computing (AWS, Google Cloud), machine learning, and database management."),
]);
aboutSection.id = "about";
main.appendChild(aboutSection);

// What I'm Doing Section
main.appendChild(createElement("h2", "What I'm Doing"));

const hobbyGrid = createElement("div", null, "container");

const hobbys = [
  { title: "Web Design", desc: "Modern, high-quality design.", icon: "🎨" },
  { title: "Web Development", desc: "Professional websites.", icon: "💻" },
];

hobbys.forEach(hobby => {
  const iconEl = createElement("div", hobby.icon, "card-icon");
  const textBlock = createElement("div", null, "card-text", [
    createElement("h3", hobby.title),
    createElement("p", hobby.desc)
  ]);
  const card = createElement("div", null, "card", [iconEl, textBlock]);
  hobbyGrid.appendChild(card);
});
main.appendChild(hobbyGrid);

//Resume
const resumeSection = createElement("div", null, "resume-section");
resumeSection.id="resume";
resumeSection.appendChild(createElement("h2", "Resume"));
resumeSection.appendChild(createElement("hr"));

//Education
const educationData = [
  {
    institute: "Parul University",
    years: "2024 — Now",
    desc: "Currently pursuing MCA specialization in Cloud Computing"
  },
  {
    institute: "Birla Institute of Technology And Science - Hyderabad",
    years: "2020 — 2024",
    desc: "Completed B.Tech in Electrical and Electronics Engineering."
  },
  {
    institute: "Ahmedabad Public School",
    years: "2018 — 2020",
    desc: "Completed Senior Secondary Schooling (Class 12) with a focus on Science , CBSE Board"
  },
  {
    institute: "St. Kabir School",
    years: " — 2018",
    desc: "Completed Secondary Schooling (Class 10) , CBSE Board"
  }
];

const eduContainer = createElement("div", null, "education-container");

const eduTitle = createElement("div", null, "edu-title", [
  createElement("h3", "Education")
]);
eduContainer.appendChild(eduTitle);

const eduTimeline = createElement("ul", null, "edu-timeline");

educationData.forEach(edu => {
  const dot = createElement("span", null, "timeline-dot");

  const heading = createElement("h4", edu.institute);
  const duration = createElement("p", edu.years);
  duration.style.color = "#facc15";
  const para = createElement("p", edu.desc);

  const content = createElement("div", null, "edu-content", [heading, duration, para]);

  const li = createElement("li", null, "edu-item", [dot, content]);

  eduTimeline.appendChild(li);
});

eduContainer.appendChild(eduTimeline);
resumeSection.appendChild(eduContainer);
//Certificate
const certiList = [
  { title: "HTML & CSS", type: "Global", provided: "Certiport" },
  { title: "JavaScript", type: "Global", provided: "Certiport" },
  { title: "PHP", type: "Basic", provided: "Great Learning" },
  { title: "Agile", type: "Basic", provided: "Great Learning" },
  { title: "Data Structures in C", type: "Basic", provided: "Great Learning"},
  { title: "Java", type: "Basic", provided: "Great Learning" },
  { title: "Database Management", type: "Basic", provided: "Great Learning" },
  { title: "Full Stack Web Development", type: "Intermediate", provided: "1stop.ai" },
  { title: "Introduction to Cybersecurity", type: "Basic", provided: "Cisco Academy" },
  { title: "Introduction to Cloud Computing", type: "Basic", provided: "Simpli Learn" },
  { title: "Introduction to MATLAB", type: "Basic", provided: "Simpli Learn" },
  { title: "Java Servlet Basics and JSP 101", type: "Basic", provided: "Simpli Learn" },
  { title: "Python with Django Framework", type: "Basic", provided: "Keen Infotech" }
];

const certiBox = createElement("div", null, "certi-box");

const certiTitle = createElement("div", null, "certi-title", [
  createElement("h3", "Certifications")
]);
certiBox.appendChild(certiTitle);
const certiContainer = createElement("div", null, "certi-container");

const certiTimeline = createElement("div", null, "certi-timeline");
let row;
certiList.forEach((certi, index) => {
  if (index % 3 === 0) {
    row = createElement("div", null, "certi-row"); 
    certiTimeline.appendChild(row);
  }

  const dot = createElement("span", null, "timeline-dot");

  const heading = createElement("h4", certi.title);
  const type = createElement("p", `Type: ${certi.type}`);
  type.style.color = "#facc15";
  const provider = createElement("p", `Provided by: ${certi.provided}`);

  const content = createElement("div", null, "certi-content", [heading, type, provider]);

  const col = createElement("div", null, "certi-col", [dot, content]); 

  row.appendChild(col);
});

certiBox.appendChild(certiTimeline);
resumeSection.appendChild(certiBox);

//Skils
const skillList = [
  { title: "HTML & CSS", type: "Web Development" },
  { title: "JavaScript", type: "Web Development" },
  { title: "PHP", type: "Backend Development" },
  { title: "Python", type: "Programming" },
  { title: "Java", type: "Programming" },
  { title: "C", type: "Programming" },
  { title: "C++", type: "Programming" },
  { title: "Django", type: "Web Framework" },
  { title: "MySQL", type: "Database" },
  { title: "Full Stack Development", type: "Software Development" },
  { title: "Cloud Computing", type: "Cloud" },
  { title: "AWS", type: "Cloud Platform" },
  { title: "Google Cloud Platform (GCP)", type: "Cloud Platform" },
  { title: "Cloud Security", type: "Cloud" },
  { title: "MATLAB", type: "Simulation/Math" },
  { title: "Simulink", type: "Simulation" },
  { title: "Data Structures & Algorithms", type: "Computer Science" },
  { title: "Machine Learning", type: "AI/ML" },
  { title: "Computer Vision", type: "AI/ML" },
  { title: "Cybersecurity", type: "Security" },
  { title: "Agile", type: "Project Management" },
  { title: "Embedded Systems", type: "Electronics" },
  { title: "Internet of Things (IoT)", type: "Electronics" },
  { title: "Java Servlet", type: "Backend Development" },
  { title: "JSP", type: "Backend Development" }
];
const skillBox = createElement("div", null, "skill-container");

const skillContainer = createElement("div", null, "skill-container");

const skillTitle = createElement("div", null, "skill-title", [
  createElement("h3", "Skills")
]);
skillBox.appendChild(skillTitle);

const skillTimeline = createElement("div", null, "skill-timeline");
let row2;
skillList.forEach((skill, index) => {
  if (index % 3 === 0) {
    row2 = createElement("div", null, "skill-row"); 
    skillTimeline.appendChild(row2);
  }

  const dot = createElement("span", null, "timeline-dot");

  const heading = createElement("h4", skill.title);
  const type = createElement("p", `Type: ${skill.type}`);
  type.style.color = "#facc15";

  const content = createElement("div", null, "certi-content", [heading, type]);

  const col = createElement("div", null, "certi-col", [dot, content]); 

  row2.appendChild(col);
});

skillBox.appendChild(skillTimeline);
resumeSection.appendChild(skillBox);

main.appendChild(resumeSection);
//Portfolio
const portfolioSection = createElement("div", null, "portfolio-section", [
  createElement("h2", "Portfolio"),
  createElement("hr")
]);
portfolioSection.id="portfolio";

const projects = [
  { 
    title: "Spread Sheet", 
    category: "Web Development", 
    img: "image/spreed-sheet.png",
    link: "https://lucky-light-1729-spread-sheet.netlify.app/" 
  },
  { 
    title: "Personal Budget Tracker", 
    category: "Web Development", 
    img: "image/budget-tracker.png",
    link: "https://lucky-light-1729-budget-tracker.netlify.app/" 
  },
  { 
    title: "Employee Management", 
    category: "Web Development", 
    img: "image/employee-management.png",
    link: "https://lucky-light-1729-employee-management.netlify.app/" 
  },
  { 
    title: "Quiz App", 
    category: "Web Development", 
    img: "image/quiz-app.png",
    link: "https://lucky-light-1729-quiz-app.netlify.app/" 
  },
  { 
    title: "Github Profile Reviewer", 
    category: "Web Development", 
    img: "image/github-profile-reviewer.png",
    link: "https://lucky-light-1729-github-profile.netlify.app/" 
  }
];

const projectGrid = createElement("div", null, "portfolio-grid");

projects.forEach(p => {
  const img = Image(p.img, p.title);
  img.style.width = "100%";

  const overlay = createElement("div", null, "overlay", [
    createElement("h4", p.title),
    createElement("p", p.category)
  ]);

  const itemLink = createElement("a", null, "portfolio-item", [img, overlay]);
  itemLink.href = p.link;
  itemLink.target = "_blank";
  itemLink.title = p.title;

  projectGrid.appendChild(itemLink);
});

portfolioSection.appendChild(projectGrid);
main.appendChild(portfolioSection);

// Assemble and add to body
root.appendChild(sidebar);
root.appendChild(main);
document.body.appendChild(root);
