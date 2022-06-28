function totalCost() {
    const inputFoodBtn = document.getElementById("inputFoodBtn");
    const inputFoodBtnText = inputFoodBtn.value;
    const inputFoodBtnValue = parseFloat(inputFoodBtnText);
    const inputRentBtn = document.getElementById("inputRentBtn");
    const inputRentBtnText = inputRentBtn.value;
    const inputRentBtnValue = parseFloat(inputRentBtnText)
    const inputClothesBtn = document.getElementById("inputClothesBtn");
    const inputClothesBtnValue = parseFloat(inputClothesBtn.value);
    let totalExpense = (inputFoodBtn.value + inputRentBtn.value + inputClothesBtn.value)
    return totalExpense
}


function forMinus(inputfield, items) {
    const inputFoodBtn = document.getElementById(inputfield);
    const inputFoodBtnText = inputFoodBtn.value;
    const forminuss = document.getElementById(items)
    if (inputFoodBtn.value < 0) {
        forminuss.style.display = "block"
        return
    }
    else {
        forminuss.style.display = "none"
    }
}


function incomeBalance(inputValue) {
    const inputIncomeBtn = document.getElementById(inputValue);
    const inputIncomeBtnValue = parseFloat(inputIncomeBtn.value)
    return inputIncomeBtnValue
}
9
document.getElementById("calculate").addEventListener("click", function () {
    // minus function call
    forMinus("inputIncomeBtn", "incomeMinusNumber")
    forMinus("inputFoodBtn", "foodMinusNumber")
    forMinus("inputRentBTn", "rentMinusNumber")
    forMinus("inputClothesBtn", "clothesMinusNumber")

    // --------------- error handle for string----------
    if (isNaN(totalCost())) {
        alert('Please Fill all Inputs with Number')
    }
    else if (isNaN(incomeBalance("inputIncomeBtn"))) {
        alert('Please Fill all Inputs with Number')
    }
    else {
        const totalExpenses = document.getElementById("totalExpenses");
        const balance = document.getElementById("balance");
        const balances = incomeBalance("inputIncomeBtn") - totalCost()
        const incomeBalanceLow = document.getElementById("incomeBalanceLow")
        if (incomeBalance("inputIncomeBtn") < totalCost()) {
            incomeBalanceLow.style.display = "block"
        }
        else {
            totalExpenses.innerText = totalCost()
            balance.innerText = balances
            incomeBalanceLow.style.display = "none"
        }
    }
})


document.getElementById("save").addEventListener("click", function () {
    // forMinus("savebtn","saveMinusNumber")
    const savebtnValue = incomeBalance("savebtn")
    const savebtn = document.getElementById("savebtn")
    const saveMinusNumber = document.getElementById("saveMinusNumber")
    const remainingBalance = document.getElementById("remainingBalance")
    const saveBalance = document.getElementById("saveBalance")
    const saveNoBalance = document.getElementById("saveNoBalance")
    const blankBlalance = document.getElementById("blankBlalance")
    const saveBalanceDashboard = document.getElementById("saveBalanceDashboard")
    const parsentValue = (incomeBalance("inputIncomeBtn") * savebtnValue) / 100;
    if (savebtn.value < 0 || savebtn.value > 100) {
        saveMinusNumber.style.display = "block"
        saveNoBalance.style.display = "none"
        blankBlalance.style.display = "none"
    }
    else if ((incomeBalance("inputIncomeBtn") - totalCost() < parsentValue)) {
        saveNoBalance.style.display = "block"
        saveMinusNumber.style.display = "none"
        blankBlalance.style.display = "none"
    }
    else if (isNaN(incomeBalance("inputIncomeBtn"))) {
        blankBlalance.style.display = "block"
        saveNoBalance.style.display = "none"
        saveMinusNumber.style.display = "none"
    }
    else if (isNaN(savebtnValue)) {
        alert("you can use only number, Avoid string or Blank")
    }
    else {
        blankBlalance.style.display = "none"
        saveNoBalance.style.display = "none"
        saveMinusNumber.style.display = "none"
        saveBalance.innerText = parsentValue.toFixed(2)
        saveBalanceDashboard.innerText = parsentValue.toFixed(2)
        remainingBalance.innerText = ((incomeBalance("inputIncomeBtn") - totalCost()) - parsentValue).toFixed(2)
    }
})