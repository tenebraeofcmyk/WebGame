const story = [
    {
        title: "You wake in a dim room....",
        lines: [
            "There are subtle shapes of furniture covered in sheets not far from the walls...",
            "You push yourself off of the floor, and you feel the cold bitterness of a stone floor...",
            "The cobbles beneath you make standing hard...",
            "Fumbling along the walls, your hand brushes against something warm..."
        ]
    },
    {
        title:"Warm",
        lines:[
        "You realize the fabric is fur lining the walls...",
        "You follow the fur.",
        "The fur ends.",
       "Your hand goes back to the fur, you are confused by its warmth...",
       "You realize the fur is a part of a hanging deer, still warm from the hunt.",
        "You begin to hear the dripping of the blood onto the floor.",
       "Fear courses through you, you are alone in this room with the dead deer.",
        "Panicked, you quickly move to the other side of the room to try to find a door."
        ]
    }

    // Add more objects to extend the story
];

let currentChapterIndex = 0;

function displayChapter() {
    const storyContainer = document.getElementById('story-container');
    const chapter = story[currentChapterIndex];

    const chapterElement = document.createElement('div');
    chapterElement.innerHTML = `<p class="lead my-3">${chapter.title}</p>`;

    chapter.lines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.classList.add('lead', 'my-3');
        lineElement.textContent = line;
        chapterElement.appendChild(lineElement);
    });

    storyContainer.innerHTML = '';
    storyContainer.appendChild(chapterElement);
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextChapter);


function nextChapter() {
    currentChapterIndex++;

    if (currentChapterIndex === 1) {
        // Show torch icon after chapter one
        const torchIcon = document.getElementById('torch-icon');
        torchIcon.style.display = 'block';
    }

    if (currentChapterIndex < story.length) {
        displayChapter();
    } else {
        // Display some message or perform an action when the story ends
 //       alert('The story has ended!');
    }
}

function pickUpTorch() {
    // You can add logic here for what happens when the user picks up the torch
    torchIcon.style.display = 'block';

}

// Display the first chapter initially
displayChapter();
