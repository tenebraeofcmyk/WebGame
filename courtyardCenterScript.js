window.onload = (event) => {
    console.log("page is fully loaded");

    const story = {
        walkForward: {
            lines: [
                "With the grayish natural light, you no longer need the torch.",
                "Shaking it until there are no more flames, you concentrate on your left.",
                "The right is only a stone wall.",
                "You walk forward."]
        },
        belowFountain: {
            lines: [
                "The left wall is only a railing, and down below is an open courtyard, a fountain flowing with water, surrounded by flowers that are in the turning to fall.",
                "Through the dry branches you see the ground below littered with the petals and leaves, and you realize this is where the rustling comes from."
            ]
        },

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
        },
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

        nextBox: {
            lines: [
                "You choose to open the next box."
            ]
        },
        clutterBox:{
            lines:[ 
                "You see the box open up to clutter, cheap wires and other pieces.",
                "At the bottom is a fine locket, gilded gold with engraved leaves and vines.",
                "You try to open the locket, but cannot."
            ]
        }

    let currentChapter = "";


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

const torchIcon = document.getElementById("torchIcon");


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
            break;
        case "keepMoving":
            console.log('Switch case:keepMoving');
            //currentChapter="";

            break;
        case "continueSearch":
            console.log('Switch case:continueSearch');
            // currentChapter = "lightTorch";
            break;
        case "kickDoor":
            console.log('Switch case:kickDoor');
            currentChapter = "lightTorch";
            lightTorchButton.style.display = 'block';
            nextButton.style.display = "none";
            break;
        case "lightTorch":
            console.log('Switch to light Torch');
            currentChapter = "plaqueDoors";
            break;
        case "plaqueDoors":
            currentChapter = "plaqueRead";
            console.log('Switch to plaqueDoors');
            lightTorchButton.style.display = 'none';
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
    currentChapter = "continueSearch";
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
    torchIcon.style.display = 'block';
    lightTorchButton.style.display = 'none';
    nextButton.style.display = "block";
    nextChapter();
}
function plaqueDoors() {
    currentChapter = "plaqueDoors";
    displayChapter();
}
}