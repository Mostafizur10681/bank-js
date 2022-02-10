function getInputValue(inputID) {
    const input = document.getElementById(inputID);
    const inputValueText = input.value;
    const inputValue = parseFloat(inputValueText);
    // clear deposit box after get input
    input.value = '';

    return inputValue;
}

// diposit button click
document.getElementById('deposit-button').addEventListener('click', function () {
    // find deposit input value or new user deposit amount
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
    // console.log(depositValue);
    const newDepositAmount = getInputValue('deposit-input')

    // get deposit amount box & see the previous deposit amount in the box
    const depositeTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    // newTotal = previousAmount + newAmount
    const newDepositeTotal = previousDepositAmount + newDepositAmount;
    // console.log(newDepositeTotal);

    depositeTotal.innerText = newDepositeTotal;

    // update balace
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    /* // clear deposit box after get input
    depositInput.value = ''; */


})

// withdraw button click
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdraText); */
    const newWithdrawAmount = getInputValue('withdraw-input')

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance for withdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
    /*     // clear input box
        withdrawInput.value = ''; */

});
