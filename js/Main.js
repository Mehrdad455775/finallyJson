import Menu from "./Menu/Menu";
import products from "./Products/products";
import slider from "./slider/slider";

async function alldata() {
    await Menu();
    await slider();
    await products();
    initialslider()
}
alldata()
function initialslider(){
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}