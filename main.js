const form = document.querySelector(".contact-form");

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const textMsg = document.getElementById("textmsg");
const consent = document.getElementById("consent");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    if (firstName.value.trim() === "") {
    showError(firstName);
    isValid = false;
    } else {
    hideError(firstName);
    }

    if (lastName.value.trim() === "") {
    showError(lastName);
    isValid = false;
    } else {
    hideError(lastName);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmailMsg = document.querySelector(".valid-email");
    const emailErrorMsg = email.parentElement.querySelector(".error-msg");
    if (email.value.trim() === "") {
    showError(email); 
    validEmailMsg.style.display = "none";

    isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
    email.classList.add("invalid-input");
    emailErrorMsg.style.display = "none";
    validEmailMsg.style.display = "block";

    isValid = false;
    } else {
    hideError(email);
    validEmailMsg.style.display = "none";
    }

    const querySelected = document.querySelector('input[name="query-type"]:checked');
    const queryError = document.querySelector(".query-type .error-msg");
    if (!querySelected) {
    queryError.style.display = "block";
    isValid = false;
    } else {
    queryError.style.display = "none";
    }

    if (textMsg.value.trim() === "") {
    showError(textMsg);
    isValid = false;
    } else {
    hideError(textMsg);
    }

    const checkboxError = document.querySelector(".checkbox-err");
    if (!consent.checked) {
    checkboxError.style.display = "block";
    isValid = false;
    } else {
    checkboxError.style.display = "none";
    }

    if (isValid) {
    const successMsg = document.querySelector(".success-message");

    successMsg.classList.add("show");
    form.reset();

    setTimeout(() => {
        successMsg.classList.remove("show");
    }, 4000);

    }
});

function showError(inputElement) {
    inputElement.classList.add("invalid-input");
    const errorMsg = inputElement.parentElement.querySelector(".error-msg");
    if (errorMsg) {
    errorMsg.style.display = "block";
    }
}

function hideError(inputElement) {
    inputElement.classList.remove("invalid-input");
    const errorMsg = inputElement.parentElement.querySelector(".error-msg");
    if (errorMsg) {
    errorMsg.style.display = "none";
    }
}

const radioOptions = document.querySelectorAll('.radio-option');
radioOptions.forEach(option => {
    option.addEventListener('click', () => {
        radioOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        const input = option.querySelector('input[type="radio"]');
        if (input) input.checked = true;
    });
});