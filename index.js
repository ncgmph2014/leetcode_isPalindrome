/**
//  * @param {number} x
//  * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString();
  console.log(str);
  let reverseArr = [];
  //this works
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  console.log(reverseArr);
};

//examples
isPalindrome(10);
isPalindrome(121);
isPalindrome(-121);
