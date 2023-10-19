document.addEventListener('DOMContentLoaded', () => {
    const showSlide = new Swiper('.showcase-carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    })

    document.getElementsByTagName('video')[0].playbackRate = 2;
});