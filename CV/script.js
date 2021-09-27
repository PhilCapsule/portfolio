        /* navbar_hidden */
let lastScrollTop = 0;  
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOfset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;

});

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
  

  // Compt. Live

let compteur = 0;

$(window).scroll(function() {
    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        
        compteur = 1;
    }
})



