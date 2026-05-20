let c = [1, 2];
console.log(`c = ${c}`);
add(c, 3);
console.log(`c = ${c}`);

function add(array, element) {
  array = [element];
}
