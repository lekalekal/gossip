const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    // autoplay: {
    //     delay: 2500,
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2500,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    
});