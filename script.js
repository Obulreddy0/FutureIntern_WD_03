document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('temperatureInput').value);
    const selectedUnit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    // Validate input is a number
    if (isNaN(inputTemp)) {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }

    let result;

    // Conversion logic
    if (selectedUnit === 'Celsius') {
        result = `${inputTemp}°C = ${(inputTemp * 9/5 + 32).toFixed(2)}°F = ${(inputTemp + 273.15).toFixed(2)}K`;
    } else if (selectedUnit === 'Fahrenheit') {
        result = `${inputTemp}°F = ${((inputTemp - 32) * 5/9).toFixed(2)}°C = ${(((inputTemp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (selectedUnit === 'Kelvin') {
        result = `${inputTemp}K = ${(inputTemp - 273.15).toFixed(2)}°C = ${((inputTemp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    resultDiv.innerHTML = result;
});
