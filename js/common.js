// thêm sản phẩm vào giỏ
function addToCart(id) {
  const localUser = localStorage.getItem("user");
  if (localUser) {
  
    // user đăng nhập mới có thể thêm sản phẩm vào giỏ
    const localCart = localStorage.getItem("cart") || "[]";
    const cart = JSON.parse(localCart);
    if (!cart.includes(id)) {
      const element = document.getElementById("product-count");
      cart.push(id);
      element.textContent = cart.length;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
   
  }
  else{
    alert("Vui lòng đăng nhập trước khi thao tác");
  }
}

// hiển thị số lượng sản phẩm trên giỏ hàng
function getCountCart() {
  const localCart = localStorage.getItem("cart") || "[]";
  const cart = JSON.parse(localCart);
  const element = document.getElementById("product-count");
  element.textContent = cart.length;
}

// tìm kiếm sản phẩm theo tên
function search() {
  const search = document.getElementById("search-product").value.toLowerCase();
  localStorage.setItem("search", search);
  const a = document.createElement("a");
  a.href = "search.html";
  a.click();
}

// chọn 1 sản phẩm để xem thông tin chi tiết
function selectDetail(id) {
  localStorage.setItem("detail", id);
  const a = document.createElement("a");
  a.href = "detail.html";
  a.click();
}

// kiểm tra user đã đăng nhập chưa
function checkUserLogin() {
  const localUser = localStorage.getItem("user");
  if (localUser) {
    document.getElementById("user-logout").style.display = "block";
    document.getElementById("user-signin").style.display = "none";
    document.getElementById("icon-user").src = JSON.parse(localUser).image;
  }
  else {

  }
}

// đăng xuất user
function logoutUser() {
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
  const a = document.createElement("a");
  a.href = "index.html";
  a.click();
}
function signinUser() {
  const a = document.createElement("a");
  a.href = "login.html";
  a.click();
}

// hàm khởi chạy ngay khi file được load
(function () {
  getCountCart();
  checkUserLogin();
})();