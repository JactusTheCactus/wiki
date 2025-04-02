document.addEventListener("DOMContentLoaded", function () {
    // Get the JSON data from the script tag
    const jsonDataElement = document.getElementById("json-data");
    if (jsonDataElement) {
        try {
            const jsonData = JSON.parse(jsonDataElement.textContent);

            // Output the data to the HTML
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `<h1>${jsonData.name}</h1>`;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});