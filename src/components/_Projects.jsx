import proj1Img1 from "../assets/img/projects/P1-1.webp";
import proj1Img2 from "../assets/img/projects/P1-2.webp";
import proj1Img3 from "../assets/img/projects/P1-3.webp";
import proj1Img4 from "../assets/img/projects/P1-4.webp";
import proj1Img5 from "../assets/img/projects/P1-5.webp";
import proj1Img6 from "../assets/img/projects/P1-6.webp";

import proj2Img1 from "../assets/img/projects/P2-1.webp";
import proj2Img2 from "../assets/img/projects/P2-2.webp";
import proj2Img3 from "../assets/img/projects/P2-3.webp";
import proj2Img4 from "../assets/img/projects/P2-4.webp";
import proj2Img5 from "../assets/img/projects/P2-5.webp";
import proj2Img6 from "../assets/img/projects/P2-6.webp";

import proj3Img1 from "../assets/img/projects/P3-1.webp";
import proj3Img2 from "../assets/img/projects/P3-2.webp";
import proj3Img3 from "../assets/img/projects/P3-3.webp";
import proj3Img4 from "../assets/img/projects/P3-4.webp";
import proj3Img5 from "../assets/img/projects/P3-5.webp";
import proj3Img6 from "../assets/img/projects/P3-6.webp";

import proj4Img1 from "../assets/img/projects/P4-1.webp";
import proj4Img2 from "../assets/img/projects/P4-2.webp";
import proj4Img3 from "../assets/img/projects/P4-3.webp";
import proj4Img4 from "../assets/img/projects/P4-4.webp";
import proj4Img5 from "../assets/img/projects/P4-5.webp";

import proj5Img1 from "../assets/img/projects/P5-1.webp";
import proj5Img2 from "../assets/img/projects/P5-2.webp";

import proj6Img1 from "../assets/img/projects/P6-1.webp";
import proj6Img2 from "../assets/img/projects/P6-2.webp";
import proj6Img3 from "../assets/img/projects/P6-3.webp";

import proj7Img1 from "../assets/img/projects/P7-1.webp";
import proj7Img2 from "../assets/img/projects/P7-2.webp";
import proj7Img3 from "../assets/img/projects/P7-3.webp";
import proj7Img4 from "../assets/img/projects/P7-4.webp";
import proj7Img5 from "../assets/img/projects/P7-5.webp";
import proj7Img6 from "../assets/img/projects/P7-6.webp";
import proj7Img7 from "../assets/img/projects/P7-7.webp";

import proj8Img1 from "../assets/img/projects/P8-1.webp";
import proj8Img2 from "../assets/img/projects/P8-2.webp";

import proj9Img1 from "../assets/img/projects/P9-1.webp";
import proj9Img2 from "../assets/img/projects/P9-2.webp";

export default [
  {
    title: "Employment Platform",
    description: `A single-page application (SPA) for job seekers and recruiters with a user/admin dashboard.
    The system is configured to extract vacancies available on real local websites, namely Forsa.sy and Career.sy, through API calls and Web Scraping to gather as many opportunities as possible in a single place.`,
    imgUrl: proj1Img1,
    gallery: [proj1Img1, proj1Img2, proj1Img3, proj1Img4, proj1Img5, proj1Img6],
    tag: "React | Laravel | MySQL | TailwindCSS",
    github: "https://github.com/MoutazDebbaneh/laravel-react-employment-system",
  },

  {
    title: "Vehicles Tracking System",
    description: `A mobile application that allows creating rides and sharing them with others so that they can track the vehicle's path in a real-time map.
    The app also allows scheduling public transportation rides, enabling users to know exactly when and where they should wait for the bus.`,
    imgUrl: proj2Img6,
    gallery: [proj2Img1, proj2Img2, proj2Img3, proj2Img4, proj2Img5, proj2Img6],
    tag: "Flutter | Node.js | Express.js | JWT | MongoDB",
    github:
      "https://github.com/MoutazDebbaneh/Vehicle-Tracking-System--Frontend",
  },

  {
    title: "ECom",
    description: `A fully functional E-commerce website with a complete admin dashboard and order tracking.
    The seed data is fetched from a public API for products.`,
    imgUrl: proj3Img1,
    gallery: [proj3Img1, proj3Img2, proj3Img3, proj3Img4, proj3Img5, proj3Img6],
    tag: "ASP.Net MVC | SQL Server",
    github: "https://github.com/NasoohOlabi/Ecom",
  },

  {
    title: "Healthy Food Restaurant",
    description: `A responsive website template for restaurants using vanilla HTML, CSS, and Bootstrap only.`,
    imgUrl: proj4Img1,
    gallery: [proj4Img1, proj4Img2, proj4Img3, proj4Img4, proj4Img5],
    tag: "HTML | CSS | Bootstrap",
    github: "https://github.com/MoutazDebbaneh/Restaurant-Website-Template",
  },

  {
    title: "Catch The Balls Game",
    description: `A simple game where you have to catch the falling balls and avoid catching bricks. The game ends when you miss 3 balls or catch a brick.
    The game logic is designed and implemented at the pixel level.`,
    imgUrl: proj5Img1,
    gallery: [proj5Img1, proj5Img2],
    tag: "C# | OpenTk",
  },

  {
    title: "MNU WebUniversity",
    description:
      "A full-stack university website for students and teachers, featuring generating exams with randomized questions and a full-fledged admin dashboard.",
    imgUrl: proj6Img1,
    gallery: [proj6Img1, proj6Img2, proj6Img3],
    tag: "Vanilla PHP | Javascript",
    github: "https://github.com/NasoohOlabi/WebUniProject",
  },

  {
    title: "Quiz App",
    description: `A simple mobile application where users can compete by taking quizzes, such that the best performance is listed on top of the scoreboard.
      The questions are stored in the database and can be altered with CRUD operations.`,
    imgUrl: proj7Img1,
    gallery: [
      proj7Img1,
      proj7Img2,
      proj7Img3,
      proj7Img4,
      proj7Img5,
      proj7Img6,
      proj7Img7,
    ],
    tag: "Android Native | Java | SQLite",
    github: "https://github.com/MoutazDebbaneh/AndroidNativeQuizApp",
  },

  {
    title: "IMDB Reviews Sentiment Analysis",
    description: `A Jupyter notebook that uses Machine Learning to predict the sentiment of real IMDB reviews (positive/negative).
    The final model scored a 90% accuracy after running on 10,000 samples.`,
    imgUrl: proj8Img1,
    gallery: [proj8Img1, proj8Img2],
    tag: "Python | Machine Learning | NLP",
    colab:
      "https://colab.research.google.com/drive/1dSJSSD4bA-1UGZurbn2tX7hSFO4RTxT2?usp=sharing",
  },

  {
    title: "Simple Arcade Game",
    description: `A simple arcade game where the character runs at an accelerating velocity and should avoid hitting the randomly generated obstacles on his way.
    Players' scores are stored for them to compete for the highest score.`,
    imgUrl: proj9Img1,
    gallery: [proj9Img1, proj9Img2],
    tag: "Python | Pygame",
  },
];
