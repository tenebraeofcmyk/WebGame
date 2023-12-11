document.addEventListener("DOMContentLoaded", function () {
    const words = ["apothecary", "courtyard", "cobblestone", "flintstone", "riddles"];
    const unscrambledWord = pickRandomWord(words);
    const scrambledWord = scrambleWord(unscrambledWord);

    const puzzleContainer = document.getElementById("puzzle-container");
    const submitButton = document.getElementById("submit-button");

    puzzleContainer.textContent = scrambledWord;

    submitButton.addEventListener("click", function () {
      const userInput = document.getElementById("user-input").value.toLowerCase();

      if (userInput === unscrambledWord) {
        alert("You hear the box open up. You got the puzzle correctly. You take the jewels and necklace you find in the open box.");
        // addToInventory("jewels");
        // addToInventory("necklace");
        localStorage.setItem('correctAnswersJewels', correctAnswersJewels);
        updateCorrectCountJewels();

      } else {
        alert("Incorrect! Try again.");
      }
    });






    function scrambleWord(word) {
      return word.split("").sort(() => Math.random() - 0.5).join("");
    }

    function pickRandomWord(wordList) {
      return wordList[Math.floor(Math.random() * wordList.length)];
    }

    function addToInventory(item) {
      const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
      inventory.push(item);
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  });