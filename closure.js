const cars = [
  ['Benz', 'Ford'],
  ['Renault', 'Sienna', 'Peugeout', 'Avalon'],
  ['Mazda', 'Volkswagens', 'Nissan'],
];

const updatedBoard = cars;

console.log(
  ...updatedBoard.map((innerArray) => {
    return [...innerArray];
  }),
);
