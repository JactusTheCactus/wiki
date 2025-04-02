document.addEventListener("DOMContentLoaded", function () {
    // Get the JSON data from the script tag
    const jsonDataElement = document.getElementById("json-data");
    if (jsonDataElement) {
        try {
            const jsonData = JSON.parse(jsonDataElement.textContent);

            // Output the data to the HTML
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
<h1>${jsonData.name} ${jsonData.rank}</h1>
<h3><i>"${jsonData.epithet}"</i></h3>
<h2>The ${jsonData.animal} ${jsonData.alignment} of ${jsonData.aspect}</h2>
<ul>
  <li><b>Armour Colour:</b> ${jsonData.colour}</li>
  <li><b>Weapon:</b> ${jsonData.weapon}</li>
  <li><b>Power:</b> ${jsonData.power}</li>
  <li><b>Species:</b> ${jsonData.species}</li>
</ul>
<div>${jsonData.description}</div>
`;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});