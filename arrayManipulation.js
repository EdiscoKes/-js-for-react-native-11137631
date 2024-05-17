function processArray (numbers){
    return numbers.map(num => {
        if (num%2 ===0){
            return num*num;
        } else{

            return num*3;
        }
    });

}

const numbers = [1,2,3,4,5,6,7,8,9,10,12]
const result =processArray(numbers);
console.log(result);