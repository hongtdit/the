// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

// dữ liệu mặc định
const USER = [
  {
    id: "a-01",
    image: "./img/user01.jfif",
    username: "admin",
    password: "123123",
    firstName: "Admin",
    lastName: "",
    email: "admin@gmail.com",
    dob: "1976-05-22",
    role: "admin",
    status: "Active",
  },
  {
    id: "u-01",
    image: "./img/user01.jfif",
    username: "username",
    password: "123123",
    firstName: "Tom",
    lastName: "Cruise",
    email: "username022@gmail.com",
    dob: "1976-05-22",
    role: "user",
    status: "Active",
  },
  {
    id: "u-02",
    image: "./img/user01.jfif",
    username: "username2",
    password: "123123",
    firstName: "Kevin",
    lastName: "JR",
    email: "username022@gmail.com",
    dob: "1977-09-20",
    role: "user",
    status: "Active",
  },
  {
    id: "u-03",
    image: "./img/user01.jfif",
    username: "username3",
    password: "123123",
    firstName: "Cristiano",
    lastName: "Ronaldo",
    email: "username022@gmail.com",
    dob: "1971-03-22",
    role: "user",
    status: "Active",
  },
  {
    id: "u-04",
    image: "./img/user01.jfif",
    username: "username4",
    password: "123123",
    firstName: "Leonel",
    lastName: "Messi",
    email: "username022@gmail.com",
    dob: "1973-08-27",
    role: "user",
    status: "Active",
  },
  {
    id: "u-05",
    image: "./img/user01.jfif",
    username: "username5",
    password: "123123",
    firstName: "Tom",
    lastName: "Cruise",
    email: "username022@gmail.com",
    dob: "1972-01-02",
    role: "user",
    status: "Active",
  },
];

function show() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "text");
}

function hide() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
  "click",
  function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false
);

// kiểm tra user có tồn tại hay không
function checkUser(data) {
  const localUsers = localStorage.getItem("users");
  const users = JSON.parse(localUsers);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === data.username &&
      users[i].password === data.password
    ) {
      localStorage.setItem("user", JSON.stringify(users[i]));
      return users[i];
    }
  }
  return null;
}

// hàm khởi chạy ngay khi file được load
(function () {
  const localUsers = localStorage.getItem("users");
  if (!localUsers) {
    localStorage.setItem("users", JSON.stringify(USER));
  }

  // check user is login
  const user = localStorage.getItem("user");
  if (user) {
    // logged in
    const a = document.createElement("a");
    a.href = "index.html";
    a.click();
  } else {
    // not logged in
    const form = document.getElementById("login-user");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.target);
      const data = Object.fromEntries(form);
      const user = checkUser(data);
      if (user.role === "admin") {
        const a = document.createElement("a");
        a.href = "admin.html";
        a.click();
      } else if (user.role === "user") {
        const a = document.createElement("a");
        a.href = "index.html";
        a.click();
      } else {
        alert("Please use login for user account!");
        location.reload();
      }
    });
  }
})();
function gotoRegistor() {
  const a = document.createElement("a");
  a.href = "register-user.html";
  a.click();
}
function gotoForgotPass() {
  const a = document.createElement("a");
  a.href = "forgotPass.html";
  a.click();
}
// function checkUser(data) {
//   for (let i = 0; i < USER.length; i++) {
//     if (
//       USER[i].username === data.username &&
//       USER[i].password === data.password
//     ) {
//       localStorage.setItem("user", JSON.stringify(USER[i]));
//       return true;
//     }
//   }
//   return false;
// }

// // hàm khởi chạy ngay khi file được load
// (function () {
//   localStorage.setItem("users", JSON.stringify(USER));

//   // check user is login
//   const user = localStorage.getItem("user");
//   if (user) {
//     // logged in
//     const a = document.createElement("a");
//     a.href = "index.html";
//     a.click();
//   } else {
//     // not logged in
//     const form = document.getElementById("login-user");
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const form = new FormData(event.target);
//       const data = Object.fromEntries(form);
//       if (checkUser(data)) {
//         const a = document.createElement("a");
//         a.href = "index.html";
//         a.click();
//       } else {
//         alert("Invalid user!");
//         location.reload();
//       }
//     });
//   }
// })();
