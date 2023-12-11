
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

    document.getElementById("goToNextRoom").style.display = "none";

    function goToNextRoom() {
        window.location.href = 'courtyard.html';
    }

//window.onload = (event) => {
//    console.log("page is fully loaded");

    const story = {
        searchKitchen1: {
            lines: [
                "You decide the best idea is to search the kitchen.",
            ]
        },
        searchKitchen2: {
            lines: [
            "Immediately your nose is met with the smells of food, salt, and wine.",
            "You pass three fires, all with empty pots hanging in each hearth.",
            "There are lots of abandoned dishes, pots, and goblets, but no people.",
            ]
        }, 
        checkCellar: {
            lines: [
            "There is a door in the back of the cellar kitchen with a bunch of barrels and jars.",
            "It smells good... a blend of different spices."
            ]
        },  
        kitchenPuzzle1: {
            lines: [
            "Being in the kitchen is making you hungry, so you decide to search for food.",
            "Solve the puzzle to get more food."
            ]
        },        
    }

    let currentChapter = "searchKitchen1";


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

   document.getElementById("kitchenPuzzle1B").addEventListener('click', kitchenPuzzle1Q);




    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "searchKitchen1":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                kitchenPuzzle1B.style.display = "none";
                currentChapter = "searchKitchen2";
                break;
            case "searchKitchen2":
                    //console.log('Switch case: searchKitchen1');
                    buttonContainer.style.display = 'block';
                    nextButton.style.display = "block";
                    kitchenPuzzle1B.style.display = "none";
                    currentChapter = "checkCellar";
                    break;
            case "checkCellar":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                kitchenPuzzle1B.style.display = "block";
                currentChapter = "kitchenPuzzle1";
                break;


            case "kitchenPuzzle1":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                kitchenPuzzle1B.style.display = "block";
                break;

            // Add more cases as needed
        }
        document.getElementById('nextButton').removeEventListener('click', nextChapter);
        displayChapter();

        document.getElementById('nextButton').addEventListener('click', nextChapter);
    }


    function kitchenPuzzle1() {
        currentChapter = "kitchenPuzzle1";
        buttonContainer.style.display = 'none';
        nextButton.style.display = "block";
        displayChapter();
        }

    function kitchenPuzzle1Q() {

        //Initial Display
        document.getElementById("result").innerHTML = '';
        document.getElementById("kitchenPuzzle1B").style.display = "none";
        document.getElementById("userAnswer").value='';
        document.getElementById("goToNextRoom").style.display = "none";

        //Equation    
        const correctAnswerKitchen1 = 20;
        
        //problem and userInput visible
        document.getElementById("problem").innerHTML = `You see jars lined up on a cellar shelf. Four of the five jars have spices and one jar is empty. What percentage of the jars are empty?`;
        document.getElementById("userInput").style.display = "block";
    
        // Check the answer when the user submits
        document.getElementById("submitBtn").onclick = function () {
            const userAnswer = document.getElementById("userAnswer").value;
        
            if (userAnswer == correctAnswerKitchen1) {
                
                document.getElementById("result").innerHTML = "Fantastic! You get food and decide to head back to the courtyard.";
                correctAnswersFood++;
                
                // Save correct answer count to local storage
                localStorage.setItem('correctAnswersFood', correctAnswersFood);
                updateCorrectCountFood();

                document.getElementById("goToNextRoom").style.display = "block";
                document.getElementById("kitchenPuzzle1B").style.display = "none";
            } 

            else {
                    document.getElementById("result").innerHTML = `Sorry, that is not correct, plase try again!`;
                    document.getElementById("kitchenPuzzle1B").style.display = "block";
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