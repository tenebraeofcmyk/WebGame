window.onload = (event) => {
    console.log("page is fully loaded");

    const story = {
        walkForward: {
            lines: [
                "With the grayish natural light, you no longer need the torch.",
                "Shaking it until there are no more flames, you concentrate on your left.",
                "The right is only a stone wall.",
                "You walk forward."
            ]
        },
        belowFountain: {
            lines:[
                "The left wall is only a railing, and down below is an open courtyard, a fountain flowing with water, surrounded by flowers that are in the turning to fall.",
                "Through the dry branches you see the ground below littered with the petals and leaves, and you realize this is where the rustling comes from."]
            },
        realizeTreasure:{
            lines:[
                "You take a few more steps forward, and more of the castle comes into view.",
                "You see the grandeur of the castle, towers in each corner of the length of each wall, the high walls, the stained glass windows…",
                "With the grandeur of the castle, you realize there is likely a lot of wealth hidden in each of the different rooms.",
                "You want to find these trinkets."  
            ]  
        }
    }

    let currentChapter = "walkForward";


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
        console.log ("function kick Door ran");
        currentChapter = "kickDoor";
        nextButton.style.display = "block";
        continueKick.style.display = 'none';
        displayChapter();
    }
    function lightTorch() {
        console.log("function lightTorch ran");
        currentChapter="lightTorch";
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

// This is Christie's javascript

// Load correct answer count from local storage on page load
let correctAnswers = localStorage.getItem('correctAnswers') || 0;
document.getElementById('correctCount').textContent = correctAnswers;
document.getElementById("goToNextRoom").style.display = "none";

function goToNextRoom() {
    window.location.href = 'testnextpage.html';
}



function WPpuzzleroom3() {
    
    //Initial Display
    document.getElementById("result").innerHTML = '';
    document.getElementById("ShowPuzzleButton").style.display = "none";
    document.getElementById("userAnswer").value='';
    document.getElementById("goToNextRoom").style.display = "none";

    //Equation    
    const num1 = Math.floor(Math.random() * 107) + 52;
    const num2 = Math.floor(Math.random() * 107) + 1;
    const num3 = Math.floor(Math.random() * 14) + 1;
    const operation = "multiplication";
    const correctAnswer = (num2 * num3);
    
    //problem and userInput visible
    document.getElementById("problem").innerHTML = `You bought candy for $${num2} per bag. If you bought ${num3} bags, how much does you spend?`;
    document.getElementById("userInput").style.display = "block";

    // Check the answer when the user submits
    document.getElementById("submitBtn").onclick = function () {
        const userAnswer = document.getElementById("userAnswer").value;
    
        if (userAnswer == correctAnswer) {
            
            document.getElementById("result").innerHTML = "Fantastic! You get one coin";
            correctAnswers++;
            
            // Save correct answer count to local storage
            localStorage.setItem('correctAnswers', correctAnswers);
            updateCorrectCount();

            document.getElementById("goToNextRoom").style.display = "block";
            document.getElementById("ShowPuzzleButton").style.display = "block";
        } 

        else {
                document.getElementById("result").innerHTML = `Sorry, the correct answer is ${correctAnswer}. Keep practicing!`;
                document.getElementById("ShowPuzzleButton").style.display = "block";
        }

        // Hide the input field after submitting
        document.getElementById("problem").innerHTML = '';
        document.getElementById("userInput").style.display = "none";

        function updateCorrectCount() {
            document.getElementById('correctCount').textContent = correctAnswers;
        }
    }  
    }



