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


const story = {
    bedroomFirst: {
        lines: [
            "You go through the door immediately before you, not meeting resistance when you turn the doorknob.",
            "This room, like before, is filled with furniture, all covered in white sheets, but you can see a semblance of a vanity, bed, and even another door in the back of the room. The light is filtered, but it is enough to see clearly.",
        ]
    },
    searchDrawers: {
        lines: [
            "You go to the vanity and search the drawers, in case of small wealthy trinkets like jewelry.",
            "There is nothing in this room."
        ]
    },
    bedroomsMisc: {
        lines: [

            "You continue to check the other rooms, going in and out of each door and finding a continued stream of beds, tables, bookshelves, vanities, and chairs.",
            "In one of the last rooms, there is a stack of boxes on top of the sheets draping a small table.",
            "You find this odd and choose to inspect these boxes."
        ]
    },
    necklaceBox: {
        lines: [
            "You open this box and find a necklace with a jewel in the shape of a heart.",
            "It is bright and clear, a diamond."
        ]
    },
    clutterBox: {
        lines: [
            "You see the box open up to clutter, cheap wires and other pieces.",
            "At the bottom is a fine locket, gilded gold with engraved leaves and vines.",
            "You try to open the locket, but cannot."
        ]
    },
    necklacePearls: {
        lines: [
            "You solve the puzzle and gain three necklaces crafted with fine pearls."
        ]
    },
    leaveRoom: {
        lines: [
            "You leave the rooms."
        ]
    },
    lastBox: {
        lines: [
            "You reach out to open the second box."
        ]
    },
    puzzleCorrect: {
        lines: [
            "You hear the box open up. You got the puzzle correctly. You take the jewels and necklace you find in the open box."
        ]
    }
}

let currentChapter = "bedroomFirst";


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

const buttonContainer = document.getElementById("chamberButtonContainer1");

document.getElementById("searchVanityB").addEventListener('click', searchChamber);
document.getElementById("moveOnB").addEventListener('click', searchMoreRooms);

const buttonContainer2 = document.getElementById("chamberButtonContainer2");

document.getElementById("nextBoxB").addEventListener('click', openBox);
document.getElementById("necklaceBoxB").addEventListener('click', necklaceBox);

const boxPuzzleContainer = document.getElementById("boxPuzzleContainer");
const exitContainer = document.getElementById("exitContainer");
document.getElementById("exitButtonB").addEventListener('click', exitChambers);


function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "bedroomFirst":

            nextButton.style.display = "none";
            buttonContainer.style.display = "block";
            break;
        case "bedroomsMisc":
            buttonContainer2.style.display = "block";
            nextButton.style.display = "none";
            break;
        case "searchDrawers":
            currentChapter = "bedroomsMisc";
            buttonContainer2.style.display = "block";
            nextButton.style.display = "none";
            break;
        case "clutterBox":
            nextButton.style.display = "none";
            boxPuzzleContainer.style.display = "block";
            exitContainer.style.display = "block";
            buttonContainer2.style.display = "none";
            buttonContainer.style.display = "none";
            break;
        case "necklaceBox":
            currentChapter = "lastBox";
            buttonContainer2.style.display = "none";
            nextButton.style.display = "block";
            exitContainer.style.display = "block";

            break;
           
        case "lastBox":
            currentChapter = "clutterBox";
            break;
        case "necklacePearls":
            currentChapter = "leaveRoom";
            boxPuzzleContainer.style.display = "none";
            nextButton.style.display = "block";
            break;

        case "leaveRoom":
            exitChambers();
            break;


        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}

function searchChamber() {
    currentChapter = "searchDrawers";
    nextButton.style.display = "block";
    buttonContainer.style.display = "none";
    displayChapter();

}
function searchMoreRooms() {
    currentChapter = "bedroomsMisc";
    buttonContainer2.style.display = "block";
    buttonContainer.style.display = "none";
    nextButton.style.display = "none";
    displayChapter();
}

function openBox() {
    currentChapter = "clutterBox";
    nextButton.style.display = "none";
    boxPuzzleContainer.style.display = "block";
    buttonContainer2.style.display = "none";
    buttonContainer.style.display = "none";
    displayChapter();

}
function necklaceBox() {
    currentChapter = "necklaceBox";
    buttonContainer.style.display = "none";
    nextButton.style.display = "block";
    buttonContainer2.style.display = "none";
    localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
    updateCorrectCountJewel();
    displayChapter();

}

function exitChambers() {
    window.location.href = "courtyard.html";

}

function updateCorrectCountJewel() {
    document.getElementById('correctCountJewel').textContent = correctAnswersJewel;
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

//document.addEventListener("DOMContentLoaded", function () {
    const words = ["apothecary", "courtyard", "cobblestone", "flintstone", "riddles"];
    const unscrambledWord = pickRandomWord(words);
    const scrambledWord = scrambleWord(unscrambledWord);

    const puzzleContainer = document.getElementById("puzzle-container");
    const submitButton = document.getElementById("submit-button");

    puzzleContainer.textContent = scrambledWord;

    submitButton.addEventListener("click", function () {
        const userInput = document.getElementById("user-input").value.toLowerCase();

        if (userInput === unscrambledWord) {
           // alert("You hear the box open up. You got the puzzle correctly. You take the jewels and necklace you find in the open box.");
            // addToInventory("jewels");
            // addToInventory("necklace");
            correctAnswersJewel++;
            localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
            updateCorrectCountJewel();
            currentChapter = "necklacePearls";
            boxPuzzleContainer.style.display = "none";
            nextButton.style.display = "block";
            displayChapter();

        } else {
            alert("Incorrect! Try again.");
        }
    });


    function scrambleWord(word) {
        return word.split("").sort(() => Math.random() - 0.5).join("");
    }

    function pickRandomWord(wordList) {
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    function addToInventory(item) {
        const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
        inventory.push(item);
        localStorage.setItem("inventory", JSON.stringify(inventory));
    }
//});