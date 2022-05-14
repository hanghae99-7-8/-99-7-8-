function solution(arr1, arr2) {
  let answer = [];
  for(i=0; i<arr1.length; i++) {
       answer[i]=[];   
      for(j=0; j<arr1[i].length; j++) {
         answer[i][j]=arr1[i][j]+arr2[i][j]; 
      }
      
  }
  return answer;

}

console.log([[2],[4],[6]].length)

console.log(solution([[2],[4],[6]],[[5],[7],[4]]))
