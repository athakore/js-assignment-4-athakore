let F = require('fkit')
console.log(F.concat('pen', 'pineapple', 'apple', 'pen'))
console.log(F.concat(F.map(F.toUpper, 'penpineappleapplepen')))
