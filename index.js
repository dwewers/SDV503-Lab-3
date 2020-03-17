// var test_result;
const score = 76; //Creates a variable, for which we can input the score and use it later on in the code
var test_result; //Creates a variable that we can use to identify what the result is based off the score

switch (true) { //This is known as the switch block. Inside it consists of what is known as a 'switch keyword'
  case score <= 100 && score >= 85: { //Compares the values after to score
    let test_result = "A+"; //What we are saying, is that if it comes back that the previous statement is true, test_result is A+
    console.log(test_result); //logs variable test_result if the statement is correct
    break; //this is used so that when we get to this part, we break from the switch block
  }
  case score <= 84 && score >= 80: {//Compares the values after to score
    let test_result = "A";//What we are saying, is that if it comes back that the previous statement is true, test_result is A
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 79 && score >= 75: {//Compares the values after to score
    let test_result = "A-";//What we are saying, is that if it comes back that the previous statement is true, test_result is A-
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 74 && score >= 70: {//Compares the values after to score
    let test_result = "B+";//What we are saying, is that if it comes back that the previous statement is true, test_result is B+
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 69 && score >= 65: {//Compares the values after to score
    let test_result = "B";//What we are saying, is that if it comes back that the previous statement is true, test_result is B
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 64 && score >= 60: {//Compares the values after to score
    let test_result = "B-";//What we are saying, is that if it comes back that the previous statement is true, test_result is B-
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 59 && score >= 55: {//Compares the values after to score
    let test_result = "C+";//What we are saying, is that if it comes back that the previous statement is true, test_result is C+
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 54 && score >= 50: {//Compares the values after to score
    let test_result = "C";//What we are saying, is that if it comes back that the previous statement is true, test_result is C
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 49 && score >= 40: {//Compares the values after to score
    let test_result = "D";//What we are saying, is that if it comes back that the previous statement is true, test_result is D
    console.log(test_result);//logs variable test_result if the statement is correct
    break;//this is used so that when we get to this part, we break from the switch block
  }
  case score <= 39 && score >= 0: { //Compares the values after to score  
      let test_result = "E";//What we are saying, is that if it comes back that the previous statement is true, test_result is E
      console.log(test_result);//logs variable test_result if the statement is correct
      break;//this is used so that when we get to this part, we break from the switch block
    }

    if (test_result <= 100 && test_result >= 75) {
      console.log("Distinction");
    } else if (test_result <= 74 && test_result >= 60) {
      console.log("Merit");
    } else if (test_result <= 59 && test_result >= 50) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
}

//Part below doesnt work yet

/*
result_description = test_result <=39 ? "fail" : '';
result_description = test_result <=59 ? "pass" : '';
result_description = test_result <=74 ? "merit" : '';
result_description = test_result <=100 ? "Disitinction" : '';

console.log(result_description);*/

//Part 2 Homework

let dayTime = false;
let nightTime = true;
let Light = dayTime ? "bright" : nightTime ? "Dark" : "";
console.log(Light);

//Below is a different way to write the previous example
let light = {
  dayTime: true,
  nightTime: null
};
light.nightTime = light.dayTime ? "no" : "yes";
console.log(light);
