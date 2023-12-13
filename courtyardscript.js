
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

// document.getElementById("goToNextRoom").style.display = "none";

// function goToNextRoom() {
//     window.location.href = 'courtyard.html';
// }





const story = {
    opening: {
        lines: [
            ""
        ]
    },

    // belowFountain: {
    //     lines: [
    //         "The left wall is only a railing, and down below is an open courtyard, a fountain flowing with water, surrounded by flowers that are in the turning to fall.",
    //         "Through the dry branches you see the ground below littered with the petals and leaves, and you realize this is where the rustling comes from."
    //     ]
    // },

    surveyYard: {
        lines: [
            "You finally make it over the wall, and now you can see the different points of the castle.",
            "The wall across the one you scaled only bears one set of double doors, twice your height. You can see that they used to be coated in varnish.",
            "The wall to your left is the tallest of all the walls, and there in the center is a large alcove with a drawbridge filling the space.",
            "There are two walls to your right."
        ]
    },
    seeDoors: {
        lines: [
            "You realize the five-sided castle is poorly protected at the back walls, where the walls on the right—the back of the castle--open into the stables and gardens. There is a likely a labyrinth with lots of secrets.",
            "When you turn around, the wall you scaled down is lined with doors tucked away in the overhang.",
            "These doors likely lead to a variety of chambers."
        ]
    }

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

const buttonContainer = document.getElementById("doorButtonContainer");

document.getElementById("doorSleepingB").addEventListener('click', sleepingChamberdoor);
document.getElementById("doorKitchenB").addEventListener('click', kitchenDoor);
document.getElementById("doorStablesB").addEventListener('click', stableDoor);
document.getElementById("doorlabB").addEventListener('click', labyrinthDoor);

document.getElementById("doorArmoryB").addEventListener('click', armoryDoor);
document.getElementById("drawbridgeB").addEventListener('click', drawbridgeDoor);




function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "opening":
            //console.log('Switch case: belowFountain');
            nextButton.style.display = "block";
            currentChapter = "surveyYard";
            break;
        case "surveyYard":
            currentChapter = "seeDoors";
            buttonContainer.style.display = "block";
            nextButton.style.display = "none";
            break;

        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
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

function armoryDoor() {
    window.location.href = "armory.html";

}
function throneRoomDoor() {
    window.location.href = "throne-room.html";

}
function drawbridgeDoor() {
    window.location.href = "drawbridge.html";
}

function healerRoom () {
    window.location.href="healersRoom.html";
}

//Show the page to the Healer's Room only when the journal is in local storage
document.getElementById("journalreadB").addEventListener('click', healerRoom );
document.getElementById("doorThroneB").addEventListener('click', throneRoomDoor );

document.addEventListener("DOMContentLoaded", function () {
    // Check if the specific ID is present in local storage
    var specificId = localStorage.getItem("correctCountJournal");

    if (specificId === "correctCountJournal") {
        // If the specific ID is present, show the div
        document.getElementById("journalread").classList.remove("hidden");
        // document.getElementById("throneRoomB").classList.remove("hidden");

    }
});


function addToInventory(item) {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
   inventory.push(item);     localStorage.setItem("inventory", JSON.stringify(inventory));
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
}

