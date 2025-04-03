document.addEventListener("DOMContentLoaded", function () {
    // Get the JSON data from the script tag
    const jsonDataElement = document.getElementById("json-data");
    if (jsonDataElement) {
        try {
            const jsonData = JSON.parse(jsonDataElement.textContent);

            // Output the data to the HTML
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
${jsonData.name ? `<h1>${[jsonData.name,jsonData.rank].filter(Boolean).join(' ')}</h1>` : ''}
${jsonData.epithet ? `<h3><i>"${jsonData.epithet}"</i></h3>` : ''}
${`<h2>The ${[jsonData.animal,jsonData.alignment].filter(Boolean).join(' ')}${jsonData.aspect ? ` of ${jsonData.aspect}` : ''}</h2>`}
${(jsonData.colour || jsonData.weapon || jsonData.power || jsonData.species) ?
`
<ul>
  ${jsonData.colour ? `<li><b>Armour Colour:</b> ${jsonData.colour}</li>` : ''}
  ${jsonData.weapon ? `<li><b>Weapon:</b> ${jsonData.weapon}</li>` : ''}
  ${jsonData.power ? `<li><b>Power:</b> ${jsonData.power}</li>` : ''}
  ${jsonData.species ? `<li><b>Species:</b> ${jsonData.species}</li>` : ''}
</ul>
` : ''}
${jsonData.description ? `<div>${jsonData.description}</div>` : ''}
`;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});