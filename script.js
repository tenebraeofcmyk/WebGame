
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
    start: {
        lines: [
            "There are subtle shapes of furniture covered in sheets not far from the walls...",
            "You push yourself off of the floor, and you feel the cold bitterness of a stone floor...",
            "The cobbles beneath you make standing hard...",
            "Fumbling along the walls, your hand brushes against something warm..."
        ]
    },
    investigateWarm: {
        lines: [
            "You realize the fabric is fur lining the walls...",
            "You follow the fur.",
            "The fur ends.",
            "Your hand goes back to the fur, you are confused by its warmth...",
            "You realize the fur is a part of a hanging deer, still warm from the hunt.",
            "You begin to hear the dripping of the blood onto the floor.",
            "Fear courses through you, you are alone in this room with the dead deer.",
            "Panicked, you quickly move to the other side of the room to try to find a door."
        ]
    },
    keepMoving: {
        lines: [
            "You continue to run your hands along the wall, hoping to find a knob.",
            "Your hand touches a handle.",
            "You try to push and pull, but the door does not budge.",
            "You feel around the handle for a key hole.",
        ]
    },
    lightTorch: {
        lines: [
            "You feel hardware on the wall that holds an unlit torch.",
            "You recall you have a flint."
        ]

    },
    plaqueDoors: {
        lines: [
            "Now that the room is lit, you see before a plaque and three doors.",
            "The handle you first found was the first of three."
        ]
    },
    kickDoor: {
        lines: [
            "When you try to ram into the door, you hear it clank, but it remains closed.",
            "Almost immediately after, you hear metal clang to the floor beside you.",
            "You feel around the floor in the dark for the metal that fell.",
            "You find it—it a is a plaque.",
            "You search the walls for a torch to read the plaque."]
    },
    plaqueRead: {
        lines: [
            "In this room of choices, beware the snare.",
            "Which door leads you free, without despair?",
            "Avoid the doom, take heed and be shrewd.",
            "Tell me, dear author, which door should be pursued?"
        ]
    },

    firstDoor: {
        lines: [
            "This is not the door.",
            "It opens to a long stairwell that gets colder as you go down the spiral of stairs.",
            "You find an empty dungeon with a whistling wind.",
            "You wonder why there is a wind coming from a dungeon.",
            "You investigate."
        ]
    },
    findPick: {
        lines: [
            "In one of the cells, you see a dim light.",
            "The cell is missing a rock cobble in the wall. This lets in a jagged hole of light.",
            "Below the light source you see an iron pick on the floor."
        ]
    },

    backUp: {
        lines: [
            "You go back up the stairs since there is no exit or interest."
        ]
    },

    secondDoor: {
        lines: [
            "This is not the door.",
            "When you rattle the door handle this time, you hear chains clinking behind the door, followed by the rustling of dogs that begin to howl and bark ferociously.",
            "Time to choose another door."
        ]
    },

    thirdDoor: {
        lines: [
            "This is the door.",
            "When you rattle the door, the age of the lock stops you from opening it the first time. You try one more time, and the hinges creak.",
            "You step through the doorway, leaving the darkness behind with your torch in hand, and you enter a gray-ish lit hall."
        ]
    }
}

let currentChapter = "start";


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

const buttonContainer = document.getElementById("buttonContainer");
document.getElementById("investigateWarmB").addEventListener('click', investigateWarm);
document.getElementById("keepMovingB").addEventListener('click', keepMoving);

const continueKick = document.getElementById("continueKick");
document.getElementById("continueSearchB").addEventListener('click', continueSearch);
document.getElementById("kickDoorB").addEventListener('click', kickDoor);

document.getElementById('lightTorchButton').addEventListener('click', lightTorch);

document.getElementById('takePickButton').addEventListener('click', takePick);

const doorChoice = document.getElementById("doorChoice");
document.getElementById("firstDoorB").addEventListener('click', selectFirstDoor);
document.getElementById("secondDoorB").addEventListener('click', selectSecondDoor);
document.getElementById("thirdDoorB").addEventListener('click', selectThirdDoor);


function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "start":
            //console.log('Switch case: start');
            buttonContainer.style.display = 'block';
            nextButton.style.display = "none";
            break;
        case "investigateWarm":
            //  console.log('Switch case: investigateWarm');
            continueKick.style.display = 'block';
            nextButton.style.display = "none";
            currentChapter = "keepMoving";
            break;
        case "keepMoving":
            console.log('Switch case:keepMoving');
            currentChapter = "lightTorch";
            lightTorchButton.style.display = 'block';
            nextButton.style.display = "none";

            break;
        case "kickDoor":
            console.log('Switch case:kickDoor');
            currentChapter = "lightTorch";
            lightTorchButton.style.display = 'block';
            nextButton.style.display = "none";
            break;
        case "lightTorch":
            console.log('Switch to light Torch');
            currentChapter = "plaqueRead";
            break;

        case "plaqueRead":
            console.log('Switch to plaqueRead');
            lightTorchButton.style.display = 'none';
            nextButton.style.display = "none";
            doorChoice.style.display = 'block';
            break;
        case "firstDoor":
            console.log('Switch to firstDoor');
            currentChapter = "findPick";
            nextButton.style.display = "none";
            takePickButton.style.display = "block";
            break;
        case "backUp":
            console.log('Switch to backUp');
            currentChapter = "plaqueRead";
            nextButton.style.display = "none";
            doorChoice.style.display = 'block';
            break;
        case "secondDoor":
            console.log('switch to plaqueRead');
            currentChapter = "plaqueRead";
            nextButton.style.display = "none";
            doorChoice.style.display = 'block';
            break;
        case "thirdDoor":
            nextButton.style.display ="block";
            window.location.href = "entrycourtyard.html";
            break;



        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}

function investigateWarm() {
    currentChapter = "investigateWarm";
    buttonContainer.style.display = 'none';
    nextButton.style.display = "block";
    displayChapter();
}
function keepMoving() {
    currentChapter = "keepMoving";
    continueKick.style.display = 'block';
    buttonContainer.style.display = 'none';
    displayChapter();
}
function continueSearch() {
    console.log('Function continueSearch ran');
    currentChapter = "lightTorch";
    lightTorchButton.style.display = 'block';
    nextButton.style.display = "none";
    buttonContainer.style.display = 'none';
    continueKick.style.display = 'none';
    displayChapter();
}

function kickDoor() {
    console.log("function kick Door ran");
    currentChapter = "kickDoor";
    nextButton.style.display = "block";
    continueKick.style.display = 'none';
    displayChapter();
}
function lightTorch() {
    console.log("function lightTorch ran");
    currentChapter = "lightTorch";
    // torchIcon.style.display = 'block';
    lightTorchButton.style.display = 'none';
    nextButton.style.display = "none";
    doorChoice.style.display = 'block';
    correctAnswersTorch++;

    // Save correct answer count to local storage
    localStorage.setItem('correctAnswersTorch', correctAnswersTorch);
    updateCorrectCountTorch();
    nextChapter();
}

function selectFirstDoor() {
    console.log("first door selected");
    currentChapter = "firstDoor";
    nextButton.style.display = "block";
    doorChoice.style.display = 'none';
    displayChapter();
}
function takePick() {
    console.log("you take the iron pick");
    takePickButton.style.display = "none";
    nextButton.style.display = "block";
    // ironPickIcon.style.display = 'block';
    currentChapter = "backUp";
    correctAnswersIronPick++;
    updateCorrectCountIronPick();
    displayChapter();
}

function selectSecondDoor() {
    console.log("second door selected");
   currentChapter = "secondDoor";
    doorChoice.style.display = 'none';
    nextButton.style.display = "block";
    displayChapter();
}

function selectThirdDoor() {
    console.log("third door selected");
    currentChapter = "thirdDoor";
    doorChoice.style.display = 'none';
    nextButton.style.display = "block";
    displayChapter();
}


function clearLocalStorage() {
    var confirmation = confirm("Restarting the game will erase all your inventory. Do you want to restart?");
    
    if (confirmation) {
        // User clicked "Yes"
        localStorage.clear();
        window.location.href = 'index.html'; 
    } 
    else {
        // User clicked "No" or closed the dialog
    } 
}




function updateCorrectCountTorch() {
    document.getElementById('correctCountTorch').textContent = correctAnswersTorch;
}

function updateCorrectCountIronPick() {
    document.getElementById('correctCountIronPick').textContent = correctAnswersIronPick;
}


// correctAnswersJewel++;

// // Save correct answer count to local storage
// localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
// updateCorrectCountJewel();
