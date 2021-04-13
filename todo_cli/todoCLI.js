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
        } else if (answer === "n") {
            add()
        } else if (answer.includes("c")) {
            completeIndex = answer;
            complete()
        }
    })
}

// LIST
const list = [["[]", "Do Laundry"], ["[]", "Groceries"]]
// const list = []
let completeIndex = ""

// View
function view() {
    if (list.length === 0) {
        console.log("List is empty")
    } else {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i} ${list[i][0]} ${list[i][1]}`)
        }
    }
    theMenu();
}

// Add
function add() {
    rl.question("What would you like to add? \n", (task) => {
        list.push(["[]", task])
        theMenu();  
    })
}

// Complete ✓
function complete() {
    let i = completeIndex[1];
    list[i].shift()
    list[i].unshift("[✓]")
    theMenu();
}

// Delete
function deleteList() {

}

// Quit
function quit() {

}


theMenu();