import { BehaviourInteractive, Faire, FleetComplete, MetaTrader4, TheScore,
         Portfolio1, Portfolio2, Unity1, Unity2, Android1, Android2, CSGame1, CSGame2, Degree1, Degree2 } from "../assets"

const languages = ["Kotlin", "Java", "C#", "C/C++", "JavaScript/TypeScript", "Python", "HTML/CSS", "SQL", "GraphQL"]
const technologies = ["Android Studio", "Jetpack Compose", "RxJava", "Apollo Kotlin", "Mockito", "JUnit", "Koin", "Charles Proxy", "Firebase Crashlytics", "Unity Engine", "React.js", "Three.js", "Tailwind CSS", "Cypress", "Jenkins", "Git/Perforce"]

const experiences = [
   {
    title: "Android Developer - Community",
    company: "theScore Inc",
    icon: TheScore,
    iconBg: "#FFFFFF",
    link: "https://www.thescore.com/",
    date: "September 2024 - December 2024",
    description: "Built and enhanced community app features such as threaded comments, reactions, and activity feed notification counters, using Kotlin, Jetpack Compose, and Koin dependency injection.",
   },
   {
    title: "Android Developer - Wagering",
    company: "theScore Inc",
    icon: TheScore,
    iconBg: "#FFFFFF",
    link: "https://about.thescore.bet/",
    date: "May 2024 - September 2024",
    description: "Implemented features on theScore/ESPN BET app using Kotlin, GraphQL, and Charles Proxy, following MVVM architecture.",
  },
  {
    title: "Android Developer - Ecosystem",
    company: "theScore Inc",
    icon: TheScore,
    iconBg: "#FFFFFF",
    link: "https://www.thescore.com/",
    date: "September 2023 - December 2023",
    description: "Maintained theScore Media app and resolved crashes using Kotlin, Charles Proxy, and Firebase Crashlytics.",
  },
  {
    title: "Android Engineer",
    company: "Faire",
    icon: Faire,
    iconBg: "#333333",
    link: "https://www.faire.com/",
    date: "January 2023 - April 2023",
    description: "Implemented fully-tested app features across various screens using Kotlin, RxJava, and Jetpack Compose, following the MVVM/MVP architecture.",
  },
  {
    title: "Game Programmer",
    company: "Behaviour Interactive",
    icon: BehaviourInteractive,
    iconBg: "#000000",
    link: "https://www.bhvr.com/",
    date: "May 2022 - August 2022",
    description: "Developed C# components for the Unity game Jurassic World Primal Ops and related backend routes using TypeScript."
  },
  {
    title: "Automation Developer",
    company: "Fleet Complete",
    icon: FleetComplete,
    iconBg: "#FFFFFF",
    link: "https://www.fleetcomplete.com/",
    date: "September 2021 - December 2021",
    description: "Researched and implemented a frontend Cypress automation framework, integrating it into a Jenkins CI/CD pipeline.",
  },
  {
    title: "Customized MetaTrader Project",
    company: "(For a Client)",
    icon: MetaTrader4,
    iconBg: "#FFFFFF",
    link: "https://www.metatrader4.com/",
    date: "November 2018 - September 2021",
    description: "Created and maintained MQL4 trading algorithms to automate the client's trading routines.",
  },
];

// Leave repoText2 & repoLink2 as "" to disable second button
const projects = [
  {
    title: "Portfolio Websites",
    tech: "React, Three.js, Tailwind CSS",
    desc: "Personal websites that showcase my past experience.",
    image1: Portfolio1,
    image2: Portfolio2,
    repoText1: "Version 1",
    repoLink1: "https://github.com/Ricky77768/Ricky77768.github.io",
    repoText2: "Version 2",
    repoLink2: "https://github.com/Ricky77768/PortfolioWebsite",
  },
  {
    title: "3D Unity Games",
    tech: "Unity, C#",
    desc: "Unity games that incorporate ball rolling, platforming, and shooting gameplay elements.",
    image1: Unity1,
    image2: Unity2,
    repoText1: "Ball Rolling",
    repoLink1: "https://github.com/Ricky77768/Hamsterball-Like-Game",
    repoText2: "Platformer",
    repoLink2: "https://github.com/Ricky77768/3D-Unity-Platformer",
  },
  {
    title: "Android Applications",
    tech: "Android Studio, Java",
    desc: "Android apps that use OpenWeather/Google Maps API to serve location/weather data.",
    image1: Android1,
    image2: Android2,
    repoText1: "Map",
    repoLink1: "https://github.com/Ricky77768/mapApplication",
    repoText2: "Weather",
    repoLink2: "https://github.com/Ricky77768/weatherApp",
  },
  {
    title: "Computer Science Games",
    tech: "Greenfoot, Java",
    desc: "Games created for grade 11/12 courses that has platforming, typing, and memory elements.",
    image1: CSGame1,
    image2: CSGame2,
    repoText1: "Games",
    repoLink1: "https://github.com/Ricky77768/ComputerScienceGames",
    repoText2: "",
    repoLink2: "",
  },
  {
    title: "Degree Map",
    tech: "React, SQL",
    desc: "Web application created in a team for database course to help students manage classes.",
    image1: Degree1,
    image2: Degree2,
    repoText1: "App",
    repoLink1: "https://github.com/Kggupta/DegreeMap",
    repoText2: "",
    repoLink2: "",
  },
];


export { languages, technologies, experiences, projects }
