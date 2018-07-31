// Lexical this
var bob = {
    _name: "Bob",
    _friends: ["Ahmed", "Essam", "Amr"],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}

bob.printFriends()




var ramy = {
    _name: "Bob",
    _friends: ["Ahmed", "Essam", "Amr"],
    printFriends() {
        this._friends.forEach(function(f) {
            console.log(this._name + " knows " + f);
        })
            
    }
}

ramy.printFriends()