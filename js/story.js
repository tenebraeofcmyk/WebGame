window.onload = (event) => {
  console.log("page is fully loaded");

  //Get a reference to the advance text btn
  const advanceTextBtn = document.getElementById("advanceTextBtn");
  // Get a reference to the text container
  const textContainer = document.getElementById("textContainer");
  
  //console.log(advanceTextBtn);

  // Text to display line by line
  const storyPt1 = [
                    "You wake in a dim room....",
                    "There are subtle shapes of furniture covered in sheets not far from the walls",
                    "You push yourself off of the floor, and you feel the cold bitterness of a stone floor...",
                    "The cobbles beneath you make standing hard...",
                  ];
  
//nested object of story chunks
  storyObj = {
      storyPt1 : [
        "You wake in a dim room....",
        "There are subtle shapes of furniture covered in sheets not far from the walls",
        "You push yourself off of the floor, and you feel the cold bitterness of a stone floor...",
        "The cobbles beneath you make standing hard...",
      ], 
      storyPt2 : [

      ],
    };

  //   nestedObj[storyPt1] = 

  /**
  * Display text line by line with a delay.
  * @param {string[]} textArray - An array of strings representing the lines of text.
  */              
  function displayText(textArray) {
    //console.log(textArray);

    // Loop through text array
    for (var i = 0; i < textArray.length; i++) {
      // Use a closure to capture the current value of i
      (function (index) {
          setTimeout(() => {
              console.log(textArray[index]);
              // Append each line to the text container
              textContainer.innerHTML += textArray[index] + '<br>';
              // Scroll to the bottom to keep the latest line visible
              textContainer.scrollTop = textContainer.scrollHeight;
          }, i * 1000); // Adjust the delay (in milliseconds) between lines
      })(i);
    }//for
  };//displayText


  //display story text on click
  advanceTextBtn.addEventListener("click", function(){
      displayText(storyPt1);
  });
};//onload
