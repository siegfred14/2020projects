let selectEl = document.querySelector('#select');
selectEl.addEventListener('change', function name(params) {
    let degreeTypeEl = document.querySelector('#degree-type');
    degreeTypeEl.innerText = selectEl.value;
    //change temperture in 'celcius' to farenheit
    let requiredEl = document.getElementById('req-degree');
    let selectedText = selectEl.options[selectEl.selectedIndex].innerText;

    if (selectedText === "Celcius") {
        requiredEl.innerText = "to Farenheit"
    }
    if (selectedText === "Farenheit") {
        requiredEl.innerText = "to Celcius"
    }
})

//convert button

let convertButton = document.querySelector('#convert');
convertButton.addEventListener('click', function name(params) {
    let selectedText = selectEl.options[selectEl.selectedIndex].innerText;  //to pick the inner text of select options
    //let selectedValue = selectEl.value; //to pick the value
    //alert("Selected Temperature: " + selectedText + " Value: " + selectedValue);

    let convertedEl = document.querySelector('#converted');
    let temperatureEl = document.querySelector('#temperature').value;
    let tempSign = document.getElementById('temp-sign');

    if (selectedText === "Celcius") {
        let toFarenheit = ((Number(temperatureEl) * 9) / 5) + 32;
        let result = parseFloat(toFarenheit).toFixed(1);
        convertedEl.innerText = `${result}`;
        tempSign.innerText = "F"
    }
    if (selectedText === "Farenheit") {
        let toCelcius = ((Number(temperatureEl) - 32) * 5) / 9;
        let result = parseFloat(toCelcius).toFixed(1);
        convertedEl.innerText = `${result}`;
        tempSign.innerText = "C";
    }

    /* let toCelcius = ((Number(temperatureEl) - 32) * 5) / 9;
    let toFarenheit = ((Number(temperatureEl) * 9) / 5) + 32; */

});