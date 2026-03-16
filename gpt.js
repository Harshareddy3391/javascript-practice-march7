// Get input elements
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

// Event listener for input box 1 - focus (turn yellow)
input1.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
});

// Event listener for input box 1 - blur (reset color)
input1.addEventListener("blur", function() {
    this.style.backgroundColor = "white";
});

// Event listener for input box 2 - blur (convert to uppercase)
input2.addEventListener("blur", function() {
    this.value = this.value.toUpperCase();
});


 