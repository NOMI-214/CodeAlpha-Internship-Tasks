function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) return;

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const result = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`;

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
    resultDiv.classList.add('show');
}
