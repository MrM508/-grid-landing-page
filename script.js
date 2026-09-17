const mb = document.querySelector('.mb');
const nav = document.querySelector('nav')


mb.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    if(nav.classList.contains('open')){
        mb.src = "assets/images/icon-close.svg";
    } else{
        mb.src ="assets/images/icon-menu.svg";
    }    
})
