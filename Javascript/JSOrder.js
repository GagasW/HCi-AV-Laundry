function SubmitOrder() {
	var tempName = document.getElementById("nameInput").value;
	var tempPhone = document.getElementById("phoneInput").value;
	var tempAddress = document.getElementById("addressInput").value;
	var tempQuantity = document.getElementById("quantityInput").value;
	
	/*var tempPromo = document.getElementById("promoInput").text;*/
	var e = document.getElementById("promoInput");
	var tempPromo = e.options[e.selectedIndex].value;

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
		alertMessage = "SUCCESS!\nYour orders will be processed soon!"
	}

	alert(alertMessage);
}

function containsNumber(n) {
	return /\d/.test(n);
}

function containsCharacter(n) {
	return /[a-z]/.test(n);
}