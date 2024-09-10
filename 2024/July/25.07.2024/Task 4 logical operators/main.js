// 1)Three Main Logical Operators in JavaScript:

// AND (&&)
// OR (||)
// NOT (!)
//2) What does the AND (&&) operator do?

// It returns true only if both operands are true.
//3) What is the result of true && true?

// true
//4) What is the result of true && false?

// false
//5)What does the OR (||) operator do?

// It returns true if at least one operand is true.
//6) What is the result of false || true?

// true
//7) What is the result of false || false?

// false
//8) What does the NOT (!) operator do?

// It inverts the boolean value of its operand.
//9) What is the result of !true?

/// false
//10) What is the result of !false?

// true
//11) What is the result of true && true && false?

// false (because all operands must be true for the result to be true with the AND operator)
//12) What is the result of false || false || true?

// true (because at least one operand is true with the OR operator)
//13) What is the order of precedence for logical operators?

// NOT (!) has the highest precedence.
// AND (&&) is next.
// OR (||) has the lowest precedence.
//14) What is short-circuit evaluation in logical operations?

// It's when the second operand is not evaluated if the first operand is sufficient to determine the result.
//15) In the expression a && b, when is b not evaluated?

// When a is false, because the result is already determined to be false.
//16) In the expression a || b, when is b not evaluated?

// When a is true, because the result is already determined to be true.
// Evaluating Expressions
//17) What is the result of 5 > 3 && 2 < 4?

// true (both comparisons are true, and true && true is true)
//18) What is the result of 5 > 7 || 3 < 2?

// false (both comparisons are false, and false || false is false)
//19) What is the result of !(5 > 3)?

// false (the comparison 5 > 3 is true, and !true is false)
//20) How can you use parentheses to change the order of evaluation in logical expressions?

// Expressions within parentheses are evaluated first.