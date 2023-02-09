//get values from the user. We need to get the fizz and the buzz value.
function getValues() {

    //get the user values from the dom. 
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check they are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue)

        //call displayData and write the values to the screen.
        displayData(fbArray);

    } else {
        alert("You mmust enter a integer!")
    }


}

//Do fizz buzz
function fizzBuzz(fizzValue, buzzValue) {

    //init the returnArray
    let returnArray = [];

    //loop from 1-100
    for (let i = 1; i <= 100; i++) {

        //we need to check the current value in three steps
        //check to seee if divisible by both
        //if so push 'FizzBuzz' into tan array and not the number
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');

            //else check to see if divisible by fizz number
            ////if so push 'Fizz' into an array and not the number
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');

            //else check to see if divisible by buzz number
            ////if so push 'Buzz' into an array and not the number
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');

            //if none push the number into the array
        } else {
            returnArray.push(i);
        }

    }

    return returnArray;

}


//loop over the arrary and create a tablrow for each item.
function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td's put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];

        tableBody.appendChild(tableRow);
    }
    //add all the rows to the table.


}