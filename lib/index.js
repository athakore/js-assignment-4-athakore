let F = require('fkit');

// Fresh, Organic, Non-GMO Functions, Curry Included!
// let add5 = F.add(5)
// let sub5 = F.sub(5)
// let mul5 = F.mul(5)
// let div5 = F.div(5)

// // So Partial Functions. Much Currying
// console.log(add5) // function
// console.log(sub5) // function
// console.log(mul5) // function
// console.log(div5) // function

// console.log(add5(2)) // 7
// console.log(sub5(2)) // -3
// console.log(mul5(2)) // 10
// console.log(div5(2)) // 0.4

// // Predicates Are Love. Predicates Are Life.
// console.log(F.eq(1, 3)) // false
// console.log(F.eq(4, 3)) // false
// console.log(F.eq(3, 3)) // true
// console.log(F.gt(1, 3)) // true
// console.log(F.gt(4, 3)) // false
// console.log(F.gt(3, 3)) // false
// console.log(F.lt(1, 3)) // false
// console.log(F.lt(4, 3)) // true
// console.log(F.lt(3, 3)) // false
// console.log(F.neq(1, 3)) // true
// console.log(F.neq(4, 3)) // true
// console.log(F.neq(3, 3)) // false

// // Strings are Collections!?!?! No WAAAAAAAI!!!!
let str = 'natedaag';

// Uber Functional Majyks At Work
// console.log(F.intersperse('`', str)) // n`a`t`e`d`a`a`g
// console.log(F.surround('this ', 'ing sucks', str)) // ...It's a surprise, but, not really...

// const transcribe = (currVal, index) =>
//   (index % 2 === 0
//     ? String.fromCharCode(currVal.charCodeAt(0) + 1)
//     : String.fromCharCode(currVal.charCodeAt(0) + 2))

// console.log(F.filter(F.neq('a'), str))
// console.log(F.map(transcribe, str))
// console.log(F.concat(F.map(transcribe, str)))

// Unary, Binary & Variadic, Oh My!
// let vari = F.variadic(F.id)
// console.log(F.id(1, 2, 3, 4, 5))
// console.log(vari(1, 2, 3, 4, 5))

// let uni = F.unary(F.add)
// let bin = F.binary(F.inc)
let vari = F.variadic(F.id);
console.log(F.id(1, 2, 3, 4, 5));
console.log(vari(1, 2, 3, 4, 5));
// console.log(uni(1, 2, 3, 4, 5))
// console.log(bin(1, 2, 3, 4, 5))