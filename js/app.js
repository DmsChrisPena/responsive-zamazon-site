function clear() {

}

function register() {
	var firstname = document.getElementById("firstName").value;
	var lastname = document.getElementById("lastName").value;
	var birthdate = document.getElementById("birthDate").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	alert("Hello " + firstname + " " + lastname + "." + "We will respond shortly to your Email: " + email);

	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("birthDate").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";

}
