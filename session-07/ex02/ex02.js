const divEl = document.createElement("div");
divEl.id = "container";
document.body.appendChild(divEl)

// paragraphs
for (let i = 1; i <= 5; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `Paragraph ${i}`;
    paragraph.classList.add("para");
    if (i % 2 === 1) {
        paragraph.style.color = "red";
    } else {
        paragraph.style.color = "blue";
    }
    divEl.appendChild(paragraph);

    // click listener
    paragraph.addEventListener("click", () => {
        console.log("paragraph was clicked!");

    })

}