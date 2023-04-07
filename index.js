// Answer 1
function sum (a, b){
    return a + b;
}

let ans = sum(10, 20);

console.log(ans)
// Answer 2

let isEven = function(num) {
    if (num % 2 === 0) {
        return true;
    }else {
        return false;
    }
};


console.log(isEven(1))//output is false
console.log(isEven(4))//output is true



//Answer 3
function reverseString(str) {

    
    let x = "";
    for (let i = str.length - 1; i >= 0; i--) {
        x += str[i];
    }
    return x;
}

const string = "Jemal"
const result = reverseString(string);
console.log(result);

//Answer 4


  function calculateFactorial(num) { 
    if (num < 0) { 
       return -1; 
    } 
    else if (num == 0){ 
       return 1; 
    } 
    else { 
       return num * calculateFactorial(num - 1); 
    } 
 } 

 console.log(calculateFactorial(4))

 //Answer 5


function convertTemperature(celsius) {
    const fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}

console.log(convertTemperature(6)) //output is 42.8

//Answer 6

function countVowel(str)
{
  var vowels = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var i = 0; i < str.length ; i++)
  {
    if (vowels.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(countVowel('jemal seid'));


