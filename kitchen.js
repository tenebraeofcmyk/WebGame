
    // Load correct answer count from local storage on page load
    let correctAnswers = localStorage.getItem('correctAnswers') || 0;
    document.getElementById('correctCountFood').textContent = correctAnswers;
    document.getElementById("goToNextRoom").style.display = "none";

    function goToNextRoom() {
        window.location.href = 'CWcourtyard.html';
    }

//window.onload = (event) => {
//    console.log("page is fully loaded");

    const story = {
        searchKitchen1: {
            lines: [
                "You decide the best idea is to search the kitchen.",
                "Immediately your nose is met with the smells of food, salt, and wine.",
                "You pass three fires, all with empty pots hanging in each hearth.",
                "There are lots of abandoned dishes, pots, and goblets, but no people."
            ]
        },
        searchKitchen2: {
            lines: [
            "You decide the best idea is to search the kitchen.",
            "Immediately your nose is met with the smells of food, salt, and wine.",
            "You pass three fires, all with empty pots hanging in each hearth.",
            "There are lots of abandoned dishes, pots, and goblets, but no people.",
            ]
        }, 
        checkCellar: {
            lines: [
            "You try to find the cellar.",
            "There is a door in the back of the cellar behind a bunch of barrels that smell of wine and grain."
            ]
        },  
        kitchenPuzzle1: {
            lines: [
            "blah blah blah.",
            "fdsagsgs."
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

   document.getElementById("kitchenPuzzleB").addEventListener('click', kitchenPuzzleQ);




    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "searchKitchen1":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                kitchenPuzzleB.style.display = "none";
                currentChapter = "searchKitchen2";
                break;
            case "searchKitchen2":
                    //console.log('Switch case: searchKitchen1');
                    buttonContainer.style.display = 'block';
                    nextButton.style.display = "block";
                    kitchenPuzzleB.style.display = "none";
                    currentChapter = "checkCellar";
                    break;
            case "checkCellar":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                kitchenPuzzleB.style.display = "none";
                currentChapter = "kitchenPuzzle";
                break;


            case "kitchenPuzzle":
                //console.log('Switch case: searchKitchen1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                kitchenPuzzleB.style.display = "block";
                break;

            // Add more cases as needed
        }
        document.getElementById('nextButton').removeEventListener('click', nextChapter);
        displayChapter();

        document.getElementById('nextButton').addEventListener('click', nextChapter);
    }


    function kitchenPuzzle() {
        currentChapter = "kitchenPuzzle";
        buttonContainer.style.display = 'none';
        nextButton.style.display = "block";
        displayChapter();
        }

    function kitchenPuzzleQ() {

        //Initial Display
        document.getElementById("result").innerHTML = '';
        document.getElementById("kitchenPuzzleB").style.display = "none";
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
                updateCorrectCountFood();

                document.getElementById("goToNextRoom").style.display = "block";
                document.getElementById("kitchenPuzzleB").style.display = "block";
            } 

            else {
                    document.getElementById("result").innerHTML = `Sorry, the correct answer is ${correctAnswer}. Keep practicing!`;
                    document.getElementById("kitchenPuzzleB").style.display = "block";
            }
    
            // Hide the input field after submitting
            document.getElementById("problem").innerHTML = '';
            document.getElementById("userInput").style.display = "none";

            function updateCorrectCountFood() {
                document.getElementById('correctCountFood').textContent = correctAnswers;
            }
            }  
        }