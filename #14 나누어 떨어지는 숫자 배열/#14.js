function solution(arr, divisor) {
   let a = [];
  for(let i=0;i<arr.length;i++){
    if (arr[i]% divisor == 0){
      a.push(arr[i])
    }
    // let b= arr[i] % divisor == 0 ? arr[i]: null ;
    //  b==arr[i]? a.push(arr[i]):
     
  // } 
  //    return arr.push(arr[i]) 
    // return a.lenght == 0 ? [-1] : a.sort((a,b)=>a-b);
}
return a.length == 0 ? [-1]: a.sort((b,c)=> b-c);
// return a==[arr[i]]?a.push(arr[i]):'';
}

console.log(solution([10,5],5))