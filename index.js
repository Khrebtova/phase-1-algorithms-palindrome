function isPalindrome(word) {
  let reverseWord = reverseString(word)
  return reverseWord === word ? true : false
}

function reverseString(str){
  return str.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  build a function, with string as an argument
  get another variable and assign it reverse value of the initial string, 
  compare two variables
  return true or false

*/

/*
  function reverseString(str) takes tring , split it, reverse leters order, and put it back to a string, after returning new string
  function function isPalindrome(word) compares new string to old string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("reviver"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
