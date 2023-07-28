import troveImg from "../images/trove.png";
import airbnbImg from "../images/airbnb.png";
const portfolios = [
  {
    id: "01",
    imgUrl: troveImg,
    category: "Web Design",
    title: "Music Web Application",
    description:
      "TroveMusic is a cutting-edge web application that revolutionizes music discovery, offering users an immersive experience to explore, curate, and share their favorite tunes from a vast collection of artists and genres.",
    technologies: [
      "REACT",
      "Tailwind css",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    siteUrl: "http://trovemusic.io/",
  },

  {
    id: "02",
    imgUrl: airbnbImg,
    category: "Web Design",
    title: "Cloning AirB&B website",
    description: `Our Airbnb clone is a feature-rich web platform that connects travelers with unique accommodations, offering a seamless booking experience.\n This is a test user user1@gmail.com password`,
    technologies: ["REACT", "Tailwind css", "Node.js", "Express.js", "MongoDB"],
    siteUrl: "https://airbandb-clone.onrender.com/",
  },
];

export default portfolios;
