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

window.onload = (event) => {
    console.log("page is fully loaded");

    const story = {
        opening: {
            lines: [
                ""
            ]
        },
        enterThrone: {
            lines: [
            "Every castle has a throne room, and you have not found one yet.",
            ]
        },
        investigateThrone: {
            lines: [
            "You see the large double-doors and reason this the main hall with the thrones.",
            "You head inside.",
            "The main hall is much larger on the inside that you reckoned. The walls curve into the ceiling, and the back wall is gilded with reliefs of history.",
            "Interested in this history, you walk to the back wall.",
            ]
        }, 
        investigateRelief: {
            lines: [
            "Passing the thrones, you realize they are not covered in sheets like the furniture in the tower was.",
            "There is no dust on the thrones either, and you wonder how long this castle was empty.",
            "You pocket this information away and continue reading the relief."
            ]
        },  
        afterRelief: {
            lines: [
            "The history described the kingdom’s origin, from travelers fighting strange beasts to becoming the first royal bloodline. They established the kingdom and this castle.",
            "The last image sticks in your mind.",
            "It shows a man, kneeling down over a cauldron.",
            "Behind him are a line of bodies. Two of the bodies are wearing crowns.",
            "You are unsure if this is history or an explanation of what happened here."
            ]
        },        
        exitThrone: {
            lines: [
            "The relief was completed recently, you notice, from the sheen of the stone and dust below only this image.",
            "You wonder if the image created itself or if someone completed it.",
            "You leave, not finding anything else of interest.",
            ]
        },        
    }


    let currentChapter = "opening";

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
    
    const drawbridgeContainer = document.getElementById("drawbridgeContainer");
    document.getElementById('startDrawbridgeB').addEventListener('click', nextChapter);
    
    const leverContainer = document.getElementById("leverContainer");
    document.getElementById('crankLeverB').addEventListener('click', nextChapter);
    
    const leaveContainer = document.getElementById("leaveContainer");
    document.getElementById('leaveCastleB').addEventListener('click', nextChapter);
    
    const wolvesContainer = document.getElementById("wolvesContainer");
    document.getElementById('encounterWolvesB').addEventListener('click', nextChapter);
    
    const logicContainer = document.getElementById("returnContainer");
    document.getElementById("drawbridgeReturnB").addEventListener('click', nextChapter);
    
    //document.getElementById("logicContainerB").addEventListener('click', nextChapter);
    
    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);
    
        switch (currentChapter) {
            case "opening":
                currentChapter = "enterThrone";
                nextButton.style.display ="block";
                break;
            case "enterThrone":
                console.log('Switch case: enterThrone');
                nextButton.style.display = "none";
                currentChapter = "investigateThrone"; 
                break;
            case "investigateThrone":
                console.log('Switch case: crankLever');
                nextButton.style.display = "none";
                currentChapter = "investigateRelief"; 
                break;            
            case "investigateRelief":
                console.log('Switch case: leaveCastle');
                nextButton.style.display = "none";
                currentChapter = "afterRelief";
                break;
            case "afterRelief":
                console.log('Switch case: encounterWolves');
                nextButton.style.display = "none";
                currentChapter = "exitThrone";
                break;
            case "exitThrone":
                console.log('Switch case: drawbridgeReturn');
                nextButton.style.display = "none";
                break;
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
