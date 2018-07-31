function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve((["Ahmed", "Essam", "Youssef"])), 2000)
    })
}

getUsers().then((x) => {
    console.log(x)
}).catch(err => {
    console.log(err)
})


console.log('doing stuff')
