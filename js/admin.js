// admin đăng xuất
function logout() {
  localStorage.clear();
}

// admin xóa 1 sản phẩm
function deleteProduct(id) {
  const localProducts = localStorage.getItem("products");
  const products = JSON.parse(localProducts);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) products.splice(i, 1);
  }
  localStorage.setItem("products", JSON.stringify(products));
  alert("Delete success");
  location.reload();
}

// hiển thị danh sách tất cả sản phẩm
function renderProducts() {
  const localProducts = localStorage.getItem("products");
  const products = JSON.parse(localProducts);
  let textHTMl = "";
  const body = document.getElementById("table-products");
  if(products!=null) {
  products.forEach((item) => {
    textHTMl += `<tr>
      <th><img class="product-image" src="${item.image}" alt=""></th>
      <td>${item.brand}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button
          type="button"
          onclick="showModalEditProduct('${item.id}')"
          id="${item.id}"
          class="btn btn-edit-product"
        >
          <i>Edit</i>
        </button>
        <button
          onclick="deleteProduct('${item.id}')"
          class="btn btn-delete-product"
        >
          <i>Delete</i>
        </button>
      </td>
    </tr>`;
  });
  body.innerHTML = textHTMl;
}}

// hiển thị danh sách tất cả đơn hàng đã đặt
function renderOrders(list = null) {
  let orders = [];
  if (list) {
    orders = list;
  } else {
    const localOrders = localStorage.getItem("orders") || "[]";
    orders = JSON.parse(localOrders);
  }
  let textHTMl = "";
  const body = document.getElementById("table-orders");
  orders.forEach((item) => {
    textHTMl += `<tr>
      <td>${item.userName}</td>
      <td>${item.code}</td>
      <td>${new Date(+item.code)}</td>
      <td>${item.totalPrice}</td>
      <td>${item.status}</td>
      <td>
        <button
          onclick="deleteOrder('${item.code}')"
          class="btn btn-delete-user"
        >
          <i>Delete</i>
        </button>
      </td>
    </tr>`;
  });
  body.innerHTML = textHTMl;
}

// hiển thị danh sách tất cả user
function renderUsers(list = null) {
  let users = [];
  if (list) {
    users = list;
  } else {
    const localUsers = localStorage.getItem("users") || "[]";
    users = JSON.parse(localUsers);
  }
  let textHTMl = "";
  const body = document.getElementById("table-users");
  users.forEach((item) => {
    textHTMl += `<tr>
      <th><img class="product-image" src="${item.image}" alt=""></th>
      <td>${item.username}</td>
      <td>${item.role}</td>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td>${item.email}</td>
      <td>${item.dob}</td>
      <td>${item.status}</td>
      <td>
        <button
          type="button"
          onclick="showModalEditUser('${item.id}')"
          class="btn btn-edit-user"
        >
          <i>Edit</i>
        </button>
        <button
          onclick="deleteUser('${item.id}')"
          class="btn btn-delete-user"
        >
          <i>Delete</i>
        </button>
      </td>
    </tr>`;
  });
  body.innerHTML = textHTMl;
}

// admin xóa 1 đơn hàng
function deleteOrder(code) {
  const localOrders = localStorage.getItem("orders") || "[]";
  const orders = JSON.parse(localOrders);
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].code === code) orders.splice(i, 1);
  }
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders(orders);
}

// admin xóa 1 user
function deleteUser(id) {
  const localUsers = localStorage.getItem("users");
  const users = JSON.parse(localUsers);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id && users[i].role !== "admin") users.splice(i, 1);
  }
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers(users);
}

// admin thay đổi tab product/order/user
const selectTab = (idx) => {
  // display content of tab
  const tabContent = Array.from(document.getElementsByClassName("tab-content"));
  tabContent.forEach((tab, index) => {
    if (index != idx) {
      tab.style.display = "none";
    } else {
      tab.style.display = "block";
    }
  });

  // change tab active
  const sidebarItem = Array.from(
    document.getElementsByClassName("sidebar-menu-item")
  );
  sidebarItem.forEach((item, index) => {
    if (index != idx) {
      sidebarItem[index].classList.remove("active");
    } else {
      sidebarItem[index].classList.add("active");
    }
  });
  if (idx === 0) {
    renderProducts();
  }
  if (idx === 1) {
    renderOrders();
  }
  if (idx === 2) {
    renderUsers();
  }
  localStorage.setItem('selectedTab', idx);
};

let productID = ""; // để chứa id của sản phẩm đang chỉnh sửa
// hiển thị modal chỉnh sửa 1 sản phẩm theo id
function showModalEditProduct(id) {
  productID = id;
  const localProducts = localStorage.getItem("products");
  const products = JSON.parse(localProducts);
  const product = products.find((item) => item.id === id);
  document.getElementById("modal-add-product").style.display = "block";
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-brand").value = product.brand;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-star").value = product.star;
  document.getElementById("product-description").value = product.description;
}

let userID = ""; // để chứa id của user đang chỉnh sửa
// hiển thị modal chỉnh sửa 1 user theo id
function showModalEditUser(id) {
  userID = id;
  const localUsers = localStorage.getItem("users");
  const users = JSON.parse(localUsers);
  const user = users.find((item) => item.id === id);
  document.getElementById("modal-edit-user").style.display = "block";
  document.getElementById("username").value = user.username;
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("dob").value = user.dob;
}

// xác nhận thêm/sửa sản phẩm
function submitFormProduct() {
  const form = document.getElementById("form-product");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const localProducts = localStorage.getItem("products");
    let products = JSON.parse(localProducts);
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    data.star = Number(data.star);
    data.price = Number(data.price);

    // check product is exist?
    //TODO Không thể add được cái thứ 2
    if (!productID && products==null) {
      products = []
      // not exist => add
      data.id = (new Date().getTime()).toString();
      data.image = "./img/product01.png";
      products.push(data);
    } else {
      // exist => update
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === productID) {
          const product = { ...products[i], ...data };
          products[i] = product;
        }
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    alert("Success");
    location.reload();
  });
}

// xác nhận sửa user
function submitFormUser() {
  const form = document.getElementById("form-user");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const localUsers = localStorage.getItem("users");
    const users = JSON.parse(localUsers);
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userID) {
        const user = { ...users[i], ...data };
        users[i] = user;
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    alert("Success");
    location.reload();
  });
}

// hàm khởi chạy ngay khi file được load
(function () {
  const tab = Number(localStorage.getItem('selectedTab') || 0);
  selectTab(tab);
  submitFormProduct();
  submitFormUser();
  var modal = document.getElementById("modal-add-product");
  var modalEditUser = document.getElementById("modal-edit-user");
  var btn = document.getElementById("btn-add-product");
  var closeModalProduct = document.getElementsByClassName("close")[0];
  var closeModalUser = document.getElementsByClassName("close")[1];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  closeModalProduct.onclick = function () {
    modal.style.display = "none";
  };

  closeModalUser.onclick = function () {
    modalEditUser.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})();
