// dữ liệu mặc định
const PRODUCTS = [
  {
    id: "apple-01",
    name: "Apple Smart I",
    price: 499,
    star: 5,
    brand: "Apple",
    image: "./img/product01.png",
    love: true,
    description:
      'Thiết kế của Apple Smart thừa hưởng nhiều nét tương đồng với "người anh" Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ.',
  },
  {
    id: "apple-02",
    name: "Apple Smart II",
    price: 399,
    star: 5,
    brand: "Apple",
    image: "./img/product02.png",
    love: true,
    description:
      'Thiết kế của Apple Smart thừa hưởng nhiều nét tương đồng với "người anh" Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ.',
  },
  {
    id: "apple-03",
    name: "Apple Smart III",
    price: 299,
    star: 5,
    brand: "Apple",
    image: "./img/product03.png",
    love: true,
    description:
      'Thiết kế của Apple Smart thừa hưởng nhiều nét tương đồng với "người anh" Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ.',
  },
  {
    id: "apple-04",
    name: "Apple Smart IV",
    price: 599,
    star: 5,
    brand: "Apple",
    image: "./img/product04.png",
    love: true,
    description:
      'Thiết kế của Apple Smart thừa hưởng nhiều nét tương đồng với "người anh" Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ.',
  },
  {
    id: "apple-05",
    name: "Apple Smart V",
    price: 399,
    star: 5,
    brand: "Apple",
    image: "./img/product01.png",
    love: true,
    description:
      'Thiết kế của Apple Smart thừa hưởng nhiều nét tương đồng với "người anh" Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ.',
  },
  {
    id: "samsung-01",
    name: "Samsung Watch Pro",
    price: 369,
    star: 5,
    brand: "Samsung",
    image: "./img/product05.png",
    love: true,
    description:
      "Đồng hồ Samsung Watch Pro không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "samsung-02",
    name: "Samsung Watch Pro II",
    price: 399,
    star: 5,
    brand: "Samsung",
    image: "./img/product02.png",
    love: true,
    description:
      "Đồng hồ Samsung Watch Pro không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "samsung-03",
    name: "Samsung Watch Pro III",
    price: 499,
    star: 5,
    brand: "Samsung",
    image: "./img/product03.png",
    love: true,
    description:
      "Đồng hồ Samsung Watch Pro không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "samsung-04",
    name: "Samsung Watch Pro III",
    price: 499,
    star: 5,
    brand: "Samsung",
    image: "./img/product01.png",
    love: true,
    description:
      "Đồng hồ Samsung Watch Pro không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "xiaomi-01",
    name: "Xiaomi Watch I",
    price: 299,
    star: 4,
    brand: "Xiaomi",
    image: "./img/product02.png",
    love: true,
    description:
      "Đồng hồ Xiaomi Watch không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "xiaomi-02",
    name: "Xiaomi Watch II",
    price: 329,
    star: 5,
    brand: "Xiaomi",
    image: "./img/product04.png",
    love: true,
    description:
      "Đồng hồ Xiaomi Watch không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
  {
    id: "xiaomi-03",
    name: "Xiaomi Watch III",
    price: 199,
    star: 4,
    brand: "Xiaomi",
    image: "./img/product03.png",
    love: true,
    description:
      "Đồng hồ Xiaomi Watch không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng.",
  },
];

const BRAND_NAME = ["Apple", "Samsung", "Xiaomi"];

// hiển thị danh sách toàn bộ sản phẩm
function renderProducts(list) {
  const element = document.getElementById("render-products");
  let textHTML = "";
  let data=""
  list.forEach((item) => {
      let starList = ``;
      for (let i = 0; i < item.star; i++) {
        starList += `<img src="./img/star.png" alt="star">`;
      data = `<div class="product-item">
        <a href="#" onclick="selectDetail('${item.id}')"><img src="${item.image}" alt=""></a>
        <p class="name">${item.name}</p>
        <p>${starList}</p>
        <p class="price">${item.price}$</p>
        <div class="product-action">
            <div class="add-to-cart" onclick="addToCart('${item.id}')">Add to cart</div>
            <div class="add-to-favorite" id="heart${i}" onclick="setHeart(${i})">Add to favorite</div>
        </div>
      </div>`;
    }
      textHTML += data;
      // for (let i = 0; i < PRODUCTS.length; i++) {
      //   if (PRODUCTS[i].love === true) {
      //     var heart = document.getElementById(`heart${i}`);
      //     heart.style.backgroundColor = "red";
      //   }
      // }
  });
  function setHeart(i) {
    PRODUCTS[i].love = !PRODUCTS[i].love;
    renderProducts();
  }

  element.innerHTML = textHTML;
}
// hàm khởi chạy ngay khi file được load
(function () {
  const localProducts = localStorage.getItem("products");
  if (localProducts) {
    renderProducts(JSON.parse(localProducts));
  } else {
    renderProducts(PRODUCTS);
    localStorage.setItem("products", JSON.stringify(PRODUCTS));
  }
})();
