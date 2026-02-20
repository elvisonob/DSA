function account(currentBalance) {
  let currentMoney = currentBalance;
  console.log(currentMoney);

  return function withdrawAmount(funds) {
    currentMoney = currentMoney - funds;
    console.log('remaining money', currentMoney);
  };
}

const creditCard = account(1000);
creditCard(900);
creditCard(50);
creditCard(10);
