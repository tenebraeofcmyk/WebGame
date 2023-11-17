window.onload = (event) => {
    console.log("page is fully loaded");

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
            "placeholder",
            "placeholder",

        ]
    },
    continueSearch: {
        lines: [
            "placeholder",
            "placeholder",

        ]

    },
};

let currentChapter = "start";
let torchIcon;

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


function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "start":
            console.log('Switch case: start');
            currentChapter = "investigateWarm";
            break;
        case "investigateWarm":
            console.log('Switch case: investigateWarm');
            // Move to the next chapter or perform other logic
            torchIcon = document.getElementById('torchIcon');
            torchIcon.style.display = 'block';
            currentChapter = "keepMoving";
            break;
        case "keepMoving":
            console.log('Switch case:keepMoving');
            break;
        // Add more cases as needed
    }

    // Remove the event listener after the click
    document.getElementById('nextButton').removeEventListener('click', nextChapter);

    // Display the next chapter
    displayChapter();
}
displayChapter();

document.getElementById('nextButton').addEventListener('click', nextChapter);


};
