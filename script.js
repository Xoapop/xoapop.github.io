const text = "Prasan";
const textElement = document.getElementById("text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 300); // Adjust typing speed
    }
}

window.onload = typeWriter;
