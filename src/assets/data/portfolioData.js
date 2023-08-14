import troveImg from "../images/trove.png";
import airbnbImg from "../images/airbnb.png";
import camelImg from "../images/Camel-Blog.png";
import scraperImg from "../images/webscraper.png";
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
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "http://trovemusic.io/",
  },

  {
    id: "02",
    imgUrl: airbnbImg,
    category: "Web Design",
    title: "Cloning AirB&B website",
    description: `Our Airbnb clone is a feature-rich web platform that connects travelers with unique accommodations, offering a seamless booking experience.\n This is a test user user1@gmail.com password`,
    technologies: [
      "REACT",
      "Tailwind css",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "https://airbandb-clone.onrender.com",
  },

  {
    id: "03",
    imgUrl: camelImg,
    category: "Web Design",
    title: "Camel Blog",
    description:
      "Embark on a journey of discovery and inspiration with the Camel Blog. Delve into a diverse collection of articles that ignite curiosity and connect minds, fostering a community where ideas thrive. Join us in exploring a tapestry of insights that enrich, engage, and expand horizons.",

    technologies: [
      "REACT",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "S3 Bucket",
    ],
    siteUrl: "https://camel-blog.onrender.com",
  },
  {
    id: "04",
    imgUrl: scraperImg,
    category: "Web Design",
    title: "Amazon Web Scraper",
    description:
      "Introducing a Node.js-powered web scraper that extracts product data from e-commerce sites like Amazon. Using Puppeteer, it efficiently collects product names, prices, ratings, and images. The scraper also offers automatic comparisons to spot price and rating changes. Ideal for staying updated on product trends and insights.",
    technologies: [
      "REACT",
      "Tailwinds CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    siteUrl: "https://web-scraper-amazon.onrender.com/",
  },
];

export default portfolios;
