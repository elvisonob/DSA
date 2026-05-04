const cars = [
  ['Benz', 'Ford', 'Toyota'],
  ['Renault', 'Sienna', 'Peugeout', 'Avalon'],
  ['Mazda', 'Volkswagens', 'Nissan'],
];

const updatedBoard = cars;

console.log(
  ...updatedBoard.map((innerArray) => {
    return [...innerArray];
  }),
);
