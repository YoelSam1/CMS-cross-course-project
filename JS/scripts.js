window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})

document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");
 
  async function fetchProducts(url) {
    try {
      let data = await fetch(url);
      let response = await data.json();
      
      const loading = document.querySelector(".loader")

      for (let i = 0; i < response.length; i++) {
        let title = response[i].title;
        products.innerHTML += ` 
      <div class="product">
            

            <a href="Jacketspecificpage.html?id=${response[i].id}" class="img"><img src="${response[i].image}" alt="" class="product-img" /></a>
            
            <div class="product-content">
            <h2 class="product-title">${
              title.lenght > 18 ? title.substring(0, 18).concat("  ...") : title
            }</h2>
            <p class="product-sizes">Size - ${response[i].sizes}</p>
            <div class="product-price-container">
                <h3 class="product-price">$ ${response[i].price}</h3>
                <a href="Checkoutpage.html" data-productId="${
                  response[i].id
                }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
            </div>
            </div>
      </div>
      `;
      }
    } catch (error) {
      
    }
  }
  fetchProducts("https://api.noroff.dev/api/v1/rainy-days");
});



