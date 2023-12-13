
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
        enterLabyrinth1: {
            lines: [
                "With your newfound bravery from the events of today, you are feeling strong enough to go into the gardens in the back, near the stables.",
            ]
        },
        enterLabyrinth2: {
            lines: [
            "With your newfound bravery from the events of today, you are feeling strong enough to go into the gardens in the back, near the stables.",
            "As you come closer, you see the gardens are actually a labyrinth, hedges that rise over twice your own height.",
            "When you step closer to the hedges, a breeze picks up from above, carrying the noise of birds…",
            "…And the sound of voices. The voices sound like a mother and children, laughing and giggling while the mother calls out names you cannot here.",
            "You follow the voices down the paths of hedges.",
            "You are being pulled in now by the voices.",
            ]
        }, 
        inHedges: {
            lines: [
                "Before you can stop yourself, you have lost track of time, and you are now lost.",
                "You attempt to find your way back through the hedges but to no avail.",
            ]
        },  
        labyrinthPuzzle1: {
            lines: [
            "Solve the puzzle to find a trinket and look for exit.",
            ]
        },

        labyrinthEnd: {
            lines: [
            "He arrived, he has been here all along, and we were so blind we did not even see...",
            "A traitor brought this fate onto the whole castle. The fate of this castle piques your interest even more, and you keep the diary in the fold of your coat until you need it to learn more.",       
        ]
        },        
    }

    let currentChapter = "enterLabyrinth1";


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

   document.getElementById("labyrinthPuzzle1B").addEventListener('click', labyrinthPuzzle1Q);
   document.getElementById("labyrinthPuzzle2B").addEventListener('click', labyrinthPuzzle2Q);



    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "enterLabyrinth1":
                //console.log('Switch case: enterLabyrinth1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "block";
                labyrinthPuzzle1B.style.display = "none";
                labyrinthPuzzle2B.style.display = "none";
                currentChapter = "enterLabyrinth2";
                break;
            case "enterLabyrinth2":
                    //console.log('Switch case: enterLabyrinth1');
                    buttonContainer.style.display = 'block';
                    nextButton.style.display = "block";
                    labyrinthPuzzle1B.style.display = "none";
                    labyrinthPuzzle2B.style.display = "none";
                    currentChapter = "inHedges";
                    break;
            case "inHedges":
                //console.log('Switch case: enterLabyrinth1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                labyrinthPuzzle1B.style.display = "block";
                labyrinthPuzzle2B.style.display = "none";
                currentChapter = "labyrinthPuzzle1";
                break;
            case "labyrinthPuzzle1":
                //console.log('Switch case: enterLabyrinth1');
                buttonContainer.style.display = 'block';
                nextButton.style.display = "none";
                labyrinthPuzzle1B.style.display = "block";
                labyrinthPuzzle2B.style.display = "block";
                break;

            // Add more cases as needed
        }
        document.getElementById('nextButton').removeEventListener('click', nextChapter);
        displayChapter();

        document.getElementById('nextButton').addEventListener('click', nextChapter);
    }


    function labyrinthPuzzle1() {
        currentChapter = "labyrinthPuzzle1";
        buttonContainer.style.display = 'none';
        nextButton.style.display = "block";
        displayChapter();
        }

    function labyrinthPuzzle1Q() {

        //Initial Display
        document.getElementById("result").innerHTML = '';
        document.getElementById("labyrinthPuzzle1B").style.display = "none";
        document.getElementById("userAnswer").value='';
        document.getElementById("goToNextRoom").style.display = "none";

        //Equation    
        const correctAnswerlabyrinth1 = 4;
        
        //problem and userInput visible
        document.getElementById("problem").innerHTML = `There are 16 rows of hedges, with 25% covered in vines. How many rows are covered in vines?`;
        document.getElementById("userInput").style.display = "block";
    
        // Check the answer when the user submits
        document.getElementById("submitBtn").onclick = function () {
            const userAnswer = document.getElementById("userAnswer").value;
        
            if (userAnswer == correctAnswerlabyrinth1) {
                
                document.getElementById("result").innerHTML = "Correct! You see a gap in the hedges and find a jewel as you sneak thru. But oh, no... it was a trap. Solve the next puzzle to make it thru.";
                correctAnswersJewel++;
                
                // Save correct answer count to local storage
                localStorage.setItem('correctAnswersJewel', correctAnswersJewel);
                updateCorrectCountJewel();

                document.getElementById("goToNextRoom").style.display = "none";
                document.getElementById("labyrinthPuzzle2B").style.display = "block";
            } 

            else {
                    document.getElementById("result").innerHTML = `Sorry, that is not correct, please try again!`;
                    document.getElementById("labyrinthPuzzle1B").style.display = "block";
            }
    
            // Hide the input field after submitting
            document.getElementById("problem").innerHTML = '';
            document.getElementById("userInput").style.display = "none";

            function updateCorrectCountJewel() {
                document.getElementById('correctCountJewel').textContent = correctAnswersJewel;
            }
            }  
        }



        function labyrinthPuzzle2Q() {

            //Initial Display
            document.getElementById("result").innerHTML = '';
            document.getElementById("labyrinthPuzzle2B").style.display = "none";
            document.getElementById("userAnswer").value='';
            document.getElementById("goToNextRoom").style.display = "none";
    
            //Equation    
            const correctAnswerlabyrinth2 = 3;
            
            //problem and userInput visible


            document.getElementById("problem").innerHTML = `You see ten mice scurrying about. 70% of the mice have cheese.  How many mice don't have cheese?`;

            document.getElementById("userInput").style.display = "block";
        
            // Check the answer when the user submits
            document.getElementById("submitBtn").onclick = function () {
                const userAnswer = document.getElementById("userAnswer").value;
            
                if (userAnswer == correctAnswerlabyrinth2) {
                    
                    document.getElementById("result").innerHTML = "Correct! As you are escaping, you stumble on a journal and pick it up...";
                    correctAnswersJournal++;
                    
                    // Save correct answer count to local storage
                    localStorage.setItem('correctAnswersJournal', correctAnswersJournal);
                    updateCorrectCountJournal();
    
                    document.getElementById("goToNextRoom").style.display = "block";
 //                   document.getElementById("labyrinthPuzzle2B").style.display = "block";
                } 
    
                else {
                        document.getElementById("result").innerHTML = `Sorry, that is not correct, please try again!`;
                        document.getElementById("labyrinthPuzzle2B").style.display = "block";
                }
        
                // Hide the input field after submitting
                document.getElementById("problem").innerHTML = '';
                document.getElementById("userInput").style.display = "none";
    
                function updateCorrectCountJournal() {
                    document.getElementById('correctCountJournal').textContent = correctAnswersJournal;
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
       