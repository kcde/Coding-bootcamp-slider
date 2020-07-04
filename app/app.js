//users data
const users = [
  {
    id: 0,
    name: "Tanya Sinclair",
    image: "../images/image-tanya.jpg",
    role: "UX Engineer",
    comment: `"I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. "`,
  },
  {
    id: 1,
    name: "John Tarkpor",
    image: "../images/image-john.jpg",
    role: "Junior Front-end Developer",
    comment: `"If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer."  `,
  },
];
// selection required selectors
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const image = document.querySelector(".img");
const comment = document.querySelector(".comment");
const name = document.querySelector(".name");
const role = document.querySelector(".role");

let person = 0;

//loading initial content
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
// function to show person
function showPerson() {
  item = users[person];
  comment.textContent = item.comment;
  image.src = item.image;
  role.textContent = item.role;
  name.textContent = item.name;
}

nextBtn.addEventListener("click", function () {
  person++;
  console.log(users.length);
  if (person > users.length - 1) {
    person = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  person--;
  if (person < 0) {
    person = users.length - 1;
  }
  showPerson();
});
