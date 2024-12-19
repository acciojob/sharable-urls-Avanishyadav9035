// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const submitButton = document.getElementById("button");
const urlDisplay = document.getElementById("url");

submitButton.addEventListner('click',()=<{
	const name = encodeURIComponent.nameInput.value.trim();
	const year = encodeURIComponent.yearInput.value.trim();

let baseUrl = "https://localhost:8080/";
let queryString = [];
if (name) queryString.push(`name=${name}`)
if (year) queryString.push(`year=${year}`)
const updatedUrl = queryString.length ? `${baseUrl}?${queryString.join('&')}' : baseUrl;
 urlDisplay.textContent = updatedUrl;

})

