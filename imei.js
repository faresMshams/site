document.getElementById('search-btn').addEventListener('click', function() {
    const imei = document.getElementById('imei-input').value.trim();
    if (imei.length === 15) {
        checkImei(imei);
    } else {
        alert('Please enter a valid 15-digit IMEI number.');
    }
});

function checkImei(imeiNumber) {
    const url = "https://api-citizens-prod-imei.gs-ef.com/ceirimeicheck/api/v1/imei/check";
    const headers = {
        "Accept-Language": "en",
        "Accept": "*/*",
        "clientType": "Android",
        "Content-Type": "application/json; charset=UTF-8",
        "User-Agent": "okhttp/5.0.0-alpha.10",
    };

    const payload = {
        "imeiNumber": [imeiNumber]
    };

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            let result = `
Model: ${data.model || 'N/A'}
Status: ${data.status || 'N/A'}
Active: ${data.active ? 'Yes' : 'No'}
Device IMEI Number: ${data.deviceImeiNumber || 'N/A'}
Amount: ${data.amount || 'N/A'}
            `;
            document.getElementById('result-output').textContent = result;
        } else {
            document.getElementById('result-output').textContent = 'No results found.';
        }
    })
    .catch(error => {
        document.getElementById('result-output').textContent = `Error: ${error.message}`;
    });
}
