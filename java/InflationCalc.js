// Function to calculate inflation-adjusted value
function calculateInflation() {
    const initialAmount = parseFloat(document.getElementById("initialAmount").value);
    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    // Mock data for inflation rates
    const inflationRates = {
        2020: 1.2,
        2021: 4.7,
        2022: 8.0,
        2023: 4.9,
    };

    let adjustedAmount = initialAmount;

    if (startYear >= endYear) {
        document.getElementById("result").innerText = "Please ensure the start year is before the end year.";
        return;
    }

    for (let year = startYear; year < endYear; year++) {
        const rate = inflationRates[year] || 2.5; // Default inflation rate if data is missing
        adjustedAmount += (adjustedAmount * rate) / 100;
    }

    document.getElementById("result").innerText =
        `The value of $${initialAmount.toFixed(2)} in ${startYear} is approximately $${adjustedAmount.toFixed(2)} in ${endYear}.`;
}
