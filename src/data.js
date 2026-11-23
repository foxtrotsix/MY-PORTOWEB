import fia3 from "./assets/img/fia3.png"
import me from "./assets/img/profile.jpeg"
import robot from "./assets/img/robot.webp"
import storavest from "./assets/img/storavest.jpeg"
import bricsi from "./assets/img/brics.png"
import storavestlogo from "./assets/img/storavest.png"
import rahmat from "./assets/img/rahmat.png"
import abinaralogo from "./assets/img/logoabinara.jpg"
import bisnis from "./assets/img/bisnis.png"

import firstday from "./assets/img/firstday.jpeg"
import ara from "./assets/img/ara.jpeg"
import mentorarm from "./assets/img/mentorarm.jpeg"
import gm from "./assets/img/gm.jpeg"
import hiling from "./assets/img/hiling.jpeg"
import fia2 from "./assets/img/fia2.jpeg"

import rl from "./assets/vids/RL.mp4"
import fia1 from "./assets/vids/fia1.mp4"
import balikpapan from "./assets/vids/balikpapan.mp4"
import sign from "./assets/vids/sign.mp4"
import interaksiku from "./assets/vids/interaksiku.mp4"
import pinix from "./assets/vids/pinix.mp4"
import brics from "./assets/vids/brics.mp4"
// Import project videos (add your video files to assets/img/)
// import project1Video from "./assets/img/project1.mp4"
// import project2Video from "./assets/img/project2.mp4"

export const profile = {
  name: "Yuan B Albyan",
  role: "Undergraduate IT Student · Team Leader @ Abinara1",
  tagline: "Failure is not my finish line",
  about: [
    "Undergraduate Information Technology student at Institut Teknologi Sepuluh Nopember (ITS), working at the intersection of robotics, artificial intelligence, and autonomous systems. Most of my technical work focuses on legged robot development for complex environments  from locomotion, manipulation, and perception, to mapping and operator support systems.",
    "Beyond individual engineering, I lead Abinara1 across programming, mechanical, electrical, and non-technical scopes. I'm driven by deploying robots in the real world, especially Search and Rescue  visible in Fiammetta/Fiammetta-v2, the SAR system, the BRIN RIIM research proposal, ATEC 2026, and exploration of communication, mapping, thermal detection, and human-in-the-loop operation.",
  ],
  facts: [
    { k: "Years Experience", v: "3+" },
    { k: "Projects Built", v: "5+" },
    { k: "Team Lead", v: "Abinara1" },
    { k: "Focus", v: "IoT · AI" },
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
    video: rl, // Add video import here when available
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Mini Quadrupped",
    tag: "RL · MuJoCo · Isaac Lab",
    desc: "Reinforcement-learning-driven locomotion for a quadruped across varied terrain, trained in simulation and transferred to the real robot.",
    img: fia3,
    video: fia1, // Add video import here when available
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Hexapod",
    tag: "Kinematic",
    desc: "Autonomous hexapod robot with 6 dof arm",
    img: fia3,
    video: pinix, // Add video import here when available
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Assistive Devices for Disabilities",
    tag: "Assistive Tech · Mechatronics",
    desc: "Affordable assistive devices designed to improve mobility and independence for people with disabilities.",
    img: fia3,
    video: sign,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "AI IoT Barn",
    tag: "IoT · AI · Monitoring",
    desc: "AI-powered IoT monitoring system for livestock barns  real-time sensing with intelligent alerts for healthier farming.",
    img: storavest,
    video: null,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "AR App Balikpapan Botanical Garden",
    tag: "AR · Mobile · Tourism",
    desc: "Augmented-reality app that layers plant information and guides over the Balikpapan Botanical Garden experience.",
    img: fia3,
    video: balikpapan,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "Interactive Board Using Mediapipe",
    tag: "Mediapipe · CV · UX",
    desc: "Touch-free interactive board controlled by hand gestures via Mediapipe computer vision.",
    img: fia3,
    video: interaksiku,
    github: "https://github.com/youone-its",
    live: "#",
  },
  {
    title: "UTBK Course",
    tag: "EdTech · Web",
    desc: "Online learning platform and course materials built to help students prepare for the UTBK national exam.",
    img: fia3,
    video: brics,
    github: "https://github.com/youone-its",
    live: "#",
  },
]

export const team = [
  { name: "Abinara1", role: "Team Leader", img: abinaralogo, url: "#" },
  { name: "STORAVEST", role: "Chief Technology Officer", img: storavestlogo, url: "#" },
  { name: "RAHMAt", role: "Member", img: rahmat, url: "#" },
  { name: "BRICS_Edu", role: "Member", img: bricsi, url: "#" },
]

export const business = [
  {
    title: "STORAVEST",
    role: "Chief Technology Officer",
    icon: "▦",
    img: bisnis,
    url: "#",
    desc: "Smart IoT Warehouse Management System for commodity storage. An IoT-based smart warehouse platform for efficient, measurable, and intelligent storage  real-time environmental monitoring to preserve commodity quality (rice, corn, mushrooms), multi-commodity management, and a web dashboard that turns data into better storage decisions.",
  },
]

export const gallery = [
  { src: mentorarm, cap: "Robot build session", url: "#" },
  { src: fia2, cap: "big quadruped (before revision)", url: "#" },
  { src: ara, cap: "national competition comitee", url: "#" },
  { src: gm, cap: "general manager", url: "#" },
  { src: hiling, cap: "healing after work", url: "#" },
  { src: firstday, cap: "my firstday", url: "#" },
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
