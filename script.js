const [inputUser, inputPassword] = document.querySelectorAll("input");
const btn = document.querySelector("button")


function handleChange() {
    if (inputUser.value && inputPassword.value.length >= 8) {
        btn.classList.add("active_btn")
    } else {
        btn.classList.remove("active_btn")
    }
}

inputUser.addEventListener("input", handleChange);
inputPassword.addEventListener("input", handleChange);