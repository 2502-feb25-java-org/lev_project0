document.addEventListener('DOMContentLoaded', () => {
    reloadValues();
    createOnChangeEvents();
    signInFirst();
});

function reloadValues() {
    let inputTags = document.getElementsByTagName("input");
    for (let index = 0; index < inputTags.length; index++) {
        loadValue(inputTags[index]);
    };

    let textAreas = document.getElementsByTagName("textarea");
    for (let index = 0; index < textAreas.length; index++) {
        loadValue(textAreas[index]);
    };
}

function createOnChangeEvents() {
    let inputTags = document.getElementsByTagName("input");
    for (let index = 0; index < inputTags.length; index++) {
        inputTags[index].addEventListener("change", () => {
            storeValue(inputTags[index]);
        });
    }

    let textAreas = document.getElementsByTagName("textarea");
    for (let index = 0; index < textAreas.length; index++) {
        textAreas[index].addEventListener("change", () => {
            storeValue(textAreas[index]);
        });
    }
}

function storeValue(element) {
    if (element.type == "radio")
        localStorage.setItem(element.name, element.id);
    else
        localStorage.setItem(element.id, element.value);
}

function loadValue(element) {
    if (element.type == "submit" || element.type == "checkbox")
        return;
    else if (element.type == "radio")
        loadRadios(element.name);
    else
        element.value = localStorage.getItem(element.id);
}

function loadRadios(elementName) {
    let radios = document.getElementsByName(elementName);
    let storedValue = localStorage.getItem(elementName);
    for (let index = 0; index < radios.length; index++) {
        if (radios[index].id == storedValue)
            radios[index].checked = true;

        else
            radios[index].checked = false;
    }
}

function signInFirst() {
    let gameLink = document.getElementById("game_link");
    gameLink.addEventListener("click", () => {
        if (localStorage.username == "admin" && localStorage.password == "123")
            gameLink.setAttribute("href", "game.html");
        else
            alert("You must sign in before playing!");
    });
}

function validateSignIn() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (!isValid(username, password)) {
        localStorage.setItem("logedIn", "false");
        alert("Username and Password don't match any existing login.");
        event.preventDefault();
    }
    else
    {
        alert("Loged in successfully");
        localStorage.setItem("logedIn", "true");
    }
    setColors();
}

function isValid(username, password) {
    if (username.value == "admin" && password.value == "123") 
        return true;
    else 
        return false;
}

function setColors()
{
    let valid = localStorage.getItem("logedIn");
    if (valid == "true") {
        username.setAttribute("class", "form-control is-valid");
        password.setAttribute("class", "form-control is-valid");
    }
    else {
        username.setAttribute("class", "form-control is-invalid");
        password.setAttribute("class", "form-control is-invalid");
    }
}

function setNormalSignIn()
{
    let username = document.getElementById("username");
    let password = document.getElementById("password"); 

    username.setAttribute("class", "form-control");
    password.setAttribute("class", "form-control");
}

function setNormalSignUp() {
    let firstName = document.getElementById("first_name");
    let middleName = document.getElementById("middle_name");
    let lastName = document.getElementById("last_name");
    let phone = document.getElementById("phone");
    let zipcode = document.getElementById("zipcode");
    let country = document.getElementById("country");

    firstName.setAttribute("class", "form-control");
    middleName.setAttribute("class", "form-control");
    lastName.setAttribute("class", "form-control");
    phone.setCustomValidity('');
    zipcode.setCustomValidity('');
    country.setCustomValidity('');

}

function thankYouMessage() {
    alert("Thank you. Someone will respond shortly.")
}

function signUpValidation() {
    let firstName = document.getElementById("first_name");
    let middleName = document.getElementById("middle_name");
    let lastName = document.getElementById("last_name");

    if (firstName.value == middleName.value && middleName.value == lastName.value) {
        event.preventDefault();
        alert("First, Last and Middle names can't all be the same.")
        firstName.setAttribute("class", "form-control is-invalid");
        middleName.setAttribute("class", "form-control is-invalid");
        lastName.setAttribute("class", "form-control is-invalid");
    }
}