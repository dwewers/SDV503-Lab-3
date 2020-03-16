// var test_result;
const score = 25;


switch (true) {
  case  score <= 100 && score >= 85:{
     var test_result = "A+ Distinction";
      console.log(test_result);
    break;
  }
  case score <= 84 && score >= 80 :{
      var test_result = "A+ Distinction";
      console.log(test_result);
    break;
  }
  case score <= 79 && score >= 75 :{
      test_result = "A- Distinction";
      console.log(test_result);
    break;
  }
  case score <= 74 && score >= 70: {
      test_result = "B+ Merit";
      console.log(test_result);
    break;
  }
  case score <= 69 && score >= 65: {
      test_result = "B merit";
      console.log(test_result);
    break;
  }
  case score <= 64 && score >= 60: {
      test_result = "B- Merit";
      console.log(test_result);
    break;
  }
  case score <= 59 && score >= 55: {
      test_result = "C+ Merit";
      console.log(test_result);
    break;
  }
  case score <= 54 && score >= 50: {
      test_result = "C Pass";
      console.log(test_result);
    break;
  }
  case score <= 49 && score >= 40: {
      test_result = "D Fail";
      console.log(test_result);
    break;
  }
  case score <= 39 && score >= 0: {
      var test_result = "E Fail";
      console.log(test_result);
    break;
  }

}

