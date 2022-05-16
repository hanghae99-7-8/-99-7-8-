

function solution(num) {
  let answer = '';

  if (num%2 === 0){         //만약 num을 2로나눈 나머지가 0이라면!!
      return answer ="Even"     //짝수라고 답을 보여준다
  }else{
      return answer ="Odd"       //아니라면 홀수라고 표시한다.
  }
  return answer;
}

console.log(solution(4))