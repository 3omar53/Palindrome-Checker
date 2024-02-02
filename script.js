const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const enterWithoutValue = () => {
  if (!textInput.value) {
    alert("Please input a value");
  }
};

const checkPalindrome = (inputValue) => {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
  return cleanedInput === cleanedInput.split('').reverse().join('');
};

checkBtn.addEventListener('click', () => {
  enterWithoutValue();

  if (textInput.value) {
    const palindromeMessage = checkPalindrome(textInput.value)
      ? 'is a palindrome'
      : 'is not a palindrome';

    result.textContent = `${textInput.value} ${palindromeMessage}`;
  }
});
