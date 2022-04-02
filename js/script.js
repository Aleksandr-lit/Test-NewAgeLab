const lang = document.querySelectorAll(".header__language-item");
const btn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const moreBtn = document.querySelector(".blocks__btn");
const blockMore = document.querySelector(".blocks__block-more");

lang.forEach((el) => {
    el.addEventListener("click", () => {
        removeClass();
        el.classList.add("_active");
    });
});

function removeClass() {
    lang.forEach((el) => {
        el.classList.remove("_active");
    })
}

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menuList.classList.toggle("_active");
});

moreBtn.addEventListener("click", () => {
    blockMore.classList.toggle("_show");
});