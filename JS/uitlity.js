//  Get Input Fled's Value -
function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  return parseFloat(inputValue);
}


//  Get Any Element's Value With Out Input-
function getInnerTextById(id) {
  const inputValue = document.getElementById(id).innerText;
  return parseFloat(inputValue);
}


// Display Only Selected Specified Section;
function onlyShowSection(id) {
  document.getElementById("addMoneySection").classList.add("hidden");
  document.getElementById("cashOutSection").classList.add("hidden");
  document.getElementById("transactionsSection").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}


// Transaction Section Functionality;
function addTransactionHistory(amount, balance, what) {
  if (what === 'out') {
    const div = document.createElement('div');

    div.innerHTML = `
      <div class="mb-1 bg-yellow-400 p-1 rounded-lg">
        <h1 class="text-xl">Cash Out</h1>
        <p>${amount} Tk Withdraw, New Balance ${balance}</p>
      </div>
    `

    document.getElementById('transactionsSection').appendChild(div);

  } else if (what === 'add') {
    const div = document.createElement('div');

    div.innerHTML = `
      <div class="mb-1 bg-green-400 p-1 rounded-lg">
        <h1 class="text-xl">Add Money</h1>
        <p>${amount} Tk Added, New Balance ${balance}</p>
      </div>
    `

    document.getElementById('transactionsSection').appendChild(div);
  }
}
