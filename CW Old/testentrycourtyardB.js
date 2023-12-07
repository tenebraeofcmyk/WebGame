let currentChapter = "walkForward";

// Different chapters of text within a story
const storyChapters = {
    "walkForward": {
        lines: [
            "With the grayish natural light, you no longer need the torch.",
            "Shaking it until there are no more flames, you concentrate on your left.",
            "The right is only a stone wall.",
            "You walk forward."
        ]
    },
    "belowFountain": {
        lines:[
            "The left wall is only a railing, and down below is an open courtyard, a fountain flowing with water, surrounded by flowers that are in the turning to fall.",
            "Through the dry branches you see the ground below littered with the petals and leaves, and you realize this is where the rustling comes from."]
        },
    "realizeTreasure":{
        lines:[
            "You take a few more steps forward, and more of the castle comes into view.",
            "You see the grandeur of the castle, towers in each corner of the length of each wall, the high walls, the stained glass windows…",
            "With the grandeur of the castle, you realize there is likely a lot of wealth hidden in each of the different rooms.",
            "You want to find these trinkets."  
        ]  
    }
    // Add more chapters as needed with unique names
};

// Function to display the text for a given chapter
function displayChapter(chapter) {
    document.getElementById("chapterText").innerHTML = storyChapters[chapter] || "No more chapters";
}

// Function to determine the next chapter based on current chapter
function determineNextChapter(currentChapter) {
    // Add your logic here to determine the next chapter based on the current chapter
    // For simplicity, let's assume a linear progression
    switch (currentChapter) {
        case "walkForward":
            return "belowFountain";
        case "belowFountain":
            return "realizeTreasure";
        default:
            return null; // No more chapters
    }
}

// Display the first chapter initially
displayChapter(currentChapter);

// Function to handle the "Next" button click
function nextChapter() {
    // Determine the next chapter based on currentChapter
    currentChapter = determineNextChapter(currentChapter);

    // Display the text for the next chapter
    displayChapter(currentChapter);
}
