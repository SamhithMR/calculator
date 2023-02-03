let butotns = document.querySelectorAll(".button");
let display = document.querySelector("#display");
let temp = '';

// use calcualtore function for each user input 
butotns.forEach((x) => (x.addEventListener("click", () => calculator(x.value))))

// used eval function to calculate inputs
function calculator(x) {
    if (x == "ce") {
        // clear the input field
        temp = "";
    } else if (x == "Backspace") {
        // remove the last letter of the word using slice method
        temp = temp.toString().slice(0, -1);
    } else if (x == "=" || x == "Enter") {
        temp = eval(temp);
    } else {
        temp += x;
    }
    display.value = temp;
}

// shortcuts using keyboard events
document.addEventListener('keydown', (e) => {
    // validate the inputs
    let validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "Backspace", "ce", "Enter", "*", "%", "(", ")", "="];
    if (validKeys.includes(e.key)) {
        calculator(e.key);
    }
});