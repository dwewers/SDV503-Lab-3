// var test_result;
const score = 1;


switch (score) {
  case 1:
    if (score <= 100 && score >= 85) {
     var test_result = "A_Plus";
      console.log("A+ Distinction");
    }
    break;

  case 2:
    if (score <= 84 && score >= 80) {
      var test_result = "A";
      console.log("A Distinction");
    }
    break;

  case 3:
    if (score <= 79 && score >= 75) {
      test_result = A_Minus;
      console.log("A- Distinction");
    }
    break;

  case 4:
    if (score <= 74 && score >= 70) {
      test_result = B_Plus;
      console.log("B+ - Merit");
    }
    break;

  case 5:
    if (score <= 69 && score >= 65) {
      test_result = B;
      console.log("B merit");
    }
    break;

  case 6:
    if (score <= 64 && score >= 60) {
      test_result = B_Minus;
      console.log("B- Merit");
    }
    break;

  case 7:
    if (score <= 59 && score >= 55) {
      test_result = C_Plus;
      console.log("C+ Pass");
    }
    break;

  case 8:
    if (score <= 54 && score >= 50) {
      test_result = C;
      console.log("C Pass");
    }
    break;

  case 9:
    if (score <= 49 && score >= 40) {
      test_result = D;
      console.log("D Fail");
    }
    break;

  case 10:
    if (score <= 39 && score >= 0) {
      test_result = E;
      console.log("E Fail");
    }
    break;
}

