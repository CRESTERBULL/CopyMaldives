// !navbar

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    console.log("btn was clicked");
    dropDownMenu.classList.toggle("open");
    console.log("hi");
    isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// !stay

const smallImages = document.getElementsByClassName("small-img");
const bigImage = document.getElementsByClassName("big-img");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener("mouseover", function () {
        const newSrc = smallImages[i].src;
        bigImage[Math.floor(i / 3)].src = newSrc;
    });
}
