console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(pro) {
  const ul = document.body.appendChild(document.createElement("ul"));
  for (let element of pro) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const proName = document.createElement("h2");
    const proPrice = document.createElement("span");
    const proRating = document.createElement("span");
    proName.innerHTML = element.id;
    proPrice.innerHTML = element.price;
    proRating.innerHTML = element.rating;
    li.appendChild(proName);
    li.appendChild(proPrice);
    li.appendChild(proRating);
  }
}
renderProducts(products);
