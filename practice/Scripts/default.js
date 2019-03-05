document.addEventListener('DOMContentLoaded', () => {
    reloadValues();
    let inputTags = document.getElementsByTagName("input");
    for (let index = 0; index < inputTags.length; index++) {
        inputTags[index].addEventListener("change", () => {
            storeValue(inputTags[index]);
        });
    }
});

function reloadValues() {
    let inputTags = document.getElementsByTagName("input");
    for (let index = 0; index < inputTags.length; index++) {
        loadValue(inputTags[index]);
    };
}

function storeValue(element) {
    if (element.type == "radio")
        localStorage.setItem(element.name, element.id);
    else
        localStorage.setItem(element.id, element.value);
}

function loadValue(element) {
    if (element.type == "submit")
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