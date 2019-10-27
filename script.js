const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const random = document.querySelector(".buttonRand");

// create gradient affect on the web page
function setGradient() {
    let body = document.getElementById("gradient");
    let css = document.querySelector("h3");

    body.style.background = "linear-gradient(to right, " 
        + color1.value + ", " + color2.value + ")";
    
        css.textContent = body.style.background + ";";
}

// selects a random color in hexadecimal and updates the web page with selected colors
function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
});