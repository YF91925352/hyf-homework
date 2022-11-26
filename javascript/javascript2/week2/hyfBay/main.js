console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ul = document.querySelector("ul");

function renderProducts(pro) {
  for (let element of pro) {
    const proName = document.createElement("h2");
    const proPrice = document.createElement("li");
    const proRating = document.createElement("li");
    proName.innerHTML = element.name;
    proPrice.innerHTML = "price:" + element.price;
    proRating.innerHTML = "rating:" + element.rating;
    ul.appendChild(proName);
    ul.appendChild(proPrice);
    ul.appendChild(proRating);
  }
}
renderProducts(products);

/* search products */
const input1 = document.getElementById("text");
input1.addEventListener("input", () => {
  const matchProducts = products.filter((eachProduct) =>
    eachProduct.name.toLowerCase().includes(input1.value.toLowerCase())
  );
  if (input1.value === "") {
    renderProducts(products);
  } else {
    ul.innerHTML = " ";
    renderProducts(matchProducts);
  }
});
/* limit max price */
const input2 = document.getElementById("number");
input2.addEventListener("input", () => {
  const matchPrice = products.filter(
    (eachProduct) => eachProduct.price <= input2.value
  );
  if (input2.value === "") {
    renderProducts(products);
  } else {
    ul.innerHTML = " ";
    renderProducts(matchPrice);
  }
});
/* search by rating */
const input3 = document.getElementById("rating");
input3.addEventListener("input", () => {
  const matchRating = products.filter(
    (eachProduct) => eachProduct.rating <= input3.value
  );
  if (input3.value === "") {
    renderProducts(products);
  } else {
    ul.innerHTML = " ";
    renderProducts(matchRating);
  }
});
