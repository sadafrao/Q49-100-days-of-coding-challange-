// function with rest parameters define a function with multiples 
function logHobbies(...hobbies: string[]){
    // loop through each hobby in the array
    hobbies.forEach(hobby => {
        // log a statment for each hobby 
        console.log(`i enjoy ${hobby}.`);
    });
} 
// call the function eith three hobbies 
logHobbies("reading","coding","cycling");