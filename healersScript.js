
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



const story = {

    belowFountain: {
        lines: [
            ""
        ]
    },

    //Room 10 – Healer’s Room – Cannot access until Throne Room and Labyrinth are done.   

 

    // You decide to flip through the pages of the diary, in hopes if there are anymore clues to why you lost your memory.>> 
    
    // One particular entry catches your eye.>> 
    
    // <<graphic with text?>> 
    
    // “It is strange to see how our staff has been slowly losing their pallor, despite the bright summer sun warming the fields this season. I watch servants cross paths, walking in the sun all day, squires working with the horses in the fields, and yet, they grow weaker everyday. Their skin becomes paler, and they are fatigued all day. I have approached our healer multiple times, but he says he is unable to provide an antidote. I worry that for the first time he has been this castle’s healer he rejects the idea of an antidote so easily. Does he know something we do not? Is he withholding from telling us there is no antidote? What is he hiding from us? Why is he hiding it from me and His Majesty?”>> 
    //     You realize you have not seen any place where a healer could work. You try to figure out where there could be a healer’s room.  
    
     
    
    // Keep reading diary.>> OR 
    
    // You keep reading the diary, looking for any directions or drawings.>> 
    
    // You find nothing in the diary that helps.>> 
    
    // You decide to instead try to search the castle grounds for the healer’s room.>> 
    
     
    
    // Search the castle grounds for the healer’s room.>> 
    
    // You go search the grounds again and fail to see anything different.  
    
    // You remember you never found a staircase from the top floor to the bottom floor. You try to search for the stairs.>> 
    
    // If you can find the stairs, you might be able to find another room. 
    
    // <<Insert Puzzle>> 
    
    // When you succeed, the stairs lead you back to the room you started in.  
    
    // When you fail, you do not have anymore ideas for how to find the room. You check again.>> 
    
     
    
    // On the way back up the stairs, you pick up the torch you left when you left the dark room.>> 
    
    // You are now back in the room you awoke in. after relighting the torch, you try to find other torches to brighten the room.>> 
    
    // While searching the room, last time the sheets looked to be covering furniture.>> 
    
    // You pull the sheets back.>> 
    
    // What is uncovered are tables lined with vials, potions, and a lots of other related equipment. Mortar-and-pestles are filled with a camel-brown powder, and waving the sheets back brings the same musky smell you smelled on the dead knights.>> 
    
    // You have found the healer’s room.>> 
    
    // You are confused why you woke up in this room in the first place.>> 
    
    // You hear the dripping sounds from when you first woke up.>> 
    
    // You see the deer hanging upside down in the back of the room again.>> 
    //     You see a torch on the wall beside the deer. You light it.>> 
    
    // Seeing the deer fully tickles your memory.>> 
    
    // The deer… I wanted to see if I could make myself an antidote…>> 
    
    // You remember hating being confined to a tower, all alone.>> 
    
    // You hated hearing the screams from the dungeon down below when the king asked you to interrogate prisoners.>> 
    
    // You wanted to be the one to call the shots, make the orders…>> 
    
     
    
    // You are becoming dizzy.>> 
    
    // You realize there is a musky smell in the room. The smell is intoxicating, growing stronger.>> 
    
    // You are remembering more and more details as the smell grows stronger.>> 
    
    /// Working all day, all night, trying to sneak the poison into everyone’s food. Hiding the powder during meals, melting the powder down and experimenting how to create more forms of the poison. Breathing in the fumes with every experiment, becoming dizzy from the darkness and the smells… 
    
    // Just like now.>> 
    
    // You collapse and fall asleep.>> 
    
    // You remember one last thing: You were the healer that caused it all.>>      

}
let currentChapter = "belowFountain";


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

const buttonContainer = document.getElementById("doorButtonContainer");

document.getElementById("doorSleepingB").addEventListener('click', sleepingChamberdoor);
document.getElementById("doorKitchenB").addEventListener('click', kitchenDoor);
document.getElementById("doorStablesB").addEventListener('click',stableDoor);
document.getElementById("doorLabyrinthB").addEventListener('click',labyrinthDoor);

function nextChapter() {
    // Logic to determine the next chapter based on the current chapter
    console.log('Entering nextChapter. Current chapter:', currentChapter);

    switch (currentChapter) {
        case "belowFountain":
            console.log('Switch case: belowFountain');
            nextButton.style.display = "block";
            currentChapter = "surveyYard";
            break;
        case "surveyYard":
            currentChapter = "seeDoors";
            buttonContainer.style.display ="block";
            nextButton.style.display = "none";
            break;

        // Add more cases as needed
    }
    document.getElementById('nextButton').removeEventListener('click', nextChapter);
    displayChapter();

    document.getElementById('nextButton').addEventListener('click', nextChapter);
}




function courtyardExit(){
    window.location.href="courtyard.html";
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
