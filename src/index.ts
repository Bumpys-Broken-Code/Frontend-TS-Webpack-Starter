import { increment } from "./helpers/increment"
import { decrement } from "./helpers/decrement"


const countValue = <HTMLSpanElement>document.querySelector("#count-value")
const incrementBtn = <HTMLButtonElement>document.querySelector("#increment-btn")
const decrementBtn = <HTMLButtonElement>document.querySelector("#decrement-btn")

const handleIncrementClick = () => {
    const currentValue = parseInt(countValue.innerText)
    countValue.innerText = increment(currentValue).toString()
}

const handleDecrementClick = () => {
    const currentValue = parseInt(countValue.innerText)
    countValue.innerText = decrement(currentValue).toString()
}

incrementBtn.addEventListener('click', handleIncrementClick)
decrementBtn.addEventListener('click', handleDecrementClick) // not sure why I can't type this (type: 'click', handleDecrementClick)
