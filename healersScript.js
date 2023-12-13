
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
    lookClue: {
        lines: [
            "You decide to flip through the pages of the diary, in hopes if there are anymore clues to why you lost your memory.",
            "One particular entry catches your eye."
        ]
    },
    strangeEntry: {
        lines: [
            "It is strange to see how our staff has been slowly losing their pallor, despite the bright summer sun warming the fields this season. I watch servants cross paths, walking in the sun all day, squires working with the horses in the fields, and yet, they grow weaker everyday. Their skin becomes paler, and they are fatigued all day. I have approached our healer multiple times, but he says he is unable to provide an antidote. I worry that for the first time he has been this castle’s healer he rejects the idea of an antidote so easily. Does he know something we do not? Is he withholding from telling us there is no antidote? What is he hiding from us? Why is he hiding it from me and His Majesty?",
            "You realize you have not seen any place where a healer could work. You try to figure out where there could be a healer's room."
        ]
    },
    lookHealer: {
        lines: [
            "You keep reading the diary, looking for any directions or drawings.",
            "You find nothing in the diary that helps.",
            "You decide to instead try to search the castle grounds for the healer's room."
        ]
    },
    searchGrounds: {
        lines: [
            "You go search the grounds again and fail to see anything different.",
            "You remember you never found a staircase from the top floor to the bottom floor.",
            "If you can find the stairs, you might be able to find another room.",
            "You try to search for the stairs."
        ]
    },
    puzzleSuccess: {
        lines: [
            "When you succeed, the stairs lead you back to the room you started in."
        ]
    },
    puzzleFail: {
        lines: [
            "When you fail, you do not have anymore ideas for how to find the room.",
            "You check again."
        ]
    },
    backStairs: {
        lines: [
            "On the way back up the stairs, you pick up the torch you left when you left the dark room.",
            "You are now back in the room you awoke in.",
            "After relighting the torch, you try to find other torches to brighten the room."
        ]
    },

    pullSheets: {
        lines: [
            "While searching the room, you recall how last time the sheets looked to be covering furniture.",
            "You pull the sheets back."
        ]
    },
    findRoom: {
        lines: [
            "What is uncovered are tables lined with vials, potions, and a lots of other related equipment. Mortar-and-pestles are filled with a camel-brown powder, and waving the sheets back brings the same musky smell you smelled on the dead knights.",
            "You have found the healer's room."
        ]
    },

    confusionDrip: {
        lines: [
            "You are confused why you woke up in this room in the first place.",
            "You hear the dripping sounds from when you first woke up."
        ]
    },
    deerObserve: {
        lines: [
            "You see the deer hanging upside down in the back of the room again.",
            "You see a torch on the wall beside the deer. You light it."
        ]
    },
    memory: {
        lines: [
            "Seeing the deer fully tickles your memory.",
            " ",
            "The deer… I wanted to see if I could make myself an antidote…"
        ]
    },
    memoryDizzy: {
        lines: [
            "You remember hating being confined to a tower, all alone.",
            "You hated hearing the screams from the dungeon down below when the king asked you to interrogate prisoners.",
            "You wanted to be the one to call the shots, make the orders...",
            "You are becoming dizzy."

        ]
    },
    rememberSmell: {
        lines: [
            "You realize there is a musky smell in the room. The smell is intoxicating, growing stronger.",
            "You are remembering more and more details as the smell grows stronger."
        ]
    },
    poison: {
        lines: [
            " Working all day, all night, trying to sneak the poison into everyone's food.",
            "Hiding the powder during meals, melting the powder down and experimenting how to create more forms of the poison.",
            "Breathing in the fumes with every experiment, becoming dizzy from the darkness and the smells…"
        ]
    },
    realization: {
        lines: [
            "Just like now.",
            "You collapse and fall asleep.",
            "",
            "You remember one last thing: You were the healer that caused it all."
        ]
    },



    //Room 10 – Healer’s Room – Cannot access until Throne Room and Labyrinth are done.   

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

const buttonContainer = document.getElementById("journalRead");

document.getElementById("leaveB").addEventListener('click', courtyardExit);
document.getElementById("journalCluesB").addEventListener('click', journalRead);

const puzzleContainer = document.getElementById("boxPuzzleContainer");

const endTitle =document.getElementById("endTitle");




function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "opening":
            nextButton.style.display = "block";
            currentChapter = "lookClue";
            break;
        case "lookClue":
            currentChapter = "strangeEntry";
            buttonContainer.style.display = "block";
            nextButton.style.display = "none";
            break;

        case "lookHealer":
            currentChapter = "searchGrounds";
            buttonContainer.style.display = "none";
            nextButton.style.display = "block";
            break;
        case "searchGrounds":
            puzzleContainer.style.display = "block";
            nextButton.style.display = "none";
            break;

        case "puzzleFail":
            currentChapter = "searchGrounds";
            puzzleContainer.style.display = "block";
            nextButton.style.display = "none";
            break;
        case "puzzleSuccess":
            currentChapter = "backStairs";
            puzzleContainer.style.display = "none";
            nextButton.style.display = "block";
            break;
        case "backStairs":
            currentChapter = "pullSheets";
            break;
        case "pullSheets":
            currentChapter = "findRoom";
            break;
        case "findRoom":
            currentChapter = "confusionDrip"
            break;
        case "confusionDrip":
            currentChapter = "deerObserve";
            break;
        case "deerObserve":
            currentChapter = "memory";
            break;
        case "memory":
            currentChapter = "memoryDizzy";
            break;
        case "memoryDizzy":
            currentChapter = "rememberSmell";
            break;
        case "rememberSmell":
            currentChapter = "poison";
            break;
        case "poison":
            currentChapter = "realization";
            nextButton.style.display = "none";
            endTitle.style.display ="block";
            break;
        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}



const words = ["apothecary", "mystery", "nettles", "nighttime", "shadows"];
const unscrambledWord = pickRandomWord(words);
const scrambledWord = scrambleWord(unscrambledWord);

const puzzleBox = document.getElementById("puzzle-container");
const submitButton = document.getElementById("submit-button");

puzzleBox.textContent = scrambledWord;

submitButton.addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.toLowerCase();

    if (userInput === unscrambledWord) {

        correctAnswersCoins++;
        localStorage.setItem('correctAnswersCoins', correctAnswersCoins);
        updateCorrectCountCoins();

        currentChapter = "puzzleSuccess";
        boxPuzzleContainer.style.display = "none";
        nextButton.style.display = "block";
        displayChapter();

    } else {
        currentChapter = "puzzleFail";
        boxPuzzleContainer.style.display = "none";
        nextButton.style.display = "block";
        displayChapter();
    }
});


function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

function pickRandomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}



function courtyardExit() {
    window.location.href = "courtyard.html";
}

function journalRead() {
    currentChapter = "lookHealer";
    buttonContainer.style.display = "none";
    nextButton.style.display = "block";
    displayChapter();
}

function updateCorrectCountCoins() {
    document.getElementById('correctCountCoins').textContent = correctAnswersCoins;
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
