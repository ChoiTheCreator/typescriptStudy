//숫자 판별은 닥치고 isNaN
//문자열을 각각 분리하여 배열에 넣으려면 spread 연산자 아니면 뭐쓸래 새끼야

function solution(my_string) {
  var answer = 0;
  const parsedArr = [...my_string];
  console.log(parsedArr);
  parsedArr.forEach((element) => {
    if (!isNaN(element)) {
      answer += parseFloat(element);
    }
  });
  return answer;
}

console.log(solution('aAb1B2cC34oOp'));

function solution2(my_stirng) {
  var answer = 0;
  var numStr = '';
  const parsedArr = [...my_stirng];
  const length = parsedArr.length;

  for (let i = 0; i < length; i++) {
    //만약 숫자면
    // numStr에 숫자를 append하고 끝
    if (!isNaN(parsedArr[i])) {
      numStr += parsedArr[i];
    }
    //만약 문자면 지금까지 append했던 숫자문자열을 정답과 더해준다
    //더하고 나면 초기화  
    //빈 문자열은 무조건 isNaN이 아니므로 !isNaN을 검사 조건으로 넣으니까..
    else if (isNaN(parsedArr[i]) && numStr != '' && parseFloat(numStr) != 0) {
      answer += parseFloat(numStr);
      numStr = '';
    }
  }

  //만약 마지막에 숫자일경우 즉, 문자열을 못 만날 가능성이 있는 마지막 경우
  if (numStr != '') {
    answer += parseFloat(numStr);
  }

  return answer;
}

//여기선 Number 로 관대한 parse를 해줘야함 
// \D+로 regex 묶겠다는건 숫자가 아닌 문자들로 "기준"을 나눈 거라서 
//["", "1", "2", "34", ""]  -> 이러케댐
//따라서 ParseFloat('') => NaN Number('')=> 0
//regex 쓸때는 Number() 좀 더 관대한
function EZWayREGEX(input) {
  return input.split(/\D+/).reduce((acc, cur) => (acc += Number(cur)), 0);
}

console.log(solution2('1a2b3c4d123Z'));
console.log(solution2('aAb1B2cC34oOp'));
console.log(EZWayREGEX('aAb1B2cC34oOp'));


