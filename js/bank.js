// diposit button click
document.getElementById('deposit-button').addEventListener('click', function () {
    // find deposit input value or new user deposit amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositValue);

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


    // clear deposit box after get input
    depositInput.value = '';


})

// withdraw button click
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdraText);

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
    // clear input box
    withdrawInput.value = '';





})


/* document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit update
    const newDespositTotal = document.getElementById('deposit-input');
    const newDepositAmountText = newDespositTotal.value;
    const newDepositeTotalAmount = parseFloat(newDepositAmountText);

    const previousDepositeTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = previousDepositeTotal.innerText;
    const previousDepositeTotalAmount = parseFloat(previousDepositAmountText);

    const newTotalDeposit = previousDepositeTotalAmount + newDepositeTotalAmount;
    previousDepositeTotal.innerText = newTotalDeposit;

    // balance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    const newBalanceTotalAmount = balanceTotalAmount + newDepositeTotalAmount;
    balanceTotal.innerText = newBalanceTotalAmount;

    // clear
    newDespositTotal.value = '';
}) */