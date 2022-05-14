import img11 from "../assets/1 (1).jpeg";
import img12 from "../assets/1.jpeg";
import img13 from "../assets/2 (1).jpeg";
import img14 from "../assets/3 (1).jpeg";
import img15 from "../assets/6.jpeg";
import img16 from "../assets/7 (1).jpeg";
import img17 from "../assets/5.jpeg";
import img18 from "../assets/5 (1).jpeg";
import img19 from "../assets/9 (1).jpeg";
import img20 from "../assets/9.jpeg";

export const users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "Safak Kocaoglu",
  },
];

export const posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: <img src={img11} alt="" />,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: { img12 },
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: { img13 },
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: { img14 },
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: { img15 },
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: { img16 },
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: { img17 },
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: { img18 },
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: { img19 },
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: { img20 },
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
