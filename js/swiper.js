const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
