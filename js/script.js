// const lang = document.querySelectorAll(".header__language-item");

// lang.forEach((el) => {
//     this.addEventListener("click", () => {
//         this.classList.toggle("_active");
//     });
//     el.classList.remove("_active");
// })

const btn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const moreBtn = document.querySelector(".blocks__btn");
const blockMore = document.querySelector(".blocks__block-more");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menuList.classList.toggle("_active");
});

moreBtn.addEventListener("click", () => {
    blockMore.classList.toggle("_show");
})