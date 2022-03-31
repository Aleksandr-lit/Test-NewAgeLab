"use strict";

// const lang = document.querySelectorAll(".header__language-item");
// lang.forEach((el) => {
//     this.addEventListener("click", () => {
//         this.classList.toggle("_active");
//     });
//     el.classList.remove("_active");
// })
var btn = document.querySelector(".menu__btn");
var menuList = document.querySelector(".menu__list");
var moreBtn = document.querySelector(".blocks__btn");
var blockMore = document.querySelector(".blocks__block-more");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  menuList.classList.toggle("_active");
});
moreBtn.addEventListener("click", function () {
  blockMore.classList.toggle("_show");
});