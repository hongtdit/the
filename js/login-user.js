function showPassword() {
    let showPassword = document.getElementById("password");
    let icon = document.getElementById("icon");
    if (showPassword.type == "password") {
        showPassword.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        showPassword.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
function checkUserNamePass() {
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    if(localStorage.getItem("information") != null) {
        let arrAcount = JSON.parse(localStorage.getItem("information"));
        let arrEmail = [];
        let arrPassword = [];
        for (let i = 0; i < arrAcount.length; i++) {
            arrEmail.push(arrAcount[i].email);
            arrPassword.push(arrAcount[i].password);
        }
        // console.log( arrEmail);
        // console.log(arrPassword);
        console.log(arrEmail.indexOf(Email));
        let errorEmail = document.getElementById("errorEmail");
        let errorPassword = document.getElementById("errorPassword");
        if (arrEmail.indexOf(Email) != -1) {
            
            error.setAttribute("style","display:none");
            errorEmail.setAttribute("style","display:none");
            let index = arrEmail.indexOf(Email);
            if (arrPassword[index] == password) {
                errorPassword.setAttribute("style","display:none");
                window.location.href="./index.html"
                console.log(arrPassword[index]);
                localStorage.setItem(`boolLogin`,`true`);
                localStorage.setItem(`indexLogin`,index);
            }else{
                errorPassword.setAttribute("style","display:block;color:red");
                document.getElementById("password").value="";
            }
            // document.getElementById("email").value="";
        } else {
            errorEmail.setAttribute("style","display:block;color:red");
            errorPassword.setAttribute("style","display:none");
            document.getElementById("password").value="";
            document.getElementById("Email").value="";
        }
    } else {
        error.setAttribute("style","display:block;color:red");
    }

  
}