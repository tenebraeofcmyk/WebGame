
    // Load correct answer count from local storage on page load
    // i need to use key/value pairs throughout website

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

    document.getElementById("goToNextRoom").style.display = "none";

    function goToNextRoom() {
        window.location.href = 'courtyard.html';
    }

//window.onload = (event) => {
//    console.log("page is fully loaded");

    const story = {
        walkForward: {
            lines: [
                "With the grayish natural light, you no longer need the torch.",
                "Shaking it until there are no more flames, you concentrate on your left.",
                "The right is only a stone wall.",
                "You walk forward."
            ]
        },
        openCourtyard: {
            lines: [
            "You no longer need the torch, so you shake it until there are no more flames.",
            "To the right is only a stone wall. You walk forward.",
            "The left wall is only a railing, and down below is an open courtyard, a fountain flowing with water, surrounded by flowers that are in the turning to fall.",
            ]
        }, 
        castleView: {
            lines: [
            "You take a few more steps forward, and more of the castle comes into view.",
            "You see the grandeur of the castle, towers in each corner, the high walls, the stained glass windows… and you realize there is likely a lot of wealth hidden in the different rooms.",
            "You want to get down to the courtyard to find these treasures."            
            ]
        },  
        entryCourtyardPuzzle: {
            lines: [
            "Seeing the expanses of the castle, you are so glad you stopped at a market for candy before embarking on your journey.",
            "Solve a puzzle to retrieve food and gain entry into the courtyard."
            ]
        },        
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

   document.getElementById("entryCourtyardPuzzleB").addEventListener('click', entryCourtyardPuzzleQ);

    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "walkForward":
                //console.log('Switch case: walkForward');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                entryCourtyardPuzzleB.style.display = "none";
                currentChapter = "openCourtyard";
                break;
            case "openCourtyard":
                //console.log('Switch case: walkForward');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                entryCourtyardPuzzleB.style.display = "none";
                currentChapter = "castleView";
                break;
            case "castleView":
                //console.log('Switch case: walkForward');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                entryCourtyardPuzzleB.style.display = "block";
                currentChapter = "entryCourtyardPuzzle";
                break;

            case "entryCourtyardPuzzle":
                //console.log('Switch case: walkForward');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                entryCourtyardPuzzleB.style.display = "block";
                break;

            // Add more cases as needed
        }
        document.getElementById('nextButton').removeEventListener('click', nextChapter);
        displayChapter();

        document.getElementById('nextButton').addEventListener('click', nextChapter);
    }


    function entryCourtyardPuzzle() {
        currentChapter = "entryCourtyardPuzzle";
        buttonContainer.style.display = 'none';
        nextButton.style.display = "block";
        displayChapter();
        }

    function entryCourtyardPuzzleQ() {

        //Initial Display
        document.getElementById("result").innerHTML = '';
        document.getElementById("entryCourtyardPuzzleB").style.display = "none";
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
                
                document.getElementById("result").innerHTML = "Fantastic! You get food and now have a choice... do you want to play another puzzle or enter the courtyard?";
                correctAnswersFood++;
                
                // Save correct answer count to local storage
                localStorage.setItem('correctAnswersFood', correctAnswersFood);
                updateCorrectCountFood();

                document.getElementById("goToNextRoom").style.display = "block";
                document.getElementById("entryCourtyardPuzzleB").style.display = "block";
            } 

            else {
                    document.getElementById("result").innerHTML = `Sorry, the correct answer is ${correctAnswer}. Keep practicing!`;
                    document.getElementById("entryCourtyardPuzzleB").style.display = "block";
            }
    
            // Hide the input field after submitting
            document.getElementById("problem").innerHTML = '';
            document.getElementById("userInput").style.display = "none";

            function updateCorrectCountFood() {
                document.getElementById('correctCountFood').textContent = correctAnswersFood;
            }
            }  
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