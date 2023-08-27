const question1= "What is a real html tag?";

const q1ans1 = "<html>";
const q1ans2 = "<horse>";

let currentQuestion = document.getElementById("questionElement");

function replaceText() {
    var element = document.getElementById("questionElement");

    // Step 3: Use JavaScript to replace the text content of the selected element.
    element.textContent = question1;
}