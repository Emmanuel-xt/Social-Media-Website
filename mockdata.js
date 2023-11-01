import man3 from "./src/assets/profilePictures/man4.jpg";
import man4 from "./src/assets/profilePictures/man4.jpg";
import wo1 from "./src/assets/profilePictures/wo1.jpg";
import wo2 from "./src/assets/profilePictures/wo2.jpg";
import man5 from "./src/assets/profilePictures/man5.jpg";
import man2 from "./src/assets/profilePictures/man2.jpg";
import wo3 from "./src/assets/profilePictures/wo3.jpg";
import man6 from "./src/assets/profilePictures/man6.jpg";
import wo5 from "./src/assets/profilePictures/wo5.jpg";
import wo4 from "./src/assets/profilePictures/wo4.jpg";

export const Users = [
  {
    id: 1,
    profilePicture: man3,
    username: "Obinna Okoro",
  },
  {
    id: 2,
    profilePicture: man4,
    username: "Arinzechukwu Okeke",
  },
  {
    id: 3,
    profilePicture: wo1,
    username: "Chinyere Nwachukwu",
  },
  {
    id: 4,
    profilePicture: wo2,
    username: "Ogechi Ude",
  },
  {
    id: 5,
    profilePicture: man5,
    username: "Chinedu Onyeka",
  },
  {
    id: 6,
    profilePicture: man2,
    username: "Ikenna Okafor",
  },
  {
    id: 7,
    profilePicture: wo3,
    username: "Uche Amadi",
  },
  {
    id: 8,
    profilePicture: man6,
    username: "Chukwuma Nnamdi",
  },
  {
    id: 9,
    profilePicture: wo5,
    username: "Ifunanya Ike",
  },
  {
    id: 10,
    profilePicture: wo4,
    username: "Nneka Amaechi",
  },
];

import churchImage from "./src/assets/postImages/church.jpg";
import peterObiImage from "./src/assets/postImages/peterObi.jpg";
import claifoniaImage from "./src/assets/postImages/claifonia.jpg";
import putinImage from "./src/assets/postImages/putin.jpg";
import reactImage from "./src/assets/postImages/react.jpg";
import robotImage from "./src/assets/postImages/robot.jpg";
import schoolImage from "./src/assets/postImages/school.jpg";
import tinubuImage from "./src/assets/postImages/tinubu.jpg";
import warImage from "./src/assets/postImages/war.jpg";

export const Posts = [
  {
    id: 1,
    postText: "Just visited a beautiful church. What an amazing place!",
    photo: churchImage,
    date: "5mins ago",
    userId: 1,
    like: 1,
    comments: "5 comments",
  },
  {
    id: 2,
    postText:"Peter Obi flaws Tinubu in court , Reclaims Mandate as the Court of appeal declare him , rightful winner of 2023, general Elections after disqualifying Tinubu.",
    photo: peterObiImage,
    date: "10mins ago",
    userId: 2,
    like: 1,
    comments: "7 comments",
  },
  {
    id: 3,
    postText: "Exploring Claifonia today. Beautiful scenery!",
    photo: claifoniaImage,
    date: "15mins ago",
    userId: 3,
    like: 8,
    comments: "3 comments",
  },
  {
    id: 4,
    postText: "Impressed by the architecture of Putin's palace.",
    photo: putinImage,
    date: "20mins ago",
    userId: 4,
    like: 12,
    comments: "2 comments",
  },
  {
    id: 5,
    postText: "Learning new things with React.",
    photo: reactImage,
    date: "25mins ago",
    userId: 5,
    like: 25,
    comments: "10 comments",
  },
  {
    id: 6,
    postText: "Met a friendly robot today. What an experience!",
    photo: robotImage,
    date: "30mins ago",
    userId: 6,
    like: 18,
    comments: "6 comments",
  },
  {
    id: 7,
    postText: "Enjoyed a day at the school. Nostalgic memories.",
    photo: schoolImage,
    date: "35mins ago",
    userId: 7,
    like: 14,
    comments: "4 comments",
  },
  {
    id: 8,
    postText: "Attending a political event with Tinubu.",
    photo: tinubuImage,
    date: "40mins ago",
    userId: 8,
    like: 30,
    comments: "8 comments",
  },
  {
    id: 9,
    postText: "Reflecting on the impact of war. A solemn moment.",
    photo: warImage,
    date: "45mins ago",
    userId: 9,
    like: 22,
    comments: "7 comments",
  },
];
