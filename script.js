"use strict";
const info = document.getElementById("info");
const submit = document.getElementById("submit");
const email = document.getElementById("email");
const form = document.getElementById("form");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const input = email.value;
  if (!input.match(regex)) {
    alert("Please enter email");
  } else {
    form.classList.add("hidden");
    info.classList.remove("hidden");
  }
});
// 1 thằng kinh nghiệm
// View-more cho 1 phan (kinh nghiem)
const exd = document.getElementsByClassName("exd");
console.log(exd);
const btMoreExd = document.getElementsByClassName("view-more");
const btLessExd = document.getElementsByClassName("view-less");
const mainExd = document.getElementsByClassName("main-exd");
//
// Chuc nang hien len
// function mouseOn() {
//   btMoreExd.classList.remove("hidden");
// }
// // Chức năng ẩn cua
// function mouseOut() {
//   btMoreExd.classList.add("hidden");
// }
//Kinh Nghiem
// 
for(let i = 0; i < btMoreExd.length; i++)
{
  btMoreExd[i].addEventListener("click", function(){
    mainExd[i].classList.remove("hidden");
  });
 
}

// Click more
//   btMoreExd.addEventListener("click", function () {
//   mainExd.classList.remove("hidden");
// });
// // Click less
for(let i = 0; i < btLessExd.length; i++) {
  btLessExd[i].addEventListener("click", function() {
    mainExd[i].classList.add("hidden");
  })
}
// btLessExd.addEventListener("click", function () {
//   mainExd.classList.add("hidden");
// });
//For all
// Hoc Van
// function mouseOnAll() {
//   btMore.classList.remove("hidden");
// }
// function mouseOutAll() {
//   btMore.classList.add("hidden");
// }
// document.getElementById("Learner").addEventListener("mouseenter", mouseOnAll);
// document.getElementById("Learner").addEventListener("mouseenter", mouseOutAll);
