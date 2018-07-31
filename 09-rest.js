function f(x, ...y) {
    console.log(y)
    return x * y.length;
}


const threeMultiple = f(3, "hello", true, 5, 6, 7, 5)


threeMultiple