
var tempQuantity, tempPromo,e;
var disc = 0;

function SubmitOrder() {
	var tempName = document.getElementById("nameInput").value;
	var tempPhone = document.getElementById("phoneInput").value;
	var tempAddress = document.getElementById("addressInput").value;
	tempQuantity = document.getElementById("quantityInput").value;
	
	/*var tempPromo = document.getElementById("promoInput").text;*/
	e = document.getElementById("promoInput");
	tempPromo = e.options[e.selectedIndex].value;

	var alertMessage = "ORDER FAILED!\n";
	if(tempName == "" || tempPhone =="" || tempAddress == "" || tempQuantity =="") { //GK BOLEH KOSONG
		alertMessage += "Field(s) cannot be empty";
	
	}else if(tempName.length < 3) { //NAMA MIN 3 KARAKTER
		alertMessage += "Name needs to be at least 3 characters";
	
	}else if(containsNumber(tempName)) { //NAMA GK BOLEH ISI ANGKA
		alertMessage += "Names can't possibly contain numbers";
	
	}else if(tempQuantity < 1) { //QUANTITY MINIMAL 1
		alertMessage += "You need to at least order 1 service"

	} else if(tempAddress.length < 15) { //ADDRESS MINIMAL 15 KARAKTER
		alertMessage += "Address needs to be at least 15 characters";

	}else if(containsCharacter(tempPhone)) { //NO HP GK BOLEH AD HURUFNYA
		alertMessage += "Phone Number can't possible contains letters";

	}else if(!containsCharacter(tempAddress) || !containsNumber(tempAddress)) {
		alertMessage += "Address needs to contain letters and numbers";
	
	}else {
		alertMessage = "Order has been Queued!\nThank you for your orders!"
	}

	alert(alertMessage);
}

function containsNumber(n) {
	return /\d/.test(n);
}

function containsCharacter(n) {
	return /[a-z]/.test(n);
}

function DropdownMenu() {
	document.getElementById('dropdownContainer').classList.toggle("show");
}

function changePrice() {
	tempQuantity = document.getElementById("quantityInput").value;
	var totalPrice = tempQuantity * 6000;
	
	if(disc != 0) {
		totalPrice -= totalPrice *(disc/100);
	}
	
	document.getElementById('PriceText').innerHTML = "Total Price : " + totalPrice.toString();
	/*alert(tempQuantity);*/
	
	
}

function changeDiscount() {
	e = document.getElementById("promoInput");
	tempPromo = e.options[e.selectedIndex].value;
	
	
	if(tempPromo == "White Christmas Promo") {
		console.log("temp promo = white christmas");
		disc = 20; //CUMA CONTOH
	}else if(tempPromo == "New Year Promo") {
		disc = 30;
	}else {
		disc = 0;
	}
	document.getElementById('discount').innerHTML = disc + "% Discount with promo code " + tempPromo;
	console.log("selection triggered");
}

window.onclick = function(trigger){
	if (!trigger.target.matches('.dropbtn')) {
		var dropdownContainer = document.getElementById('dropdownContainer');
		if(dropdownContainer.classList.contains('show')){
			dropdownContainer.classList.remove('show');
		}
	}
}

