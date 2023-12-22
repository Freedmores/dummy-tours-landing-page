import tours1 from "./images/tour-1.jpeg";
import tours2 from "./images/tour-2.jpeg";
import tours3 from "./images/tour-3.jpeg";
import tours4 from "./images/tour-4.jpeg";
import tours5 from "./images/tour-5.jpeg";
import tours6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis ipsam, dolore nam, quibusdam facilis nisi
              aspernatur consequatur voluptates harum blanditiis qui ratione
              reiciendis aperiam sapiente quia expedita facere cum?`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis ipsam, dolore nam, quibusdam facilis nisi
              aspernatur consequatur voluptates harum blanditiis qui.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis ipsam, dolore nam, quibusdam facilis nisi`,
  },
];

export const tours = [
  {
    id: 1,
    image: tours1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tours2,
    date: "october 11th, 2024",
    title: "Best of Java",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tours3,
    date: "september 15th, 2024",
    title: "The Taj Mahal Monument",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Delhi, India",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tours4,
    date: "december 5th, 2024",
    title: "Explore The Serengeti",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Tanzania",
    duration: 20,
    price: 3300,
  },
  {
    id: 5,
    image: tours5,
    date: "april 7th, 2024",
    title: "Moremi Game Reserve",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Botswana",
    duration: 20,
    price: 3300,
  },
  {
    id: 6,
    image: tours6,
    date: "March 5th, 2024",
    title: "The Victoria Falls",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Zimbabwe",
    duration: 14,
    price: 3300,
  },
];
