function fetchDataFromGoogleSheets() {
    // Fetch data from Google Sheets using an API or another method
    fetch('https://script.google.com/a/macros/rmkec.ac.in/s/AKfycbyXJRwfGdJpaX4WSFWWqwOpG-02UPZ3USV0MBp528tagcEYe2Rr3cmJ3DaFJjeJ9dVi/exec') // Replace with your Google Apps Script URL
        .then(response => response.json())
        .then(data => {
            // Extract the latest values from the fetched data
            const latestVoltage = data[data.length - 2]['Voltage'];
            const latestCurrent = data[data.length - 2]['Current'];
            const latestPower = data[data.length - 1]['Power'];
            const latestEnergy = data[data.length - 1]['Energy'];

            // Update the content on the page
            document.getElementById('voltage').textContent = 'Voltage: ' + latestVoltage + ' Volts';
            document.getElementById('current').textContent = 'Current: ' + latestCurrent + ' Amperes';
            document.getElementById('power').textContent = 'Power: ' + latestPower + ' Watts';
            document.getElementById('energy').textContent = 'Energy: ' + latestEnergy + ' Joules';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Fetch and display data when the page loads
fetchDataFromGoogleSheets();

// Update data every 5 seconds (5000 milliseconds)
setInterval(fetchDataFromGoogleSheets, 5000);
