"use strict";

const users = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    text: " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    image: "image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    image: "image-john.jpg",
  },
];

let num = 0;

const testimonialmage = document.querySelector("#testimonial-main-image");
const testimonialText = document.querySelector(".text");
const userName = document.querySelector(".name");
const userJob = document.querySelector(".job");

const prevCard = document.querySelector(".card-left");
const nextCard = document.querySelector(".card-right");

const showData = (num) => {
  let user = users[num];
  testimonialmage.setAttribute('src',`images/${user.image}`);
  testimonialmage.setAttribute('alt',`image of ${user.name}`);
  testimonialText.innerText = `"${user.text}"`;
  userName.innerText = `${user.name}`;
  userJob.innerText = `${user.job}`;
};

prevCard.addEventListener("click", () => {
  num--;
  if (num < 0) {
    num = users.length - 1;
  }
  showData(num);
});
nextCard.addEventListener("click", () => {
  num++;
  if (num > users.length - 1) {
    num = 0;
  } else {
    num = num;
  }
  showData(num);
});

window.addEventListener("load", showData(num));
