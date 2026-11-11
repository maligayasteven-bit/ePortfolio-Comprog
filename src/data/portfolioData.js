import { JAVA_ACTIVITIES } from "./javaActivities";
import { FINAL_ACTIVITIES } from "./finalActivities";
import photos from "../components/ProfileEportfolio.png";

export const PROFILE = {
  name: "Steven Q Maligaya",
  role: "Group Member",
  bio: "First Year BSIT Student – An aspiring IT professional who is interested in technology, programming, and game development. I enjoy learning how computers and software work and hope to develop my skills and gain experience throughout my college journey.",
  photo: photos,
  activities: ["FlowChart", "Coding"],
  responsibilities: "Take ownership of my learning, that spans academic performance, personal conduct.",
};

export const INFO = [
  ["COURSE", "BSIT"],
  ["SECTION", "101i"],
  ["TEACHER", "Arlene Valderama"],
  ["COVERAGE", "Prelim to Final"],
];

export const STATS = [
  ["PRELIM TASKS", "7", "Task Documented"],
  ["MID TERM TASKS", "4", "Task Documented"],
  ["FINAL TASK", "6", "Task Documented"],
  ["ON-TIME RATE", "95%", "University Rubric Met"],
];

export const REFLECTIONS = [
  ["Prelim", "The Prelim period was a relatively easy start for me. Most of the activities focused on flowcharting, which helped me understand basic problem-solving."],
  ["Midterm", "Midterms became more challenging as we moved into coding. I underestimated how difficult it could be, which affected my grades."],
  ["Final", "For the Final period, I'm trying my best to make up for my performance during Midterms. I'm putting more effort into understanding the lessons."],
];

const MOD = {
  w1: "Week 1 [HB] Orientation & M1U1 (Jul 13–18, 2026)",
  w2: "Week 2 [HB] M1U2 (July 20 to July 25, 2026)",
  w3: "Week 3 [HB] M1U3 (July 27 to Aug 1, 2026)",
  w4: "Week 4 [HB] M1U4_U5 (Aug 3 to Aug 8, 2026)",
  w5: "Week 5 [HB] M2U1_U2 (Aug 10 to Aug 15, 2026)",
};

export const PRELIM = [
  {
    tag: "PPT1",
    title: "PPT1 - Concept of Flowcharting Symbols",
    module: "Prelim Term Week 1 - Orientation & Introduction to PLF & Program Dev't",
    pdf: "PrelimPPT1_MaligayaSteven.pdf",
  },
  {
    tag: "RECITATION",
    title: "Recitation - Week 2 - Day 1",
    module: "Week 2 - Program Logic Formulation - Programming Design Tools",
    pdf: "Recitation - Week 2 - Day 1.pdf",
  },
  {
    tag: "PPT2",
    title: "PPT2 - Program Logic Formulation - Algorithm",
    module: "Week 2 - Program Logic Formulation - Programming Design Tools",
    pdf: "PrelimPPT2_TaveraMaligaya.pdf",
  },
  {
    tag: "RECITATION",
    title: "Flowchart Recitation Week 3",
    module: "Week 3 - Flowcharting - Sequential Structure",
  },
  {
    tag: "PPT3",
    title: "PPT3 - Sequential Control Structure - Paired Activity",
    module: "Week 3 - Flowcharting - Sequential Structure",
    pdf: "PrelimPPT3_Lucero1Maligaya2.pdf",
  },
  {
    tag: "PP1",
    title: "PP1 - Sequential and Decision Control Structure",
    module: "Week 4 - Flowcharting - Decision Control",
    pdf: "PrelimPP1_MaligayaFloresII.pdf",
  },
  {
    tag: "PP2",
    title: "PP2 - Seat work Exercises - Flowchart -Loop",
    module: "Week 5 - Flowcharting - Repetition Control",
    pdf: "PrelimPP2_EvangelistaMaligaya.pdf",
  },
].map((t) => ({
  ...t,
  term: "prelim",
  pdf: t.pdf ? `${import.meta.env.BASE_URL}pdf/${t.pdf}` : null,
}));

// Midterm activities live in javaActivities.js
export const MIDTERM = JAVA_ACTIVITIES;
export const FINAL = FINAL_ACTIVITIES;
export const ALL = [...PRELIM, ...MIDTERM, ...FINAL];
