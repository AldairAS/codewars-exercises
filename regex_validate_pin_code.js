// Reference: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
// Statement: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.
//  "1234"   -->  true
//  "12345"  -->  false
//  "a234"   -->  false

function validatePIN(pin) {
  let regexp = /^\d{4}$|^\d{6}$/;
  return regexp.test(pin);
}

validatePIN("1234");
validatePIN("12343EW");
validatePIN("12345");
validatePIN("123");
validatePIN("123A");
validatePIN("1233A");
validatePIN("123344");

console.log(typeof 5);
