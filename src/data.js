import fia3 from "./assets/img/fia3.png"

export const profile = {
  name: "Yuan B Albyan",
  role: "Undergraduate IT Student · Team Leader @ Abinara1",
  tagline: "fuck it till i make it",
  about: [
    "Undergraduate Information Technology student at Institut Teknologi Sepuluh Nopember (ITS), working at the intersection of robotics, artificial intelligence, and autonomous systems. Most of my technical work focuses on legged robot development for complex environments — from locomotion, manipulation, and perception, to mapping and operator support systems.",
    "Beyond individual engineering, I lead Abinara1 across programming, mechanical, electrical, and non-technical scopes. I'm driven by deploying robots in the real world, especially Search and Rescue — visible in Fiammetta/Fiammetta-v2, the SAR system, the BRIN RIIM research proposal, ATEC 2026, and exploration of communication, mapping, thermal detection, and human-in-the-loop operation.",
  ],
  facts: [
    { k: "Years Experience", v: "3+" },
    { k: "Projects Built", v: "10+" },
    { k: "Team Lead", v: "Abinara1" },
    { k: "Focus", v: "SAR · AI" },
  ],
  email: "yuanalbyan7@gmail.com",
}

export const socials = [
  { label: "GitHub", handle: "youone-its", url: "https://github.com/youone-its" },
  {
    label: "LinkedIn",
    handle: "/in/yuan-banny-albyan",
    url: "https://www.linkedin.com/in/yuan-banny-albyan-670338312",
  },
  { label: "Instagram", handle: "@weng._136", url: "https://instagram.com/weng._136" },
  {
    label: "YouTube",
    handle: "@yuanb",
    url: "https://www.youtube.com/channel/UCvkymU0zDLC0rwiyiT8vS_g",
  },
  { label: "Gmail", handle: "yuanalbyan7@gmail.com", url: "mailto:yuanalbyan7@gmail.com" },
]

export const projects = [
  {
    title: "RL Locomotion Multi-Terrain Quadruped",
    tag: "RL · MuJoCo · Isaac Lab",
    desc: "Reinforcement-learning-driven locomotion for a quadruped across varied terrain, trained in simulation and transferred to the real robot.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "6 DOF Arm · DLS",
    tag: "Inverse Kinematics · C++",
    desc: "A 6-degree-of-freedom robotic arm solved with Damped Least Squares inverse kinematics for smooth, stable manipulation.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Assistive Devices for Disabilities",
    tag: "Assistive Tech · Mechatronics",
    desc: "Affordable assistive devices designed to improve mobility and independence for people with disabilities.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "AI IoT Barn",
    tag: "IoT · AI · Monitoring",
    desc: "AI-powered IoT monitoring system for livestock barns — real-time sensing with intelligent alerts for healthier farming.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "AR App Balikpapan Botanical Garden",
    tag: "AR · Mobile · Tourism",
    desc: "Augmented-reality app that layers plant information and guides over the Balikpapan Botanical Garden experience.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Interactive Board Using Mediapipe",
    tag: "Mediapipe · CV · UX",
    desc: "Touch-free interactive board controlled by hand gestures via Mediapipe computer vision.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "UTBK Course",
    tag: "EdTech · Web",
    desc: "Online learning platform and course materials built to help students prepare for the UTBK national exam.",
    img: fia3,
    github: "https://github.com/youone-its",
    live: "#",
  },
]

export const team = [
  { name: "Abinara1", role: "Team Leader", img: fia3, url: "#" },
  { name: "STORAVEST", role: "Chief Technology Officer", img: fia3, url: "#" },
  { name: "RAHMAt", role: "Member", img: fia3, url: "#" },
  { name: "BRICS_Edu", role: "Member", img: fia3, url: "#" },
]

export const business = [
  {
    title: "STORAVEST",
    role: "Chief Technology Officer",
    icon: "▦",
    img: fia3,
    url: "#",
    desc: "Smart IoT Warehouse Management System for commodity storage. An IoT-based smart warehouse platform for efficient, measurable, and intelligent storage — real-time environmental monitoring to preserve commodity quality (rice, corn, mushrooms), multi-commodity management, and a web dashboard that turns data into better storage decisions.",
  },
]

export const gallery = [
  { src: fia3, cap: "Robot build session", url: "#" },
  { src: fia3, cap: "Autonomous test run", url: "#" },
  { src: fia3, cap: "National robotics contest", url: "#" },
  { src: fia3, cap: "Lab demonstration", url: "#" },
  { src: fia3, cap: "Team meetup", url: "#" },
  { src: fia3, cap: "Student workshop", url: "#" },
]

export const nav = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "socials", label: "Socials" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "business", label: "Business" },
  { id: "gallery", label: "Gallery" },
]
