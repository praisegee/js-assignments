"use script";

// DOM Selection
let preveiwContainer = document.querySelector(".products-preview");
let productContainer = document.querySelector(".products-container");
let previewBox = preveiwContainer.querySelectorAll(".preview");

// Preview product details
document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

// Handle close product detail preview
previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

// API calling and fetching

const url = "https://dummyjson.com/products";

const getProducts = async () => {
  const rep = await fetch(url);
  const data = await rep.json();
  displayProducts(data.products);
};
getProducts();

const displayProducts = (products) => {
  {
    products.forEach((product) => {
      document.querySelector(".loader").style.display = "none";
      productContainer.innerHTML += `
        <div class="product" data-name="p-3">
          <img src=${product.thumbnail} alt="" />
          <h3>${product.title}</h3>
          <div class="price">$${product.price}</div>
        </div>`;
    });
  }
};

// displayProducts();

/*
<div class="product" data-name="p-3">
          <img src="../images/81thV7SoLZL._AC_SL1500_.jpg" alt="" />
          <h3>Airpods max</h3>
          <div class="price">$549.00</div>
        </div>
        */
