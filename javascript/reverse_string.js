// if str = None return
//create reversedstring empty array
// Iterate through the string from the end, using the length of the string +1 inclusive
// push each element to a new array (reversedstring)
//return reversedstring





function reverseString(str) {
  let reversedstring = []
  for (let i = str.length + 1; i > -1; i--){
    reversedstring.push(str[i])
  }
  return reversedstring.join("").toString()

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting 'tac'")
  console.log("=>", reverseString("cat"));
  console.log("Expecting racecaR");
  console.log("=>", reverseString("Racecar"));
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
