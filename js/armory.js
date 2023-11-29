window.onload = (event) => {
  console.log("page is fully loaded");

  const story = {
    start: {
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
};

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

function nextChapter(chapter) {
  console.log('Entering nextChapter. Current chapter:', chapter);

    switch (chapter) {
      case "start":
        // console.log('Switch case: start');
        buttonContainer.style.display = 'block';
        nextButton.style.display = "none";
        break;
      case "investigateDoor":
        console.log('Switch case: investigateDoor');
        continueDoor.style.display = 'block';
        nextButton.style.display = "none";
        currentChapter = "investigateDoor";
        break;
      case "enterArmory":
        console.log('Switch case:investigateDoor');
        currentChapter = "enterArmory";
        lightTorchButton.style.display = 'block';
        nextButton.style.display = "none";
        break;
      case "investigateArmor":
        console.log('Switch case:enterArmory');
        currentChapter = "investigateArmor";
        lightTorchButton.style.display = 'block';
        nextButton.style.display = "none";
        break;
    }
  }

  // Adding the click event listener correctly
  document.getElementById('nextButton').addEventListener('click', () => nextChapter(currentChapter));

  const buttonContainer = document.getElementById("buttonContainer");
  const continueDoor = document.getElementById("continueDoor");
  const lightTorchButton = document.getElementById("lightTorchButton");
  const nextButton = document.getElementById("nextButton");

    


  switch (currentChapter) {
    case "start":
        //console.log('Switch case: start');
        buttonContainer.style.display = 'block';
        nextButton.style.display = "none";
        break;
    case "investigateDoor":
        //  console.log('Switch case: investigateDoor');
        continueKick.style.display = 'block';
        nextButton.style.display = "none";
        currentChapter = "keepMoving";
        break;
    case "enterArmory":
        console.log('Switch case:keepMoving');
        currentChapter = "lightTorch";
        lightTorchButton.style.display = 'block';
        nextButton.style.display = "none";
        break;
    case "investigateArmor":
        console.log('Switch case:kickDoor');
        currentChapter = "lightTorch";
        lightTorchButton.style.display = 'block';
        nextButton.style.display = "none";
        break;
}


//Full "Fill the Stone" Puzzle
let roomId = 'room1';
let puzzleSize = 4; // puzzle size


// progressTracker.js
function hasCompletedRoom(roomId) {
  const completedRooms = JSON.parse(localStorage.getItem('completedRooms')) || [];
  return completedRooms.includes(roomId);
}

function markRoomAsCompleted(roomId) {
  const completedRooms = JSON.parse(localStorage.getItem('completedRooms')) || [];
  if (!completedRooms.includes(roomId)) {
    completedRooms.push(roomId);
    localStorage.setItem('completedRooms', JSON.stringify(completedRooms));
  }
}

function checkProgress() {
  if (hasCompletedRoom(roomId)) {
    alert("You remember the musky smell of blood and poison. You do not want to go back in.");
  } else {
    alert("You have a feeling this goes somewhere.");
  }
}

displayChapter();
};


// Define markRoomAsCompleted function
function markRoomAsCompleted(roomId) {
  const completedRooms = JSON.parse(localStorage.getItem('completedRooms')) || [];
  if (!completedRooms.includes(roomId)) {
    completedRooms.push(roomId);
    localStorage.setItem('completedRooms', JSON.stringify(completedRooms));
  }
}

// Initialize completedRooms in local storage if not set
const initialCompletedRooms = [];
localStorage.setItem('completedRooms', JSON.stringify(initialCompletedRooms));

// Function to submit the answer
function submitAnswer() {
  const answer = document.getElementById("answerInput").value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const correctAnswer = "111111"; // The correct answer

  if (answer === correctAnswer) {
    alert("The stones shudder as the door to the armory opens. You walk in.");
    // Mark the room as completed
    const roomId = 'room1'; // Change this identifier for each room
    markRoomAsCompleted(roomId);
  } else {
    alert("The wall does not move. You try again.");
  }
}

function initializePuzzle() {
    const puzzleSize = 4;
    lights = Array.from({ length: puzzleSize }, () => Array(puzzleSize).fill(true));

  // Randomly toggle some lights initially
  for (let i = 0; i < puzzleSize * puzzleSize; i++) {
    const row = Math.floor(Math.random() * puzzleSize);
    const col = Math.floor(Math.random() * puzzleSize);
    toggleLight(row, col);
  }

  renderPuzzle();
}

function toggleLight(row, col) {
  lights[row][col] = !lights[row][col];

  const neighbors = [
    { row: row - 1, col },
    { row: row + 1, col },
    { row, col: col - 1 },
    { row, col: col + 1 }
  ];

  neighbors.forEach(neighbor => {
    if (neighbor.row >= 0 && neighbor.row < puzzleSize && neighbor.col >= 0 && neighbor.col < puzzleSize) {
      lights[neighbor.row][neighbor.col] = !lights[neighbor.row][neighbor.col];
    }
  });
}

function renderPuzzle() {
  const puzzleContainer = document.getElementById("puzzle-container");
  puzzleContainer.innerHTML = "";

  for (let i = 0; i < puzzleSize; i++) {
    for (let j = 0; j < puzzleSize; j++) {
      const light = document.createElement("div");
      light.classList.add("light");
      light.style.backgroundColor = lights[i][j] ? "dark-gray" : "gray";
      light.onclick = () => {
        toggleLight(i, j);
        renderPuzzle();
      };
      puzzleContainer.appendChild(light);
    }
    const lineBreak = document.createElement("br");
    puzzleContainer.appendChild(lineBreak);
  }
}

function showPuzzle() {
  initializePuzzle();
  const puzzleContainer = document.getElementById("puzzle-container");
  puzzleContainer.style.display = "block";
}

// Initialize the puzzle when the page loads
window.onload = initializePuzzle;
// Mark the room as completed
    markRoomAsCompleted(roomId);
