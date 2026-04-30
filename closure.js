const cars = [
  ['Benz', 'Ford', 'Toyota'],
  ['Renault', 'Sienna', 'Peugeout'],
  ['Mazda', 'Volkswagen', 'Honda', 'Nissan'],
];

const updatedBoard = cars;

console.log(
  ...updatedBoard.map((innerArray) => {
    return [...innerArray];
  }),
);
