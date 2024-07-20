const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

let typed = new Typed('.multiple-text', {
    strings: ['Aspiring Developer', 'IT Enthusiast',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
