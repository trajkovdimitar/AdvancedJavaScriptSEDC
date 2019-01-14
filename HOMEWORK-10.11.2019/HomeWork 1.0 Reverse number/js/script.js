let number = prompt("Please enter the number you want to reverse:", "32243");

function reverseFunction() {
    let num = `${number}`; // Takes the number
    let n = num.toString(); // Converts it to string
    console.log("Check if it is converted: ", typeof (n)); // Checks the type of the element)
    let splitted = n.split(""); // Split a string into an array of substrings:
    console.log("Splited: ", splitted); // shows the splitted array
    let reversed = splitted.reverse(); // reverses the array
    console.log("Reversed :", reversed); //shows the reversed array
    let finalNumber = reversed.join(""); //join all elements of the array into a string
    console.log("The final number is: ",finalNumber); // Shows the result as a string
    // console.log(typeof(finalNumber));
};
reverseFunction(); // Calls the function
// -------------------------------------------------------------------------------------------

//    ---> Same but shorter
// function easierFunction(){
//     let num = `${number}`;
//     let reversed = num.toString().split("").reverse().join("");
//     console.log(reversed);
// }
// easierFunction();

// ----------------------------------------------------------------------------------------------
