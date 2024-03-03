import { auth, dangky } from "./firebaseConfig.js";
console.log(auth)
const loginBtn = document.querySelector("#btnlogin");
loginBtn.addEventListener("click", () => {
    let email = document.querySelector("#form2Example17");
    let pass = document.querySelector("#form2Example27");
    const message = dangky(auth, email.value, pass.value);
});


