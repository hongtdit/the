const BRAND_NAME = ["Apple", "Samsung", "Xiaomi"];

// hiển thị danh sách sản phẩm theo thương hiệu
function renderProducts(list) {
  const element = document.getElementById("wrapper-brand");
  let appleData = "",
    samsungData = "",
    xiaomiData = "";
    if(list!=null) {
  list.forEach((item) => {
    let starList = ``;
    for (let i = 0; i < item.star; i++) {
      starList += `<img src="./img/star.png" alt="star">`;
    }
    const data = `<div class="product-item">
        <a href="#" onclick="selectDetail('${item.id}')"><img src="${item.image}" alt=""></a>
        <p class="name">${item.name}</p>
        <p>${starList}</p>
        <p class="price">${item.price}$</p>
        <div class="product-action">
            <div class="add-to-cart" onclick="addToCart('${item.id}')">Add to cart</div>
            <div class="add-to-favorite">Add to favorite</div>
        </div>
      </div>`;
    if (item.brand === "Apple") appleData += data;
    if (item.brand === "Samsung") samsungData += data;
    if (item.brand === "Xiaomi") xiaomiData += data;
  })};
  const brandItems = [appleData, samsungData, xiaomiData];

  for(let i = 0; i < brandItems.length; i++) {
    const titleHTML = document.createElement("h3");
    titleHTML.innerText = BRAND_NAME[i];
    titleHTML.classList.add("brand-name");
    const items = document.createElement("div");
    items.classList.add("row-items","products");
    items.innerHTML = brandItems[i];

    element.appendChild(titleHTML);
    element.appendChild(items);
  }
  const listID = document.getElementsByTagName("h3");
  for(let i = 0; i < brandItems.length; i++) {
    listID[i].id = BRAND_NAME[i];
  }
}

// hàm khởi chạy ngay khi file được load
(function () {
  const localProductsData = localStorage.getItem("products");
  const productData = JSON.parse(localProductsData);
  renderProducts(productData);
})();
