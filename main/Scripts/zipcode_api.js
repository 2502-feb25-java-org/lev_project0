function fillCityState() {
	let zip = document.getElementById("zipcode").value;
	let city = document.getElementById("city");
	let state = document.getElementById("state");

	const URL = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/" + zip + "?key=DEMOAPIKEY";
	let xtr = new XMLHttpRequest();
	let str;


	xtr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// parse JSON to Js Object
			str = JSON.parse(xtr.response);
			city.value = str.City;
			state.value = str.State;
		}
	}
	xtr.open("get", URL, true);
	xtr.send();
}