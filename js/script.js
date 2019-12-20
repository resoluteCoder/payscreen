const deleteButton = document.getElementsByClassName("delete")[0];
const notification = document.getElementsByClassName("notification")[0];
const payButton = document.getElementById("pay");

// hides notification when user clicks x
deleteButton.addEventListener("click", function(){
  notification.style.opacity = 0;
});

// shows notification when user clicks pay button
payButton.addEventListener("click", function(){
  // checks to see if pay button is disabled
  if ( !payButton.hasAttribute("disabled") ) {

    // check to see if input is accurate for cc

    // clear inputs
    const inputs = document.getElementsByClassName("inputs");
    for (let i = 0; i < inputs.length; i++){
      inputs[i].value = "";
    }
    // display notification success
    notification.style.opacity = 1;

    // disable button
    payButton.setAttribute("disabled", "");
  }
});

function checkInput() {
  // get all inputs
  const inputs = document.getElementsByClassName("inputs");
  // loop through inputs to add input listener
  for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", function(){
      if (inputs[i].value.length > 0){

        // create count for filledInputs
        let filledInputs = 0;
        // on input change loop through inputs for fill check
        for (let i = 0; i < inputs.length; i++){
          if (inputs[i].value.length > 0){
            filledInputs++;
            if (filledInputs >= 5) {
              payButton.removeAttribute("disabled");
            }

          }
        }
      }
      // if length goes to 0 add disabled to pay button
      else if(inputs[i].value.length <= 0){
        // button doesn't have disabled attribute then add it
        if (!payButton.hasAttribute("disabled")) {
          payButton.setAttribute("disabled", "");
        }
      }
    });

  }
}

checkInput();
