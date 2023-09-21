let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.pirate-text',{delay:200,origin:'top'});
sr.reveal('.pirate-img',{delay:350,origin:'top'});
sr.reveal('.icons',{delay:400,origin:'left'});
sr.reveal('.navlist',{delay:300,origin:'right'});
sr.reveal('.logo',{delay:300,origin:'top'});