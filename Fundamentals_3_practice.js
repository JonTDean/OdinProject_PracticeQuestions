// Function containing a switch statement, this will handle taking all of the other functions.
function chooseAFunc(num){
    switch(num){
        case 1:
            console.log(add7(parseInt(prompt("Welcome to the first function, please give me another number."))));
            break;
        case 2:
            console.log(multiply(parseInt(prompt("Welcome to the second function, please give me the first number.")), parseInt(prompt("Give me the second number."))));
            break;
        case 3:
            console.log(capitalize(prompt("Welcome to the 3rd function, give me a word please!")));
            break;
        case 4:
            console.log(lastLetter(prompt("Welcome to the 4th function, give me a word please.")));
            break;
        default:
            console.log("Thanks for participating!");
            break;
    }
}

// Returns a given number + 7.
function add7(number){
    return number + 7;
}

// Returns the product of two numbers.
function multiply(number1, number2){
    return number1 * number2;
}

// Returns any string with the only the first letter capitalized.
function capitalize(string){
    
    arr_firstLtrCap = [];

    for(i = 0; i < string.length; i++){                     // Iterates over int i counter.

        if (i == 0){                                        // Checks if i is equal to 0, if truthy it takes the first index of the string and replaces it with it's capital form. If falsey skips.
            arr_firstLtrCap.push(string[i].toUpperCase());
        }else if (i > 0 && i < string.length){              // Checks if i is greater than 0 but less than the string length, if truthy it takes the value of every index and converts it to a lowercase equivalent. If it reaches past the string.length the for loop ends.
            arr_firstLtrCap.push(string[i].toLowerCase());
        }
    }  
    return (arr_firstLtrCap.join(''));                      // Returns the array str_firstLtrCap,  
}

// Takes a string and returns the very last letter of that string.
function lastLetter(string){

    arr_lastLtr = []    
    for(i = 0; i < string.length; i++){
        if (i == string.length-1){
            arr_lastLtr.push(string[i])
        }
    }
    return arr_lastLtr.toString();
}

chooseAFunc(parseInt(prompt("Pass me a number, thanks.")));



/*
Sites Used:

Function 3:
https://www.w3schools.com/js/js_loop_for.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
https://www.w3schools.com/js/js_loop_while.asp
https://www.w3schools.com/js/js_break.asp
https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas

Function 4:
https://www.geeksforgeeks.org/get-the-first-and-last-item-in-an-array-using-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

*/