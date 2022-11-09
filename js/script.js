'use strict'

const btns = document.querySelectorAll('.btn-tip')
const priceInp = document.querySelector('.box__input')
const peopleInp = document.querySelector('.input-people')
const resetBtn = document.querySelector('.reset-btn')
const customInp = document.querySelector('.custom-input')
const pricePanel = document.querySelector('.panel__price')
const priceTotal = document.querySelector('.price-total')
const priceTip = document.querySelector('.price-tip')
const errorInfo = document.querySelector('.error')
let peopleVal
let priceVal

const resetTip = () => {
    pricePanel.textContent = '$0.00'
    priceTotal.textContent = '$0.00'
    peopleInp.value = ''
    priceInp.value = ''
    customInp.value = ''
    errorInfo.style.opacity = 0
}

const btnsTips = (e) => {
    const tips = e.target.value
    peopleVal = parseFloat(peopleInp.value)
    priceVal = parseFloat(priceInp.value)
    let sum = (priceVal + priceVal * tips) / peopleVal
    let sumTip = (priceVal * tips) / peopleVal

    if (peopleInp.value === '0' || peopleInp.value === '' || priceInp.value === '' || priceInp.value === '0') {
        errorInfo.style.opacity = 1
        return  // konczy działanie funkcji
    } else if (sum) {
        priceTip.textContent = `$${Math.floor(sumTip * 100) / 100}`
        priceTotal.textContent = `$${sum.toFixed(2)}`
        errorInfo.style.opacity = 0
    } else {
        priceTotal.textContent = tips
    }
}

const customInputTip = (e) => {
    if (e.key === 'Enter') {
        if (customInp.value === '0' || peopleInp.value === '' || peopleInp.value === '0' || priceInp.value === '') {
            errorInfo.style.opacity = 1
            return
        } else {
            const inpVal = (customInp.value / 100)
            peopleVal = parseFloat(peopleInp.value)
            priceVal = parseFloat(priceInp.value)

            let sumInp = (priceVal + priceVal * inpVal) / peopleVal
            let sumInpTip = (priceVal * inpVal) / peopleVal
            priceTip.textContent = `$${Math.floor(sumInpTip * 100) / 100}`
            priceTotal.textContent = `$${sumInp.toFixed(2)}`
            errorInfo.style.opacity = 0
        }
    }
}
// all button tip
btns.forEach((btn) => {
    btn.addEventListener('click', btnsTips)
})

customInp.addEventListener('keydown', customInputTip)
resetBtn.addEventListener('click', resetTip)