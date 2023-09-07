// function convertToFar() {
//     const celsiusInput = document.getElementById("celsiusInput").value;
//     const result = document.getElementById("result");

//     if (!celsiusInput) {
//         result.innerText = "Please enter a temperature in Celsius.";
//         return;
//     }

//     const celsius = parseFloat(celsiusInput);
//     const fahrenheit = (celsius * 9/5) + 32;

//     result.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
// }
const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}