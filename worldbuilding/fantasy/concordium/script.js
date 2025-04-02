document.addEventListener("DOMContentLoaded", function () {
    // Get the JSON data from the script tag
    const jsonDataElement = document.getElementById("json-data");
    if (jsonDataElement) {
        try {
            const jsonData = JSON.parse(jsonDataElement.textContent);

            // Output the data to the HTML
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `<h1>${jsonData.name} ${jsonData.rank}</h1><h2>The ${jsonData.colour} ${jsonData.animal} ${jsonData.alignment} of ${jsonData.aspect}</h2>`;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});

{
//weapon
//power
//species
//epithet
//description