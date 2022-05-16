function solution(numbers){
  let answer =0;
  for(let i=0;i<10;i++){
    if(!numbers.includes(i))
      answer +=i;
  }
  return answer;
}

console.log(solution([1,2,3,5,6,7,8]))