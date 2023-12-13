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


//script lines
let currentChapter = "opening";

// window.onload = (event) => {
//   console.log("page is fully loaded");


  const story = {
    opening: {
      lines: [
          ""
      ]
  },
    findArmory: {
      lines: [
        "You are interested in seeing if any damage happened to the knights of this castle, and you figure the armory could give clues to this.",
        "Getting closer to the drawbridge reveals a door in the side of the alcove’s walls."
      ]
  },
  investigateDoor: {
      lines: [
          "You realize that if you were not looking for a door you would not find it, it is hidden in the shadows.", 
          "The wooden door is coated gray, hiding it even more in the shadows of the cobble.", 
          "As you look closely, the paint is designed to look like the cobble, and there are knobs in the center of each shape.", 
          "You realize that to unlock the door, you need to press the buttons in the correct order."
      ]
  },
  enterArmory: {
      lines: [
        "Once you figure out the order, you walk into the room.",  
        "You see the walls are lined with maces, axes, broadswords, longswords, chains, and armor.",
        "You keep searching for any clues."
      ]
  },
  investigateArmor: {
      lines: [
          "In the corner, you see a pile of armor.",  
          "You inspect the armor and find it is filled with dead bodies, all of them collapsed on the floor.",
          "You are surprised they are not fully rotted yet.", 
          "When you check the knights for signs of damage, you smell a musky smell that makes you scrunch your nose. It almost smells like a poison.",
          "Concerned of their fate, you quickly turn out and leave the armory."
      ]
  }
  }

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
    
const findArmoryContainer = document.getElementById("findArmoryContainer");
document.getElementById('findArmoryContainerB').addEventListener('click', nextChapter);

const investigateDoorContainer = document.getElementById("investigateDoorContainer");
document.getElementById('investigateDoorContainerB').addEventListener('click', nextChapter);

const armoryPuzzleContainer = document.getElementById("armoryPuzzleContainer");
document.getElementById('armoryPuzzleContainerB').addEventListener('click', nextChapter);

const enterArmoryContainer = document.getElementById("enterArmoryContainer");
document.getElementById('enterArmoryContainerB').addEventListener('click', nextChapter);

const investigateArmorContainer = document.getElementById("investigateArmorContainer");
document.getElementById("investigateArmorContainerB").addEventListener('click', nextChapter);

document.getElementById("leaveArmory").style.display = "none";

    //const buttonContainer = document.getElementById("buttonContainer");
    //document.getElementById("playPuzzleButton").addEventListener('click', playPuzzle);


function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
      case "opening":
          currentChapter = "findArmory";
          findArmoryContainer.style.display = "block";
          nextButton.style.display ="none";
          break;
      case "findArmory":
          console.log('Switch case: findArmory');
          findArmoryContainer.style.display = "none";
          nextButton.style.display = "none";
          investigateDoorContainer.style.display = "block";
          currentChapter = "investigateDoor"; 
          break;
      case "investigateDoor":
          console.log('Switch case: investigateDoor');
          investigateDoorContainer.style.display = "none";
          nextButton.style.display = "none";
          armoryPuzzleContainer.style.display = "block";
          //currentChapter = "armoryPuzzle"; 
          break;
      case "armoryPuzzle":
          console.log('Switch case:armoryPuzzle');
          armoryPuzzleContainer.style.display = "none";
          nextButton.style.display = "none";
          enterArmoryContainer.style.display = "block";
          currentChapter = "enterArmory"; 
          break;
      case "enterArmory":
          console.log('Switch case: enterArmory');
          enterArmoryContainer.style.display = "none";
          nextButton.style.display = "none";
          investigateArmorContainer.style.display = "block";
          currentChapter = "investigateArmor"; 
          break;    
      case "investigateArmor":
          leaveArmory();
          break; 
    
      }
      document.getElementById('nextButton').removeEventListener('click', nextChapter);
      displayChapter();
    
      document.getElementById('nextButton').addEventListener('click', nextChapter);
    }

 
function leaveArmory() {
  window.location.href = 'courtyard.html';
}

// Local Storage
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

// Patterns and Sequence Puzzle
// Define a sequence of numbers
const sequence = [9, 12, 7, 10, 5, 8, 3, 6];

// Pick a random starting point for the sequence
const startIndex = Math.floor(Math.random() * (sequence.length - 2)); // Ensure at least two numbers are remaining

// Generate the puzzle by showing the first few numbers in the sequence
const puzzleNumbers = sequence.slice(startIndex, startIndex + 2);

// Display the puzzle to the user
const puzzleContainer = document.getElementById("armoryPuzzleContainer");
const submitButton = document.getElementById("submit-button");

puzzleContainer.textContent = `Puzzle: ${puzzleNumbers.join(', ')}`;

// Add event listener for the submit button
submitButton.addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.trim();

    // Check if the user input matches the next two numbers in the sequence
    const expectedNumbers = sequence.slice(startIndex + 2, startIndex + 4);
    
    if (
      userInput === expectedNumbers[0].toString() &&
      document.getElementById("user-input2").value.trim() === expectedNumbers[1].toString()
  ) {
      alert("The cobbles in front of you change shape. The door opens.");
      addToInventory("coins");
      correctAnswersCoins++;
      localStorage.setItem('correctAnswersCoins', correctAnswersCoins);
      updateCorrectCountCoin();
      currentChapter = "enterArmory";
      puzzleContainer.style.display = "none";
      nextButton.style.display = "block";
      displayChapter();
  } else {
      alert("The cobbles do not move, you try again.");
  }
  // Function to ...
  

// // Function to add an item to the inventory (if needed)
// function addToInventory(item) {
//     const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
//     inventory.push(item);
//     localStorage.setItem("inventory", JSON.stringify(inventory));
// }


// // Function to add an item to the inventory (if needed)
// function addToInventory(item) {
//     const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
//     inventory.push(item);
//     localStorage.setItem("inventory", JSON.stringify(inventory));
// }

 })
