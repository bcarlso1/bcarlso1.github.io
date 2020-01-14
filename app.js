document.getElementById("contact-link").addEventListener("click", (e) => {
    document.getElementById("contact-modal").style.display = "block";
})

document.getElementById("close-modal").addEventListener("click", (e) => {
    document.getElementById("contact-modal").style.display = "none";
})

document.getElementById("JS").addEventListener("mouseover", (e) => {
    document.getElementById("JS").style.fontSize = "26px";
    document.getElementById("JS").innerHTML = "Experience with Chart JS";
})

document.getElementById("basics").addEventListener("mouseover", (e) => {
    document.getElementById("basics").style.fontSize = "26px";
    document.getElementById("basics").innerHTML = "The Basics";
})

document.getElementById("more").addEventListener("mouseover", (e) => {
    document.getElementById("more").style.fontSize = "26px";
    document.getElementById("more").innerHTML = "Github, SASS";
})

document.getElementById("JS").addEventListener("mouseout", (e) => {
    document.getElementById("JS").style.fontSize = "48px";
    document.getElementById("JS").innerHTML = "Javascript &#8250;&#8250; ";
})

document.getElementById("basics").addEventListener("mouseout", (e) => {
    document.getElementById("basics").style.fontSize = "48px";
    document.getElementById("basics").innerHTML = "HTML & CSS &#8250;&#8250; ";
})

document.getElementById("more").addEventListener("mouseout", (e) => {
    document.getElementById("more").style.fontSize = "48px";
    document.getElementById("more").innerHTML = "More &#8250;&#8250;";
})
