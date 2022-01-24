let mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: false,
    loop: true,


    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    },
});

let secondswiper = new Swiper('.CreatorImageSliderConteiner', {
    slidesPerView: 1,
    effect: "fade",
    loop: true,


    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false,
    },
});