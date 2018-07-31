// list matching
var [a, , b] = [1,2,3];

a
b










function getASTNode() {
    return { op: a, lhs: 12, rhs: 18 }
}


const payload = getASTNode()
const oldOp = payload.op
const oldlhs = payload.lhs
const oldrhs = payload.rhs

oldOp
oldlhs
oldrhs

const {op, lhs, rhs} = getASTNode()







// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
