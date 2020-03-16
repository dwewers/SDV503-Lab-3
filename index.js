  // var test_result;
  const score = 44;
  var test_result;


  switch (true) {
  case  score <= 100 && score >= 85:{
  let test_result = "A+";
  console.log(test_result);
  break;
  }
  case score <= 84 && score >= 80 :{
  let test_result = "A";
  console.log(test_result);
  break;
  }
  case score <= 79 && score >= 75 :{
  let test_result = "A-";
  console.log(test_result);
  break;
  }
  case score <= 74 && score >= 70: {
  let test_result = "B+";
  console.log(test_result);
  break;
  }
  case score <= 69 && score >= 65: {
  let test_result = "B";
  console.log(test_result);
  break;
  }
  case score <= 64 && score >= 60: {
  let test_result = "B-";
  console.log(test_result);
  break;
  }
  case score <= 59 && score >= 55: {
  let test_result = "C+";
  console.log(test_result);
  break;
  }
  case score <= 54 && score >= 50: {
  let test_result = "C";
  console.log(test_result);
  break;
  }
  case score <= 49 && score >= 40: {
  let test_result = "D";
  console.log(test_result);
  break;
  }
  case score <= 39 && score >= 0: {
  let test_result = "E";
  console.log(test_result);
  break;
  }

  if (test_result <=100 && test_result >= 75){
  console.log("Distinction");
  }
  else if (test_result <=74 && test_result >= 60){
  console.log("Merit");
  }
  else if (test_result <=59 && test_result >= 50){
  console.log("Pass");
  }
  else {
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

