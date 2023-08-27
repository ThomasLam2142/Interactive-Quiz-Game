const question1 = "Which one is a real html tag?";
const question2 = "Which one is a JavaScript Framework"
const question3 = "Which is a valid input for js?"

const q1ans1 = "<html>";
const q1ans2 = "<horse>";

const q2ans1 = "Kangaroo";
const q2ans2 = "React";

let questionNum = 0;



function replaceText() {
    var element = document.getElementById("questionElement");
    var btnOption1 = document.getElementById("optionbtn1");
    var btnOption2 = document.getElementById("optionbtn2");


    console.log(btnOption1);
    // Step 3: Use JavaScript to replace the text content of the selected element.
    if (questionNum  == 0) {
        element.textContent = question1;
        btnOption1.textContent = q1ans1;
        btnOption2.innerText = q1ans2;
    }
    if (questionNum  == 1) {
        element.textContent = question2;
    }
    if (questionNum  == 2) {
        element.textContent = question3;
    }

    questionNum += 1;

}