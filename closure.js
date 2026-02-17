function account(currentBalance) {
  let currentMoney = currentBalance;
  console.log(currentMoney);

  return function withdrawAmount(funds) {
    currentMoney = currentMoney - funds;
    console.log('remaining', currentMoney);
  };
}

const creditCard = account(1000);
creditCard(1000);
creditCard(50);
creditCard(10);
