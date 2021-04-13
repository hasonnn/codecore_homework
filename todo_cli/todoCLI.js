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
            view();
        } else if (answer === "n") {
            add();
        } else if (answer.includes("c")) {
            completeIndex = answer;
            complete();
        } else if (answer.includes("d")) {
            deleteIndex  = answer
            deleteList();
        } else {
            quit()
        }
    })
}

// LIST
const list = [["[]", "Do Laundry"], ["[]", "Groceries"]];
// const list = [];
let completeIndex = "";
let deleteIndex = "";

// View
function view() {
    if (list.length === 0) {
        console.log("List is empty");
    } else {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i} ${list[i][0]} ${list[i][1]}`);
        }
    }
    theMenu();
}

// Add
function add() {
    rl.question("What would you like to add? \n", (task) => {
        list.push(["[]", task]);
        theMenu();  
    })
}

// Complete ✓
function complete() {
    let i = completeIndex[1];
    list[i].shift();
    list[i].unshift("[✓]");
    theMenu();
}

// Delete
function deleteList() {
    let i = deleteIndex[1];
    list.splice(i, 1);
    theMenu();
}

// Quit
function quit() {
    console.log("See you soon!")
    process.exit()
}


theMenu();