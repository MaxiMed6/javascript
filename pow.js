function pow (x, y) {
  if (y === 0) {
    return 1; // возведение в 0 дает 1
  }
  if (y < 0) {
    return 1 / pow(x, -y);  //знак степени изменяется...
  }
  let result = 1; // начальное значение ибо 1*число=число
    for (let i = 0; i < y; i++) {
      result *= x; // итерация...
  }
return result;
}
console.log(pow(2, 3)); 
console.log(pow(8, -4)); 
console.log(pow(3, 0)); 
console.log(pow(2, -3)); 
