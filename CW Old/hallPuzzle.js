
    // Load correct answer count from local storage on page load
    let correctAnswers = localStorage.getItem('correctAnswers') || 0;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById("goToNextRoom").style.display = "none";

    function goToNextRoom() {
        window.location.href = 'testnextpage.html';
    }



    function entryCourtyardPuzzle() {
        
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
   