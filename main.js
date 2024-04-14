// function with rest parameters define a function with multiples 
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // loop through each hobby in the array
    hobbies.forEach(function (hobby) {
        // log a statment for each hobby 
        console.log("i enjoy ".concat(hobby, "."));
    });
}
// call the function eith three hobbies 
logHobbies("reading", "coding", "cycling");
