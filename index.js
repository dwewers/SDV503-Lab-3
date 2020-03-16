

var myGrading=(score);
var test_result;

switch(true) {
  case (score <= 100 && score >= 85):
    test_result = 'A+ - Destinction';
      break;
      case (score <= 84 && score >= 80):
        test_result = 'A - Destinction';
          break;
  case (score <= 79 && score >= 75):
    test_result = 'A- Destinction';
        break;
  case (score <= 74 && score >= 70):
    test_result = 'B+ - Merit';
        break;
      case (score <= 69 && score >= 65):
      test_result = 'B - Merit';
        break;
  case (score <= 64 && score >= 60):
    test_result = 'B- Merit';
      break;
      case (score <= 59 && score >= 55):
        test_result = 'C+ - Pass';
          break;
          case (score <= 54 && score >= 50):
            test_result = 'C - Pass';
              break;
              case (score <= 49 && score >= 40):
                test_result = 'D - Fail';
                  break;
                  case (score <= 39 && score >= 0):
                    test_result = 'E - Fail';
    break;
}

// var last_digit = score%10;
// if(last_digit <=2 && last_digit >= 0 && score != 100){
//   score+='-';
// }
// else if((last_digit <=9 && last_digit >= 7) || score == 100){
//   score+='+';
// }

// return gscore;
// };

console.log(myGrading(14));
console.log(myGrading(75));
console.log(myGrading(100));


