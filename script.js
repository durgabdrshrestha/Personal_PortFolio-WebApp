
// hamburger icon show hide code
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// read more function
function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read More";
    }
  }
