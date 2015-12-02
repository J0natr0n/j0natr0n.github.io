var color1 = document.querySelector(".olive");
var color2 = document.querySelector(".skyblue");
var color3 = document.querySelector(".salmon");
var color4 = document.querySelector(".burlywood");
var color5 = document.querySelector(".thistle");

var scheme = document.querySelector(".scheme");



color1.addEventListener("click", changeColor);
color2.addEventListener("click", changeColor);
color3.addEventListener("click", changeColor);
color4.addEventListener("click", changeColor);
color5.addEventListener("click", changeColor);

scheme.addEventListener("click", changeColor);

function handleClick(event) {
    if (event.target.tagName === "UL") {
        return;
}

    var swatch = event.target;
    var color = swatch.getAttribute("class");
    
    var theme = { 'color': color }
    changeColor(theme);
}

function pageLoad(event){
    var theme = JSON.parse(localStorage.getItem('theme'));
    changeColor(theme);
}




function changeColor(theme) {
    var body = document.querySelector("body");
    body.className = theme.color;
    var name = document.querySelector("span");
    name.textContent = theme.color;
}
