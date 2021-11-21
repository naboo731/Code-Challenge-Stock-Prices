/*This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
The best function will be given an array of stock prices in the order they happened throughout the day.
It should return the maximum possible profit on the stock for that day.
For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:*/



const stockArr = [1, 2, 3, 4, 5]
const stockArr2 = [15, 10, 20, 22, 1, 9]
const stockArr3 = [2, 3, 10, 6, 4, 8, 1]
const stockArr4 = [7, 9, 5, 6, 3, 2]
const stockArr5= [0, 100]

const best = (arr) => {
    const start = arr[0]
    const max = Math.max(...arr)
    if (arr.indexOf(start) < arr.indexOf(max)){
        return max - start
    }
    else {
        return 0
    }
}

console.log(best(stockArr5))