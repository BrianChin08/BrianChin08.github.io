function fancifymytext() {
    alert("Hello, World!");
    document.getElementById("Text").style.fontSize = "24pt";
}
function changeBold(radio) {
    alert("You selected: " + radio.value);
    const textArea = document.getElementById("Text");
    textArea.style.fontWeight = "bold"; // Make text bold
    textArea.style.color = "blue"; // Change text color to blue
    textArea.style.textDecoration = "underline"; // Underline the text
}
function changeUnbold(radio) {
    alert("You selected: " + radio.value);
    const textArea = document.getElementById("Text");
    textArea.style.fontWeight = "normal"; // Make text normal weight
}
function upperCase() {
    const textArea = document.getElementById("Text");
    textArea.value = textArea.value.toUpperCase(); // Make text uppercase
    const suffix = "-Moo";
    const words = textArea.value.split(" ");
    const updatedWords = words.map(word => word + suffix);
    textArea.value = updatedWords.join(" ");
}