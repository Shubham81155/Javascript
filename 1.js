// Function to find the bigger number
function findBiggerNumber(num1, num2) 
{
    if (num1 > num2) {
      return `${num1} is bigger.`;
    } else if (num2 > num1) {
      return `${num2} is bigger.`;
    } else {
      return "Both numbers are equal.";
    }
}
  
  // Example usage
  let number1 = 45;
  let number2 = 60;
  
  console.log(findBiggerNumber(number1, number2));
  