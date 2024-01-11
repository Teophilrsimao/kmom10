/**
 * nav
 */

const toggle = document.querySelector('.nav');
const toggleButton = document.querySelector('.nav-toggle');

toggleButton.addEventListener('click', () => {
    if (window.innerWidth < 767) {
        toggle.style.display = (toggle.style.display === 'flex') ? 'none' : 'flex';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 767) {
        toggle.style.display = 'flex';
    }
});

document.addEventListener("scroll", function () {
    var header = document.querySelector(".header");

    if (window.scrollY > 0) {
        header.classList.add("small");
    } else {
        header.classList.remove("small");
    }
});