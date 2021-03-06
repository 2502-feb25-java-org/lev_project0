function fillCityState() {
	let zip = document.getElementById("zipcode").value;
	let city = document.getElementById("city");
	let state = document.getElementById("state");

	const URL = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/" + zip + "?key=SVOFFP3Q4V6Z5RTBMD72";
	let xtr = new XMLHttpRequest();
	let str;


	xtr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			str = JSON.parse(xtr.response);
			city.value = str.City;
			state.value = str.State;

			console.log(str);

			if (city.value == "undefined") {
				city.value = "";
				state.value ="";
			}

			let event = new Event('input', {
				'bubbles': true,
				'cancelable': true
			});
			
			city.dispatchEvent(event);
			state.dispatchEvent(event);
		}
	}
	xtr.open("get", URL, true);
	xtr.send();
}