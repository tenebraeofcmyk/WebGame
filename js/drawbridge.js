let correctAnswersJewel = localStorage.getItem('correctAnswersJewel') || 0;
document.getElementById('correctCountJewel').textContent = correctAnswersJewel;
let correctAnswersFood = localStorage.getItem('correctAnswersFood') || 0;
document.getElementById('correctCountFood').textContent = correctAnswersFood;
let correctAnswersCoins = localStorage.getItem('correctAnswersCoins') || 0;
document.getElementById('correctCountCoins').textContent = correctAnswersCoins;
let correctAnswersTorch = localStorage.getItem('correctAnswersTorch') || 0;
document.getElementById('correctCountTorch').textContent = correctAnswersTorch;
let correctAnswersIronPick = localStorage.getItem('correctAnswersIronPick') || 0;
document.getElementById('correctCountIronPick').textContent = correctAnswersIronPick;
let correctAnswersJournal = localStorage.getItem('correctAnswersJournal') || 0;
document.getElementById('correctCountJournal').textContent = correctAnswersJournal;


const story = {
    opening: {
        lines: [
            ""
        ]
    },
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
    drawbridgeReturn: {
        lines: [
            "You rush back into the castle, and you try to shut the drawbridge."

        ]
    },
}

let currentChapter = "opening";

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

document.getElementById('nextButton').addEventListener('click', nextChapter);

const drawbridgeContainer = document.getElementById("drawbridgeContainer");
document.getElementById('startDrawbridgeB').addEventListener('click', nextChapter);

const leverContainer = document.getElementById("leverContainer");
document.getElementById('crankLeverB').addEventListener('click', nextChapter);

const leaveContainer = document.getElementById("leaveContainer");
document.getElementById('leaveCastleB').addEventListener('click', nextChapter);

const wolvesContainer = document.getElementById("wolvesContainer");
document.getElementById('encounterWolvesB').addEventListener('click', nextChapter);

const logicContainer = document.getElementById("returnContainer");
document.getElementById("drawbridgeReturnB").addEventListener('click', nextChapter);

//document.getElementById("logicContainerB").addEventListener('click', nextChapter);

function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "opening":
            currentChapter = "startDrawbridge";
            drawbridgeContainer.style.display = 'block';
            nextButton.style.display ="none";
            break;
        case "startDrawbridge":
            console.log('Switch case: startDrawbridge');
            nextButton.style.display = "none";
            drawbridgeContainer.style.display = 'none';
            startDrawbridgeB.style.display = "none";
            currentChapter = "crankLever"; 
            leverContainer.style.display = "block";
            break;
        case "crankLever":
            console.log('Switch case: crankLever');
            nextButton.style.display = "none";
            leverContainer.style.display = 'none';
            currentChapter = "leaveCastle"; 
            leaveContainer.style.display = "block";
            break;            
        case "leaveCastle":
            console.log('Switch case: leaveCastle');
            leaveContainer.style.display = 'none';
            nextButton.style.display = "none";
            leaveCastleB.style.display = "block";
            currentChapter = "encounterWolves";
            break;
        case "encounterWolves":
            console.log('Switch case: encounterWolves');
            wolvesContainer.style.display = 'none';
            nextButton.style.display = "none";
            drawbridgeReturnB.style.display = "block";
            currentChapter = "drawbridgeReturn";
            break;
        case "drawbridgeReturn":
            console.log('Switch case: drawbridgeReturn');
            logicContainer.style.display = 'block';
            nextButton.style.display = "none";
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
    logicContainer.style.display = 'block';
    displayChapter();
}

const puzzleContainer = document.getElementById("puzzle-container");
const submitButton = document.getElementById("submit-button");


// Logic Puzzle
function logicPuzzle() {

    // Initial Display
    document.getElementById("result").innerHTML = '';
    document.getElementById("drawbridgePuzzleB").style.display = "none";
    document.getElementById("userAnswer").value = '3';
    document.getElementById("enterCourtyard").style.display = "none";

    // Answer    
    const correctAnswerDrawbridge = 3;

    // Problem and userInput visible
    document.getElementById("problem").innerHTML = `There are two wolves in front of a wolf, two wolves behind a duck and a wolf in the middle. How many wolves are there?`;
    document.getElementById("userInput").style.display = "block";

    // Check  answer when the user submits
    document.getElementById("submitB").onclick = function () {
        const userAnswer = document.getElementById("userAnswer").value;

        if (userAnswer == correctAnswerDrawbridge) {

            document.getElementById("result").innerHTML = "Correct! The drawbridge cranks open, and you rush inside before the wolves can bite you.";
            correctAnswersJewel++;

            // Save correct answer count to local storage
            localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
            updateCorrectCountJewel();

            document.getElementById("goToNextRoom").style.display = "block";
            document.getElementById("drawbridgePuzzle1B").style.display = "none";
        }

        else {
            document.getElementById("result").innerHTML = `The wolves get closer. You try again.`;
            document.getElementById("drawbridgePuzzle1B").style.display = "block";
        }

        // Hide the input field after submitting
        document.getElementById("problem").innerHTML = '';
        document.getElementById("userInput").style.display = "none";

        function updateCorrectCountJewel() {
            document.getElementById('correctCountJewel').textContent = correctAnswersJewel;
        }
    }
}

//Inventory updates
function updateCorrectCountFood() {
    document.getElementById('correctCountFood').textContent = correctAnswersFood;
}

function clearLocalStorage() {
    var confirmation = confirm("Restarting the game will erase all your inventory. Do you want to restart?");

    if (confirmation) {
        // User clicked "Yes"
        localStorage.clear();
        window.location.href = 'myindex.html';
    }
    else {
        // User clicked "No" or closed the dialog
    }

document.getElementById("goToNextRoom").style.display = "none";

function goToNextRoom() {
        window.location.href = 'courtyard.html';
    }

}