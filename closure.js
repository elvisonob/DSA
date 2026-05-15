let nums = [1, 2, 3, 4, 5, 6];

let result = nums
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((a, b) => a + b);

let zoo = new Map();

zoo.set('Zebra', 5);
zoo.set('Orange', 4);
zoo.set('Mango', 6);
zoo.set('Apple', 10);

console.log(zoo.get('Apple'));

for (let [key, value] of zoo) {
  console.log(key + ':' + value);
}

const userScores = new Map();

userScores.set('alice', 100);
userScores.set('bob', 75);

console.log(userScores);
