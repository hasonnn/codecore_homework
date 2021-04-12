const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Todo CLI!");
console.log("--------------------");

// Menu
function theMenu() {
    rl.question("(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n", (answer) => {
        if (answer === "v") {
            view()
        }
        rl.close();
    })

}

// View
// const list = [["[]", "Do Laundry"], ["[]", "Groceries"]]
const list = []

function view() {
    if (list.length === 0) {
        console.log("List is empty")
    } else {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i} ${list[i][0]} ${list[i][1]}`)
        }
    }
    theMenu();
    return list
}



// Add
function add() {

}

// Complete ✓
function complete() {

}

// Delete
function deleteList() {

}

// Quit
function quit() {

}


theMenu();