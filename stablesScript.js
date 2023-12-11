// Load correct answer count from local storage on page load

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

    narrowWall: {
        lines: [
            "When you look to your right, there is a narrower wall than the others.",
            "You follow it."
        ]
    },
    smellHay: {
        lines: [
            "When you push through the doors to enter the stables, you smell hay and crud.",
            "You explore the area, and although there are smells that suggest living animals, you do not see any."
        ]
    },
    checkOutside: {
        lines: [
            "You want to check outside in case the animals are in the back pasture grazing.",
            "As you pass through the stables, you hear rustling behind you.",
            "When you turn around, there the noise stops before you can find the source."
        ]
    },
    openField: {
        lines: [
            "The stable opens into an open field, and sure enough, there are a couple horses.",
            "Once radiant and active, you notice these horses are showing ribs and do not seem well-exercised or cared for."
        ]
    },
    stubbornHorse: {
        lines: [
            "The horses do not seem to want to go inside and are troublesome and stubborn."
        ]
    },
    puzzleSuccess: {
        lines: [
            "The animals follow you back into the stables and seem happy to be inside and eat grain.",
            "While leading them in, you find a dusty jewel-studded harness.",
            "You tuck it into your bag."

        ]
    },
    puzzleFail: {
        lines: [
            "The horses do not want to follow you. Their ears go back and they snap at you when you get close.",
            "You retreat before you can get stepped on."
        ]
    }

}

// 	You decide to bring the animals inside. They are troublesome and stubborn.>>
// 	<<Insert Puzzle>>
// 	If user passes puzzle, then the animals comply and seem happy to be inside. You find a jewel-studded harness while bringing them in and keep it. You go back to the courtyard. 
// 	If you fail the puzzle, animals are mad at a new person and chase you out of the field. 

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

const buttonContainer = document.getElementById("stableDecision");

document.getElementById("leadInB").addEventListener('click', beginPuzzle);
document.getElementById("leaveB").addEventListener('click', exitStables);

const outsideButtons = document.getElementById("outsideChoice");
document.getElementById("outsideB").addEventListener('click', goOutside);

const boxPuzzleContainer = document.getElementById("boxPuzzleContainer");


function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "opening":
            currentChapter = "narrowWall";
            nextButton.style.display = "block";
            break;
        case "narrowWall":
            nextButton.style.display = "block";
            currentChapter = "smellHay";
            break;
        case "smellHay":
            currentChapter = "checkOutside";
            outsideButtons.style.display = "block";
            nextButton.style.display = "none";
            break;
        case "puzzleFail":
            exitStables();
            break;

        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}

function goOutside() {
    currentChapter = "openField";
    buttonContainer.style.display = "block";
    outsideButtons.style.display = "none";
    nextButton = "none";
    displayChapter();

}

function exitStables() {
    window.location.href = 'courtyard.html';
}


function beginPuzzle() {
    currentChapter = "stubbornHorse";
    boxPuzzleContainer.style.display = "block";
    buttonContainer.style.display = "none";
    displayChapter();
}

function sleepingChamberdoor() {
    window.location.href = 'sleepingChambers.html';
}

function kitchenDoor() {
    window.location.href = "kitchen.html";
}

function stableDoor() {
    window.location.href = "stables.html";
}

function labyrinthDoor() {
    window.location.href = "labyrinth.html";
}




// //Puzzle space
// if {
//     //Correct
//     currentChapter = "puzzleSuccess";
//     boxPuzzleContainer.style.display = "none";
//     nextButton.style.display = "block";
//     displayChapter();

// }

// else {
//     currentChapter = "puzzleFail";
//     boxPuzzleContainer.style.display = "none";
//     nextButton.style.display = "block";
//     displayChapter();
// }


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
}

