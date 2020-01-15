document.getElementById("contact-link").addEventListener("click", (e) => {
    document.getElementById("contact-modal").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", (e) => {
    document.getElementById("contact-modal").style.display = "none";
});




document.getElementById("JS").addEventListener("mouseover", (e) => {
    if (window.innerWidth < 768) {
        document.getElementById("JS").style.fontSize = "18px"; 
    } else {
        document.getElementById("JS").style.fontSize = "26px"; 
    }
document.getElementById("JS").innerHTML = "JS Syntax, DOM Manipulation, Fetch API/Ajax, JQuery, Local Storage";
});

        document.getElementById("JS").addEventListener("mouseout", (e) => {
            document.getElementById("JS").style.fontSize = "48px";
            document.getElementById("JS").innerHTML = "Javascript &#8250;&#8250; ";
        });


document.getElementById("basics").addEventListener("mouseover", (e) => {
    if (window.innerWidth < 768) {
        document.getElementById("basics").style.fontSize = "18px"; 
    } else {
        document.getElementById("basics").style.fontSize = "26px"; 
    }
    document.getElementById("basics").innerHTML = "Media Queries, CSS Styling, CSS Grid, Flex Box, Box Model, Display, Floats, Positioning, Semantic HTML, Bootstrap, SASS";
});

        document.getElementById("basics").addEventListener("mouseout", (e) => {
            document.getElementById("basics").style.fontSize = "48px";
            document.getElementById("basics").innerHTML = "HTML & CSS &#8250;&#8250; ";
        });



document.getElementById("more").addEventListener("mouseover", (e) => {
    if (window.innerWidth < 768) {
        document.getElementById("more").style.fontSize = "18px"; 
    } else {
        document.getElementById("more").style.fontSize = "26px"; 
    }
    document.getElementById("more").innerHTML = "Terminal/Git Basics, Github, Peer Reviews";
});

        document.getElementById("more").addEventListener("mouseout", (e) => {
            document.getElementById("more").style.fontSize = "48px";
            document.getElementById("more").innerHTML = "More &#8250;&#8250;";
        });
