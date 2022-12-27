let shoppingCart = [];

// hiển thị sản phẩm trong giỏ hàng
function renderSearchItem(cart) {
  const body = document.getElementById("table-products");
  const price = document.getElementById("price");
  let textHTMl = "";
  let sumPrice = 0;
  cart.forEach((item) => {
    const count = item?.count || 1;
    const totalPrice = count * item.price;
    sumPrice += totalPrice;
    textHTMl += `<tr>
      <th><img class="product-image" src="${item.image}" alt=""></th>
      <td>${item.brand}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${count}</td>
      <td>${totalPrice}</td>
      <td>
        <div id="tableBtn" style="display: flex;">
          <button
            type="button"
            onclick="addProduct('${item.id}')"
            class="btn btn-add-product"
          >
            <i>+</i>
          </button>
          <button
            type="button"
            onclick="minusProduct('${item.id}')"
            class="btn btn-minus-product"
          >
            <i>-</i>
          </button>
          <button
            onclick="deleteProduct('${item.id}')"
            class="btn btn-delete-product"
          >
            <i>Delete</i>
          </button>
        </div>
      </td>
    </tr>`;
    
  });
  body.innerHTML = textHTMl;
  price.innerHTML = sumPrice;
  
  shoppingCart = cart;
}

// lấy danh sách sản phẩm trong giỏ từ localStorage
function getData(cart, list) {
  const items = [];
  for (let i = 0; i < list.length; i++) {
    if (cart.includes(list[i].id)) {
      items.push(list[i]);
    }
  }
  localStorage.setItem("shopping-list", JSON.stringify(items));
  renderSearchItem(items);
}

// user giảm số lượng sản phẩm trong giỏ, nếu số lượng = 0 thì xóa
function minusProduct(id) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
      if (shoppingCart[i]?.count > 1) {
        shoppingCart[i].count -= 1;
      } else {
        deleteProduct(id);
      }
    }
  }
  renderSearchItem(shoppingCart);
}

// user tăng số lượng sản phẩm trong giỏ
function addProduct(id) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
      if (shoppingCart[i]?.count) {
        shoppingCart[i].count += 1;
      } else {
        shoppingCart[i].count = 2;
      }
    }
  }
  renderSearchItem(shoppingCart);
}

// user xóa 1 mặt hàng khỏi giỏ
function deleteProduct(id) {
  const localCart = localStorage.getItem("cart");
  let cart = JSON.parse(localCart);
  cart = cart.filter((item) => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) shoppingCart.splice(i, 1);
  }
  localStorage.setItem("shopping-list", JSON.stringify(shoppingCart));
  location.reload();
}

// user đặt hàng
function orderProduct() {
  const price = document.getElementById("price").innerText || "0";
  const localOrders = localStorage.getItem('orders') || "[]";
  const orders = JSON.parse(localOrders);
  const user = JSON.parse(localStorage.getItem('user'));
  const newOrder = {
    code: (new Date().getTime()).toString(),
    userName: `${user.firstName} ${user.lastName}`,
    totalPrice: Number(price),
    status: 'Done',
    item: shoppingCart
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

// hàm khởi chạy ngay khi file được load
(function () {
  const shopping = localStorage.getItem("shopping-list");
  const localCart = localStorage.getItem("cart") || "[]";
  const cart = JSON.parse(localCart);
  shoppingCart = JSON.parse(shopping);
  if (shopping && shoppingCart.length === cart.length) {
    renderSearchItem(shoppingCart);
  } else {
    const localProductsData = localStorage.getItem("products");
    const productData = JSON.parse(localProductsData);
    getData(cart, productData);
  }
})();
