'use strict';

// 2 ** 53 - 1

console.log('MAX_SAFE_INTEGER     =', Number.MAX_SAFE_INTEGER);
console.log('MAX_SAFE_INTEGER + 1 =', Number.MAX_SAFE_INTEGER + 1);
console.log('MAX_SAFE_INTEGER + 2 =', Number.MAX_SAFE_INTEGER + 2);
console.log();

const max = 2 ** 53 - 1;
const biSafe = BigInt(max);
console.log('max    =', max);
console.log('biSafe =', biSafe);
console.log();

console.log('typeof max    =', typeof max);
console.log('typeof biSafe =', typeof biSafe);
console.log('if (max === biSafe) :', max === biSafe);
console.log('if (max == biSafe) :', max == biSafe);
console.log();

console.log('biSafe      =', biSafe);
console.log('biSafe + 1n =', biSafe + 1n);
console.log('biSafe + 2n =', biSafe + 2n);
console.log();

console.log('15n / 3n =', 15n / 3n);
console.log('3n / 2n =', 3n / 2n);
console.log('BigInt(3n / 2n) =', BigInt(3n / 2n));

// console.log('BigInt(\'1.5\') =', BigInt('1.5'));
// SyntaxError: Cannot convert 1.5 to a BigInt

// console.log('BigInt(1.5) =', BigInt(1.5));
// RangeError: The number 1.5 is not a safe integer
// and thus cannot be converted to a BigInt

console.log('2n > 1n =', 2n > 1n);
console.log('2n > 1 =', 2n > 1);
console.log();

console.log('(1000n ** 200n) / 12321n =', (1000n ** 200n) / 12321n);
console.log();
