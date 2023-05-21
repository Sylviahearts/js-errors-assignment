// Question 1
for(let i=0; i<5; i++){
    console.log(i);
};

// Question 2
function addIfEven(num){
    if(num % 2 == 0) {
        return num + 5;
    };
    return num;
};
console.log(addIfEven(6));

// Question3 
function loopToFive(){
    for(let i=0; i<6; i++){
        console.log(i);
    };
};
loopToFive()



// Question 4
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++){
        if(numbers % 2 == 0) {
            evenNumbers.push(i);
        };
        return evenNumbers;
    };
};
console.log(displayEvenNumbers()); // should return [2,4,6,8]