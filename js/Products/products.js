async function products() {
  try {
    let products = "";
    let data = await fetch(
      "https://6799589ebe2191d708b2adb5.mockapi.io//products"
    );
    let res = await data.json();
    products = res.map((elem) => {
      return `<div class="col-5">
          <h3>title:${elem.title}</h3>
          <p class="text-truncate">description:${elem.description}</p>
          <img src="${elem.image}" class="img-fluid" alt="">
          <div class="d-flex justify-content-between">
          <h3>price:${elem.price}</h3>
          <h3>rate:${elem.rate}</h3>
          </div>
        </div>`;
    });
    document.querySelector(".products").insertAdjacentHTML("afterbegin" , products.join(""))
  } catch (error) {
    console.log(error.message);
  }
}
export default products;
