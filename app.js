window.onload = () => {
	let button = document.querySelector("#btn");

	
	button.addEventListener("click", BMICALCULATOR);
};
// main function to create bmi calculator
function BMICALCULATOR() {

	// take height value and parse to int
	let height = parseInt(document
			.querySelector("#height").value);

	// take weight value and parse to int
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");
		
	// when user does not enter height or wrong input
	if (height === "" || isNaN(height))
		result.innerHTML = "Height did not entered!";

	// when user does not enter weight or wrong input
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Weight did not entered";
	else {
		// inputs are given successfully and result will appear 

		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
            
			`Over Weight : <span>${bmi}</span>`;
            
	}
}
