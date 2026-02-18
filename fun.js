/*const afficher = (param) => {
  console.log(param + 1);
};
afficher(2);
const calc = () => 3 + 2;
console.log(calc());*/
const array = [1, 2, 3];
array.forEach((value, index) => {
  if (value === 1) {
    return;
  }
  console.log(value);
  console.log(index);
});
