let passwordInput = document.getElementById("password-field");
let confirmPasswordInput = document.getElementById("confirm-password-field");
let createAccountButton = document.getElementById("create-account-button");

confirmPasswordInput.addEventListener("input", checkPassword);
passwordInput.addEventListener("input", checkPassword);

function checkPassword() {

    if (passwordInput.value.length > 0 && confirmPasswordInput.value.length > 0) {
        if (passwordInput.value == confirmPasswordInput.value) {

            passwordInput.style.border = "1px solid green";
            confirmPasswordInput.style.border = "1px solid green";
            createAccountButton.disabled = false;
        } else {

            passwordInput.style.border = "1px solid red";
            confirmPasswordInput.style.border = "1px solid red";
            createAccountButton.disabled = true;
        }
    } else {
        passwordInput.style.border = "";
        confirmPasswordInput.style.border = "";
        createAccountButton.disabled = true;
    }

    createAccountButton.addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
    })
}