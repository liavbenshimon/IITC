//1) == and ===
//2) == (Equality Operator):

// Performs type coercion (converts operands to the same type before comparison).
// Loosely checks equality.
// Example: 5 == '5' is true.
// === (Strict Equality Operator):

// Does not perform type coercion.
// Strictly checks equality (both value and type must be the same).
// Example: 5 === '5' is false.
// 3)!= (Loose Inequality Operator):

// Performs type coercion.
// Example: 5 != '5' is false.
// !== (Strict Inequality Operator):

// Does not perform type coercion.
// Example: 5 !== '5' is true.
//4) The > operator in JavaScript is a comparison operator
//  that checks if the value on the left side is greater than the value on the right side.
//  It returns a Boolean value: true if the left value is greater than the right value, and false otherwise.
// 5)the ooposite 
// 12) In JavaScript, when you compare strings using relational operators like <, the comparison is done lexicographically, based on the Unicode values of the characters in the strings.
// 15)Relational Operators: Convert strings to numbers if compared with numbers; convert booleans to 0 or 1.
// Loose Equality (==, !=): Performs type coercion to compare values.
// Strict Equality (===, !==): No type coercion; compares both value and type.
// Special Cases: null and undefined are equal to each other but not to other values; NaN is not equal to anything, even itself.