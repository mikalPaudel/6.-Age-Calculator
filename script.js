let userInput = document.getElementById("date-input");
userInput.max = new Date().toISOString().split("T")[0];
document.getElementById("calculate-btn").addEventListener("click", function() { 
document.querySelector(".result").style.display = "block";
    let birthDate = new Date(userInput.value);
    if (userInput.value === "" || birthDate > new Date()) {
        alert("Please enter a valid date.");
        document.querySelector(".result").style.display = "none";
        return;
    }
    let today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    document.getElementById("age-output").innerText = `${ageYears} Years, ${ageMonths} Months, ${ageDays} Days`;

});
userInput.addEventListener("keydown", function(event) {
    event.preventDefault();
});
userInput.addEventListener("click", function() {
    this.showPicker();
});
