/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "KARTHIKEYAN G",
  title: "Hi all, I'm Karthikeyan",
  subTitle: emoji(
    "A passionate Computer Science Student 🚀 having an experience of building web applications with HTML, CSS, JavaScript, React, Node.js, MySQL and responsive design."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/karthikeyan",
  linkedin: "https://www.linkedin.com/in/karthikeyan-g-bb3b96309/",
  gmail: "vedha.karthikeyan2006@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND DEVELOPER & UI/UX DESIGNER WITH VIDEO EDITING EXPERTISE",
  skills: [
    emoji(
      "⚡ Design beautiful and intuitive User Interfaces using Figma"
    ),
    emoji("⚡ Build responsive frontend websites using HTML, CSS, JavaScript and React"),
    emoji(
      "⚡ Create engaging video content with professional video editing tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "adobe",
      fontAwesomeClassname: "fab fa-adobe"
    },
    {
      skillName: "youtube",
      fontAwesomeClassname: "fab fa-youtube"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "git-alt",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KPR Institute of Engineering and Technology",
      logo: require("./assets/images/kpr.png"),
      subHeader: "B.E. Computer Science and Engineering",
      duration: "2021 - 2025",
      desc: "CGPA: 7.3",
      descBullets: [
        "Focused on Frontend Development and UI/UX Design",
        "Specialized in Video Editing and Visual Design"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Video Editing",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Internships Section

const internships = {
  display: true, // Set true to show internships section
  internships: [
    {
      role: "UI/UX Design Intern",
      company: "Tech Startup",
      companylogo: require("./assets/images/poster.png"),
      date: "June 2024 – August 2024",
      desc: "Designed user interfaces and created wireframes for mobile applications using Figma. Collaborated with the development team to implement responsive designs.",
      descBullets: [
        "Created 20+ UI/UX designs using Figma",
        "Designed responsive mobile app interfaces",
        "Collaborated with developers for implementation"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "UI/UX DESIGN & FRONTEND PROJECTS",
  projects: [
    {
      image: require("./assets/images/ad.png"),
      projectName: "Advertisement Design",
      projectDesc: "Created engaging advertisement designs using Figma and Adobe tools. Focused on visual hierarchy, color theory, and user engagement principles for marketing campaigns.",
      footerLink: [
        {
          name: "View Design",
          url: "https://www.notion.so/KARTHIKEYAN-Portfolio-bef890a1a90583a3bb5301d2da74a135"
        }
      ]
    },
    {
      image: require("./assets/images/ad2.png"),
      projectName: "Social Media Ad Campaign",
      projectDesc: "Designed a complete social media advertisement campaign with multiple banner sizes and formats. Implemented responsive design principles for various platforms.",
      footerLink: [
        {
          name: "View Design",
          url: "https://www.notion.so/KARTHIKEYAN-Portfolio-bef890a1a90583a3bb5301d2da74a135"
        }
      ]
    },
    {
      image: require("./assets/images/poster.png"),
      projectName: "Event Poster Design",
      projectDesc: "Created professional event posters with attention to typography, layout, and visual impact. Used Adobe Creative Suite for high-quality print and digital outputs.",
      footerLink: [
        {
          name: "View Design",
          url: "https://www.notion.so/KARTHIKEYAN-Portfolio-bef890a1a90583a3bb5301d2da74a135"
        }
      ]
    },
    {
      image: require("./assets/images/poster2.png"),
      projectName: "Promotional Poster",
      projectDesc: "Designed promotional materials for product launches. Focused on brand consistency, visual storytelling, and call-to-action elements for effective marketing.",
      footerLink: [
        {
          name: "View Design",
          url: "https://www.notion.so/KARTHIKEYAN-Portfolio-bef890a1a90583a3bb5301d2da74a135"
        }
      ]
    },
    {
      image: require("./assets/images/website-redesign.png"),
      projectName: "Website Redesign",
      projectDesc: "Redesigned a website with improved UI/UX, better navigation, and enhanced user experience. Created wireframes and prototypes using Figma before implementation.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.notion.so/KARTHIKEYAN-Portfolio-bef890a1a90583a3bb5301d2da74a135"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NPTEL Certificate",
      subtitle:
        "Successfully completed NPTEL certification in Programming, Data Structures And Algorithms Using Python.",
      image: require("./assets/certificate/codec.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://nptel.ac.in/"
        }
      ]
    },
    {
      title: "Java Programming",
      subtitle:
        "Completed comprehensive Java programming certification, demonstrating strong foundation in object-oriented programming and software development.",
      image: require("./assets/certificate/java.png"),
      imageAlt: "Java Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.oracle.com/java/certification/"
        }
      ]
    },
    {
      title: "Academic Excellence",
      subtitle: "Maintained 7.3 CGPA in B.E. Computer Science and Engineering program.",
      image: require("./assets/certificate/codec.png"),
      imageAlt: "Academic Excellence Logo",
      footerLink: [
        {name: "College Profile", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-tshirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8807960700",
  email_address: "vedha.karthikeyan2006@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  internships,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
