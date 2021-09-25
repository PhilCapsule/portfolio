        /* navbar_hidden */
let lastScrollTop = 0;  /*init*/
navbar = document.getElementsById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;

})
alert('t')

// typed 
var typed = new Typed('.typed', {
    strings: [
        'Coucou  ', 
        'Je m\'appel Philippe',
        'je suis de Marseille',
        'j\'ai décidé de me reconvertir en tant que Dev FullStack',
        'J\'ai donc fait le Wagon et la Capsule'
    ],
    typeSpeed: 50,
    /*smartSpeed: 20,*/
    /*smartBackspace: true, // Default value*/
    loop: true
  });
  