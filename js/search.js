// hiển thị sản phẩm tìm thấy
function renderSearchItem(search, list) {
  const element = document.getElementById("render-products");
  let textHTML = "";
  const productSearch = list.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  productSearch.forEach((item) => {
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
    textHTML += data;
  });

  element.innerHTML = textHTML;
}

// hàm khởi chạy ngay khi file được load
(function() {
  const localProductsData = localStorage.getItem("products");
  const productData = JSON.parse(localProductsData);
  const search = localStorage.getItem("search");
  renderSearchItem(search, productData);
})();
