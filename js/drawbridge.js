window.onload = (event) => {
    console.log("page is fully loaded");

    const story = {
        startDrawbridge: {
            lines: [
                "You begin to realize that you have no memory of your whereabouts before waking up in this castle.",
                "You wonder if you will be able recall your memories if you leave the castle."
            ]
        },
        crankLever: {
            lines: [
                "You see there is a lever you need to crank if you will have any successful attempt to open the drawbridge."
            ]
        },
        leaveCastle: {
            lines: [
                "You succeed, the lever is smooth and pulls the gear so that you can now open the drawbridge.",
                "You step outside, and you are met with the same cloudy sky like in the courtyard.",
                "There is a large forest in front of you.",
            ]
        },
        encounterWolves: {
            lines: [
                "You step forward, trying to remember anything.",
                "As you move forward, red eyes appear in front of you in the shadows.",
                "You hear growls from the forest, growing closer each second.",
            ]

        },
        drawbridgePuzzle: {
            lines: [
                "You rush back into the castle, and you try to shut the drawbridge."

            ]
        },
    }

    let currentChapter = "startDrawbridge";

    function displayChapter() {
        console.log('Entering displayChapter. Current chapter:', currentChapter);
        const storyContainer = document.getElementById('scriptContainer');
        const chapter = story[currentChapter];

        const chapterElement = document.createElement('div');

        chapter.lines.forEach(line => {
            const lineElement = document.createElement('p');
            lineElement.classList.add('lead', 'my-3');
            lineElement.textContent = line;
            chapterElement.appendChild(lineElement);
        });
        storyContainer.innerHTML = '';
        storyContainer.appendChild(chapterElement);

    }

    const buttonContainer = document.getElementById("buttonContainer");

    document.getElementById('nextButton').addEventListener('click', nextChapter);
    document.getElementById('startDrawbridge').addEventListener('click', nextChapter);
    document.getElementById('crankLever').addEventListener('click', nextChapter);
    document.getElementById('leaveCastle').addEventListener('click', nextChapter);
    document.getElementById('encounterWolves').addEventListener('click', nextChapter);

    document.getElementById('drawbridgePuzzle').addEventListener('click', nextChapter);
    document.getElementById("drawbridgePuzzleB").addEventListener('click', drawbridgePuzzle);

   function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "startDrawbridge":
            //console.log('Switch case: startDrawbridge');
            buttonContainer.style.display = 'block';
            startDrawbridge.style.display = "block";
            drawbridgePuzzle.style.display = "none";
            currentChapter = "startDrawbridge";
            break;
        case "crankLever":
            //console.log('Switch case: crankLever');
            buttonContainer.style.display = 'block';
            crankLever.style.display = "block";
            drawbridgePuzzle.style.display = "none";
            currentChapter = "crankLever";
            break;
        case "leaveCastle":
            //console.log('Switch case: leaveCastle');
            buttonContainer.style.display = 'block';
            leaveCastle.style.display = "block";
            drawbridgePuzzle.style.display = "none";
            currentChapter = "leaveCastle";
            break;
        case "encounterWolves":
            //console.log('Switch case: encounterWolves');
            buttonContainer.style.display = 'block';
            encounterWolves.style.display = "block";
            drawbridgePuzzle.style.display = "none";
            currentChapter = "encounterWolves";
            break;
        case "drawbridgePuzzle":
            //console.log('Switch case: drawbridgePuzzle');
            buttonContainer.style.display = 'block';
            nextButton.style.display = "none";
            drawbridgePuzzle.style.display = "block";
            break;
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}


function drawbridgePuzzle() {
    currentChapter = "drawbridgePuzzle";
    buttonContainer.style.display = 'none';
    nextButton.style.display = "block";
    displayChapter();
    }

function drawbridgePuzzle() {

    //Initial Display
    document.getElementById("result").innerHTML = '';
    document.getElementById("drawbridgePuzzle1B").style.display = "none";
    document.getElementById("userAnswer").value='';
    document.getElementById("enterCourtyard").style.display = "none";

    //Equation    
    const correctAnswerdrawbridge = 3;
    
    //problem and userInput visible
    document.getElementById("problem").innerHTML = `There are 16 rows of hedges some are coverein vines and others are not.  If the rows with vines is 25% of the total, how many rows is that?`;
    document.getElementById("userInput").style.display = "block";

    // Check the answer when the user submits
    document.getElementById("submitBtn").onclick = function () {
        const userAnswer = document.getElementById("userAnswer").value;
    
        if (userAnswer == correctAnswerlabyrinth1) {
            
            document.getElementById("result").innerHTML = "Correct! You see a gap in the hedges to sneak thru and find a jewel!";
            correctAnswersJewel++;
            
            // Save correct answer count to local storage
            localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
            updateCorrectCountJewel();

            document.getElementById("goToNextRoom").style.display = "block";
            document.getElementById("labyrinthPuzzle1B").style.display = "none";
        } 

        else {
                document.getElementById("result").innerHTML = `Sorry, that is not correct, plase try again!`;
                document.getElementById("labyrinthPuzzle1B").style.display = "block";
        }

        // Hide the input field after submitting
        document.getElementById("problem").innerHTML = '';
        document.getElementById("userInput").style.display = "none";

        function updateCorrectCountJewel() {
            document.getElementById('correctCountJewel').textContent = correctAnswersJewel;
        }
        }  
    }

//logic puzzle
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    var correctAnswer = 3; // The correct answer to the puzzle

    if (userAnswer == correctAnswer) {
        document.getElementById('result').textContent = 'Bravo to you. You continue with your search for more answers.';
    } else {
        document.getElementById('result').textContent = 'The wolves get closer. You try again. ';
    }
}
}
