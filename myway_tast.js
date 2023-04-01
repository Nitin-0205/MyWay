function fizzBuzz(numberSum){
    let i
let output = ''
for(i = 1;i<=50 ;i++){
    
    if(i%3 === 0 && i %4 ===0){
        output += "FizzBuzz "
    }else if(i%3 === 0){
        output += "Fizz "
    }else if(i%4 === 0){
        output += "Buzz "
    }else{
        output += i+ ' '
    }
}
console.log(output)
}

function sumPhone(phoneNum){
    let sum =0;
    for(let i = 0;i<phoneNum.length;i++){
        sum += parseInt(phoneNum[i])
    }
    return sum;
}
var phoneNum = '7039964057';
var numberSum =sumPhone(phoneNum)
fizzBuzz(numberSum)
