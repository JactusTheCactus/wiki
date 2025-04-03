document.addEventListener("DOMContentLoaded", function () {
    // Get the JSON data from the script tag
    const jsonDataElement = document.getElementById("json-data");
    if (jsonDataElement) {
        try {
            const jsonData = JSON.parse(jsonDataElement.textContent);
            function sex() {
                const rankMap = {
                    "Imperatore": {"F":"Imperatora","M":"Imperator"},
                    "Venatorium":{"F":"Venatrix","M":"Venator"},
                    "Ferratorium":{"F":"Ferratrix","M":"Ferrator"},
                    "Dominum":{"F":"Domina","M":"Dominus"},
                    "Luminorium":{"F":"Luminora","M":"Luminor"},
                    "Exaltum":{"F":"Exalta","M":"Exaltus"},
                    "Bellatorium":{"F":"Bellatrix","M":"Bellator"}
                };
                if (rankMap[jsonData.rank]) {
                    return rankMap[jsonData.rank][jsonData.sex] || jsonData.rank;
                }
                return jsonData.rank;
            }
            jsonData.rank = sex()
            document.title = `${jsonData.aspect} | wiki`
            document.querySelector(".project-name").innerHTML = `${jsonData.name ? `${[jsonData.name, jsonData.rank].filter(Boolean).join('<br>')}` : ''}`
            document.querySelector(".project-tagline").innerHTML = `${jsonData.epithet ? `<i>"${jsonData.epithet}"</i><br>` : ''}The ${[jsonData.animal, jsonData.alignment].filter(Boolean).join(' ')}${jsonData.aspect ? ` of ${jsonData.aspect}` : ''}`
            // Output the data to the HTML
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
${`<h2></h2>`}
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