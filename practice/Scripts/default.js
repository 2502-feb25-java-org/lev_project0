function storeValue() {
    let elementId = event.target.id;
    let element = document.getElementById(elementId);
    if (element.type == "radio")
        localStorage.setItem(element.name, elementId);
    else
        localStorage.setItem(elementId, element.value);
}

function loadValue(elementId) {
    let element = document.getElementById(elementId);
    if (element.type == "radio")
        loadRadios(element.name);
    else
        element.value = localStorage.getItem(elementId);
}

function reloadValues() {
    loadValue("first_name");
    loadValue("last_name");
    loadValue("male");
    loadValue("female");
    loadValue("other");
    loadValue("age");
    loadValue("phone");
    loadValue("email");
}

function loadRadios(elementName) {
    debugger;
    let radios = document.getElementsByName(elementName);
    //console.log(radios);
    let storedValue = localStorage.getItem(elementName);
    for (let index = 0; index < radios.length; index++) {
        if (radios[index].id == storedValue) {
            radios[index].value = "On";

        }
        else {
            radios[index].value = "Off";
            alert(radios[index].value);
        }
    }
}