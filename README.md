# coding-test-prac
각자 완성시킨 코딩테스트에 대해 올려요!

[[항해99 7기 A반] 프로그래밍 기초 걷기반 문제 마라톤 (Programmers)](https://docs.google.com/spreadsheets/d/1z0QRXHLpb87YvaTdiBvp_KqRsQztxaIU_xeSLXguH40/edit#gid=557167890)

1.직사각형 별찍기(유정)
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const result = ("*").repeat(a)+("\n") // *을 a번 반복한 후 줄바꿈
    console.log((result).repeat(b)); // result를 b번 반복
});
}
```
2.짝수와 홀수(서현)
```javascript
function solution(num) {
  let answer = '';
  if (num % 2 === 0){         //만약 num을 2로나눈 나머지가 0이라면!!
      return answer ="Even"     //짝수라고 답을 보여준다
  }else{
      return answer ="Odd"       //아니라면 홀수라고 표시한다.
  }
  return answer;
}
```
3.가운데 글자 가져오기(신영)
```javascript
function solution(s) {
    var answer = '';
    var length = s.length
    
    if (length % 2 == 0) {
        answer = s.substr(s.length/2-1,2)
        
    }else{
        answer = s.substr(s.length/2,1)
    }
    return answer;
}
```
4.두 정수 사이의 합(대규)
```javascript
function solution(a, b){
  var answer = 0; // 초기답을 answer =0으로 정의
  var min = Math.min(a,b) // a,b 중 작은 값을 min으로 정의
  var max = Math.max(a,b) // a,b 중 큰 값을 max 으로 정의
  
  for(var n = min; n <= max; n++){ //n을 min으로 정의 하고 n이 max가 될 때까지 n에 1씩 더하는 것 반복  
    answer += n // 반복할 때 마다 answer에 값을 더한다.
  }
  return answer; // 0 + (3) + (3+1) + (3+2) = 12
}
```
5.문자열을 정수로 바꾸기(대규)
```javascript
function solution(s) {
  return parseInt(s); // 문자를 정수로 바꾸는 함수 parseInt()
}
```
6. 없는 숫자 더하기(서현)
```javascript
function solution(numbers){
  let answer =0;
  for(let i = 0; i < 10; i++){
    if(!numbers.includes(i))
      answer +=i;
  }
  return answer;
}
```
7.음양 더하기(유정)
```javascript
function solution(absolutes, signs) {
    var answer = 0;
    var length = absolutes.length;
    for(i = 0; i < length; i++){
        if(signs[i]){ // signs가 참일 경우
            answer += absolutes[i];
        }else { // signs가 거짓일 경우
            answer += (absolutes[i]) *-1; // 음수로 곱한 것을 대입연산자로 더해준다.
        }
    }
    return answer;
}
```
8.평균 구하기(신영)
```javascript
function solution(arr){
  let sum = 0;
  let arr1 = arr.length
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum / arr1;
}
```
9.핸드폰 번호 가리기(대규)
```javascript
function solution(phone_number){
  var answer = "*".repeat(phone_number.length - 4) // phone_number의 length에서 -4한것만큼 "*"를 반복한 후
  +phone_number.slice(-4); // phone_number에서 뒤에서부터 4번째 만큼 분리한다.
  return answer;
}
```
10.행렬의 덧셈(서현)
```javascript
function solution(arr1, arr2) {
  let answer = [];
  for(i = 0; i < arr1.length; i++) {
       answer[i] = [];   
      for(j = 0; j < arr1[i].length; j++) {
         answer[i][j] = arr1[i][j] + arr2[i][j]; 
      }
  }
  return answer;
}
```
11.x만큼 간격이 있는 n개의 숫자(유정)
```javascript
function solution(x, n) {
    var answer = [];
    for(i=1; i<=n; i++){ // i는 1부터 5까지 하나씩 늘어난다.
        answer.push(x*i) // x와 i의 곱을 answer에 추가해준다.
    }
    return answer;
}
```
12.부족한 금액 계산하기(신영)
```javascript
function solution(price, money, count){
  var answer = 0;
  for (let i = 0; i <= count; i++){
    answer += price * i;
  }
  return money < answer ? answer - money : 0;
}
```
13.2016년(대규)
```javascript
function solution(a, b){
  var answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var date = new Date(`2016-${a}-${b}`); //new Date : 날짜를 지정해 주는 함수
  var day = date.getDay() // getDay : 요일을 지정해 주는 함수 (0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토)
  return answer[day];
}
```
14.나누어 떨어지는 숫자 배열(서현)
```javascript
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
```
15.내적(유정)
```javascript
function solution(a, b) {
    var answer = 0;
    for(i = 0;i < a.length; i++){
        answer += a[i] * b[i] //a의 i번째와 b의 i번째를 곱한 것을 대입연산자로 더해준다.
    }
    return answer;
}
```
