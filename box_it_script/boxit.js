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
function drawBarsAround(str, num)  {
    if (str.length !== num) {
        let paddingNum = num - str.length;
        let padding = " ".repeat(paddingNum);
        return `┃${str}${padding}┃`
    } else {
        return `┃${str}┃`
    }
}
// console.log(drawBarsAround("Hello World"))

// ┏━━━━┓
// ┣━━━━━━━━━┫
// ┃  You are Bill┃
// ┗━━┛

function boxIt(arr) {
    largestStrNum = 0;
    arr.forEach(element => {
        if (element.length > largestStrNum) {
            largestStrNum = element.length
        }
    });
    let arrLast = arr.pop()
    let outputWithoutLast = `${drawTopBorder(largestStrNum)}\n`
    for (let i = 0; i < arr.length; i++) {
        outputWithoutLast += `${drawBarsAround(arr[i],largestStrNum)}\n${drawMiddleBorder(largestStrNum)}\n`
    }
    return finalOutput = outputWithoutLast + `${drawBarsAround(arrLast, largestStrNum)}\n${drawBottomBorder(largestStrNum)}`
}

console.log(boxIt(['Jon Snow', 'Cersei Lannister', 'Lannister']))

