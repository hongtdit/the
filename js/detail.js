let products = [];

// xác nhận mua 1 sản phẩm
function buyProduct(id) {
  const item = products.find((product) => product.id === id);
  const localOrders = localStorage.getItem("orders") || "[]";
  const orders = JSON.parse(localOrders);
  const user = JSON.parse(localStorage.getItem('user'));
  const newOrder = {
    code: (new Date().getTime()).toString(),
    userName: `${user.firstName} ${user.lastName}`,
    totalPrice: item.price,
    status: 'Done',
    item: item,
  };
  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  localStorage.removeItem("shopping-list");
  alert("Successfully!");
  const a = document.createElement("a");
  a.href = "index.html";
  a.click();
}

// hiển thị thông tin chi tiết sản phẩm
function renderProducts(id, list) {
  const element = document.getElementById("wrapper-detail");
  const detailProduct = list.find((item) => item.id === id);
  let starList = ``;
  for (let i = 0; i < detailProduct.star; i++) {
    starList += `<img src="./img/star.png" alt="star">`;
  }
  const data = `<img src="${detailProduct.image}" alt="" class="product-detail-image">
    <div class="product-detail-info">
        <p class="product-info product-name">${detailProduct.name}</p>
        <p class="product-info product-brand">Brand: ${detailProduct.brand}</p>
        <p class="product-info product-star">Favorite: ${starList}</p>
        <p class="product-info product-price">Price: ${detailProduct.price}$</p>
        <p class="product-info product-desc">${detailProduct.description}</p>
        <div class="btn btn-buy" onclick="buyProduct('${id}')">Buy now</div>
    </div>`;
  element.innerHTML = data;
}

// hàm khởi chạy ngay khi file được load
(function () {
  const localProductsData = localStorage.getItem("products");
  const productData = JSON.parse(localProductsData);
  products = productData;
  const id = localStorage.getItem("detail");
  renderProducts(id, productData);
})();
