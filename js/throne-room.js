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
    
    const enterThroneContainer = document.getElementById("enterThroneContainer");
    document.getElementById('enterThroneContainerB').addEventListener('click', nextChapter);
    
    const investigateThroneContainer = document.getElementById("investigateThroneContainer");
    document.getElementById('investigateThroneContainerB').addEventListener('click', nextChapter);
    
    const investigateReliefContainer = document.getElementById("investigateReliefContainer");
    document.getElementById('investigateReliefContainerB').addEventListener('click', nextChapter);
    
    const afterReliefContainer = document.getElementById("afterReliefContainer");
    document.getElementById('afterReliefContainerB').addEventListener('click', nextChapter);
    
    const exitThroneContainer = document.getElementById("exitThroneContainer");
    document.getElementById("exitThroneContainerB").addEventListener('click', nextChapter);

    document.getElementById("leaveThrone").style.display = "none";


    function nextChapter() {
        // Logic to determine the next chapter based on the current chapter
        console.log('Entering nextChapter. Current chapter:', currentChapter);

        switch (currentChapter) {
            case "opening":
                currentChapter = "enterThrone";
                enterThroneContainer.style.display = "block";
                nextButton.style.display ="none";
                break;
            case "enterThrone":
                console.log('Switch case: enterThrone');
                enterThroneContainer.style.display = "none";
                nextButton.style.display = "none";
                investigateThroneContainer.style.display = "block";
                currentChapter = "investigateThrone"; 
                break;
            case "investigateThrone":
                console.log('Switch case: investigateThrone');
                investigateThroneContainer.style.display = "none";
                nextButton.style.display = "none";
                investigateReliefContainer.style.display = "block";
                currentChapter = "investigateRelief"; 
                break;           
            case "investigateRelief":
                console.log('Switch case: investigateThrone');
                investigateReliefContainer.style.display = "none";
                nextButton.style.display = "none";
                afterReliefContainer.style.display = "block";
                currentChapter = "afterRelief"; 
                break;  
            case "afterRelief":
                console.log('Switch case: afterRelief');
                afterReliefContainer.style.display = "none";
                nextButton.style.display = "none";
                exitThroneContainer.style.display = "block";
                currentChapter = "exitThrone"; 
                break; 
            case "exitThrone":
                leaveThrone();
                break; 
        }
        document.getElementById('nextButton').removeEventListener('click', nextChapter);
        displayChapter();
    
        document.getElementById('nextButton').addEventListener('click', nextChapter);
    }

function leaveThrone() {
    window.location.href = 'courtyard.html';
}

// Local Storage
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
}
