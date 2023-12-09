let count = 0;
const button = document.getElementById("traffic-light");
const colors = ["red", "yellow", "green"];
function changeColor() {
    button.style.backgroundColor = colors[count];
    count = (count + 1) % colors.length;
}  
setInterval(changeColor, 10000);