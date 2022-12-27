function seePassword() {
  let seePassword = document.getElementById("password");
  let icon = document.getElementById("icon");
  if (seePassword.type == "password") {
    seePassword.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    seePassword.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
function seeConfirmPassword() {
  let seeConfirmPassword = document.getElementById("passwordconfirm");
  let icon = document.getElementById("icon1");
  // console.log(icon);
  if (seeConfirmPassword.type == "password") {
    seeConfirmPassword.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    seeConfirmPassword.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
function seePassword() {
  let seePassword = document.getElementById("password");
  let icon = document.getElementById("icon");
  if (seePassword.type == "password") {
    seePassword.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    seePassword.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
function seeConfirmPassword() {
  let seeConfirmPassword = document.getElementById("passwordconfirm");
  let icon = document.getElementById("icon1");
  // console.log(icon);
  if (seeConfirmPassword.type == "password") {
    seeConfirmPassword.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    seeConfirmPassword.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
function checkUserName(username) {
  let re = /^[a-zA-Z0-9\-]+$/;
  if (re.test(username)) {
    return true;
  } else {
    return false;
  }
}
function checkEmail(mail) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(mail)) {
    return true;
  } else {
    return false;
  }
}
function register() {
  let username = document.getElementById("username").value;
  let errorUsername = document.getElementById(`errorUsername`);
  // console.log(checkUserName(username));
  if (checkUserName(username) == false) {
    errorUsername.setAttribute("style", "display:block; color:red");
  } else {
    errorUsername.setAttribute("style", "display:none");
    document.getElementById("username").value = "";
  }
  let mail = document.getElementById("email").value;
  let errorEmail = document.getElementById(`errorEmail`);
  // console.log(checkEmail(mail));
  // console.log(errorEmail);
  if (checkEmail(mail) == false) {
    errorEmail.setAttribute("style", "display:block; color:red");
  } else {
    errorEmail.setAttribute("style", "display:none");
    document.getElementById("email").value = "";
  }

  let pass = document.getElementById("password").value;
  let p = document.getElementById("error");
  if (pass.length < 6 || pass.indexOf(" ") != -1) {
    p.setAttribute("style", "display:block;color:red");
  } else {
    p.setAttribute("style", "display:none");
    document.getElementById("password").value = "";
  }

  let pConfirm = document.getElementById("confirmError");
  let passConfirm = document.getElementById("passwordconfirm").value;
  if (passConfirm !== pass) {
    pConfirm.setAttribute("style", "display:block;color:red");
    document.getElementById("passwordconfirm").value = "";
  } else {
    pConfirm.setAttribute("style", "display:none");
    document.getElementById("passwordconfirm").value = "";
  }

  if (
    checkUserName(username) &&
    checkEmail(mail) &&
    pass.length >= 6 &&
    passConfirm == pass
  ) {
    let obj = {
      id: new Date().getTime().toString(),
      image: "./img/user01.jfif",
      username: username,
      firstName: "",
      lastName: "",
      email: mail,
      password: pass,
      dob: "1971-03-22",
      role: "user",
      status: "Active",
    };
    let getListUser = localStorage.getItem("users");
    if (getListUser == null) {
      getListUser = [];
      getListUser.push(obj);
      // console.log("111111");
      localStorage.setItem("users", JSON.stringify(getListUser));
      alert("Đăng kí thành công");
      window.location.href = "login.html";
    } else {
      getListUser = JSON.parse(getListUser);
      let emailExits = document.getElementById("emailExits");
      let flag = false;
      for (let i = 0; i < getListUser.length; i++) {
        if (obj.email == getListUser[i].email) {
          emailExits.setAttribute("style", "display:block;color:red");
          flag = false;
          return;
        } else {
          flag = true;
        }
      }
      if (flag == true) {
        getListUser.push(obj);
        localStorage.setItem("users", JSON.stringify(getListUser));
        alert("Đăng kí thành công");
        window.location.href = "login.html";
      }
    }
  }
}
