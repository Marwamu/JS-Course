var ageButton = document.getElementById('bt-age');
var printage = document.getElementById('print-age');
var yearInput = document.getElementById('input-year');
var errorMessage = document.getElementById('error');

// var year = 1998;
// var age = calc(year);
// console.log(age);
ageButton.addEventListener('click', () => {
    console.log(yearInput.value);
    if (yearInput.value == '' || yearInput.value == '0') {
        console.log(errorMessage);
        errorMessage.style.display = 'block';
    }
    else {
        const age = 2023 - yearInput.value;
        // console.log(age);
        printage.innerHTML = age;
        ageButton.style.backgroundColor = '#0000ff';
        ageButton.style.color = '#ffff';
        errorMessage.style.display = 'none';
    }

})
