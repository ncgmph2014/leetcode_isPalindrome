/**
//  * @param {number} x
//  * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString();
  console.log(str);
  let reverseArr = [];
  //this pushes all the digits into the array backwards
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  console.log(reverseArr);
  //this converts the reverse array into a string so we can test it against str
  let reverseStr = reverseArr.join("").toString();
  console.log(reverseStr);
};

//examples
isPalindrome(10);
isPalindrome(121);
isPalindrome(-121);
