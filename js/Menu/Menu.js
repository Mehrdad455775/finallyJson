async function Menu(){
    let menu = ""
    try {
        let data = await fetch("https://mehrdad455775.github.io/jsonTest/db.json");
        let res = await data.json()
        menu = res.Menu.map((elem) => {
          return `<li class="nav-item">
              <a class="nav-link active" href="${elem.link}">${elem.name}</a>
            </li>`;
        })
        document.querySelector(".navbar-nav").insertAdjacentHTML("afterbegin" , menu.join(""));
    } catch (error) {
        console.log(error.message); 
    }
}
export default Menu;