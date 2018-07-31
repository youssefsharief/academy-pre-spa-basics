const arr = [1, 2, 3, 4, 5, 6]

const timesTwoArr = arr.map(function (x) {
    return x * 2
})
timesTwoArr

function timesTwo(x) {
    return x * 2
}

const timesTwoArrAlt = arr.map(timesTwo)
timesTwoArrAlt


// -------------





function onlyOdd(x) {
    if (x%2!=0) {
        return x
    }
}

const onlyOddarr = arr.filter(onlyOdd)
onlyOddarr


// -----------------------

