#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
    function propertiesChange() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
    propertiesChange();
}

function main() {
    let newParagraph = document.createElement("p");
    let paragraphContent = document.createTextNode("Welcome Holberton!");
    newParagraph.appendChild(paragraphContent);
    document.body.appendChild(newParagraph);


    let spookyButton = document.createElement("button");
    let spookyText = document.createTextNode("Spooky");
    spookyButton.appendChild(spookyText);
    document.body.appendChild(spookyButton);

    spookyButton.addEventListener("click", () => {
        let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    });

    let darkModeButton = document.createElement("button");
    let darkModeText = document.createTextNode("Dark Mode");
    darkModeButton.appendChild(darkModeText);
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", () => {
        let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    });

    let screamModeButton = document.createElement("button");
    let screamModeText = document.createTextNode("Scream Modee");
    screamModeButton.appendChild(screamModeText);
    document.body.appendChild(screamModeButton);

    screamModeButton.addEventListener("click", () => {
        let screamMode = changeMode(
            12,
            "normal",
            "lowercase",
            "white",
            "black"
        );
    });
}

main();
