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


// New way

const {op, lhs, rhs} = getASTNode()

op
lhs
rhs





// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}

g({name: 5})