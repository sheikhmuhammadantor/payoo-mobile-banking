// Add Money Form Functionality;
document.getElementById("btnAddMoney").addEventListener("click", (even) => {
  even.preventDefault();
  let balance = getInnerTextById("currentBalance");
  const amount = getInputValueById("addMoneyInput");
  const pin = getInputValueById("addMoneyPin");

  if (!isNaN(amount)) {
    if (pin === 1234) {
      balance += amount;
      document.getElementById("currentBalance").innerText = balance;
      addTransactionHistory(amount, balance, 'add');
    } else {
      alert("Enter Valid PIN");
    }
  } else {
    alert("Enter Valid Amount");
  }

  document.querySelector("#addMoneyInput").value = "";
  document.querySelector("#addMoneyPin").value = "";
});


// Cash Out Form Functionality;
document.getElementById("btnCashOut").addEventListener("click", (even) => {
  even.preventDefault();
  let balance = getInnerTextById("currentBalance");
  const amount = getInputValueById("cashOutInput");
  const pin = getInputValueById("cashOutPin");

  if (amount > balance) {
    alert(`You Have Only ${balance} Balance 😒`);
  } else if (!isNaN(amount)) {
    if (pin === 1234) {
      let balance = getInnerTextById("currentBalance");
      balance -= amount;
      document.getElementById("currentBalance").innerText = balance;
      addTransactionHistory(amount, balance, 'out');
    } else {
      alert("Enter Valid PIN");
    }
  } else {
    alert("Enter Valid Amount");
  }

  document.querySelector("#cashOutInput").value = "";
  document.querySelector("#cashOutPin").value = "";
});


// Display Specified Section;
document.getElementById("addMoneyButton").addEventListener("click", () => {
  onlyShowSection("addMoneySection");
});

document.getElementById("cashOutButton").addEventListener("click", () => {
  onlyShowSection("cashOutSection");
});

document.getElementById("transactionButton").addEventListener("click", () => {
  onlyShowSection("transactionsSection");
});
