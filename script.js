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

    document.getElementById('lightTorchB').addEventListener('click', lightTorch);

    const torchIcon = document.getElementById("torchIcon");


    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "start":
                console.log('Switch case: start');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                currentChapter = "start";
                break;
            case "investigateWarm":
                console.log('Switch case: investigateWarm');
                continueKick.style.display='block';
                break;
            case "keepMoving":
                console.log('Switch case:keepMoving');

                break;
                case "lightTorch":
                    console.log('Switch to light Torch');
                    currentChapter="plaqueDoors";
                break;
            // Add more cases as needed
        }

        // Remove the event listener after the click
        document.getElementById('nextButton').removeEventListener('click', nextChapter);

        // Display the next chapter
        displayChapter();
    }
    document.getElementById('nextButton').addEventListener('click', nextChapter);

    function investigateWarm() {
        currentChapter = "investigateWarm";
        buttonContainer.style.display = 'none';
        nextButton.style.display = "block";
        displayChapter();
    }
    function keepMoving() {
        currentChapter ="keepMoving";
        continueKick.style.display='block';
        buttonContainer.style.display = 'none';
        displayChapter();
    }
    function continueSearch() {
        currentChapter ="continueSearch";
        lightTorchB.style.display ='block';
        displayChapter();
    }

    function kickDoor(){
        currentChapter="kickDoor";
        continueKick.style.display='none';
        lightTorchB.style.display ='block';
        displayChapter();
    }
    function lightTorch(){
        currentChapter="lightTorch";
        lightTorchB.style.display ='none';
        torchIcon.style.display='block';
        nextButton.style.display = "block";
        displayChapter();
    }
}