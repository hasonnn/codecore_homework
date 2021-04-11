// Draw Line
function drawLine(num) {
    const line = "━"
    return  line.repeat(num)
}
// console.log(drawLine(4))

// Top Border
function drawTopBorder(num)  {
    const line = "━"
    return `┏${line.repeat(num)}┓`
}
// console.log(drawTopBorder(4))

// Middle Border
function drawMiddleBorder(num)  {
    const line = "━"
    return `┣${line.repeat(num)}┫`
}
// console.log(drawMiddleBorder(4))

// Bottom Border
function drawBottomBorder(num)  {
    const line = "━"
    return `┗${line.repeat(num)}┛`
}
// console.log(drawBottomBorder(4))

// Bars Around
function drawBarsAround(str)  {
    return `┃${str}┃`
}
// console.log(drawBarsAround("Hello World"))

// ┏━━━━┓
// ┣━━━━━━━━━┫
// ┃  You are Bill┃
// ┗━━┛

function boxIt(arr) {
    for (let i = 0; i < arr.length; i++) {
        largestStrNum = 0;
        if (arr[i].length > largestStrNum) {
            largestStrNum = arr[i].length
        }
        // return `${drawTopBorder(largestStrNum)}\n${drawBarsAround(arr[i])}\n${drawMiddleBorder(largestStrNum)}\n`
        return largestStrNum
    }
}

console.log(boxIt(['Jon Snow', 'Cersei Lannister', 'Lannister']))
