
function handleNavMenu() {
    let myLinks = document.getElementById("myLinks");
    myLinks.classList.toggle("show");
}

const navBtn = document.querySelector("#hamburger");
navBtn.addEventListener("click", handleNavMenu);

