async function slider(){
    let slider = "";
    let data = await fetch("https://mehrdad455775.github.io/jsonTest/db.json")
    let res = await data.json();
    slider = res.slider.map((elem) =>{
        return `<div class="swiper-slide"><img src="${elem.image}" alt="${elem.alt}"/></div>`;
    })
    document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",slider.join(""))
}
export default slider;