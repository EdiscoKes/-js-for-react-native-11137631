//Task 1
function processArray (numbers){
    return numbers.map(num => {
        if (num%2 ===0){
            return num*num;
        } else{

            return num*3;
        }
    });

}
//Example usage

const numbers = [1,2,3,4,5]
 const processedNumbers = processArray(numbers);
 console.log(processedNumbers);



//Task 2

function formatArrayStrings(strings,processedNumbers){
    return strings.map((string,index)=>{
        if (processedNumbers[index]%2 === 0){
            return string.toUpperCase();
        } else{
            return string.toLowerCase();
        }
    });



}

//example usage
const strings =["My","Mom","is","the","best"];
const formattedArrayStrings = formatArrayStrings(strings,processedNumbers);
console.log(formattedArrayStrings);

