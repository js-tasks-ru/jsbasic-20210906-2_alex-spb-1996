# Создайте калькулятор

Создайте объект `calculator` (калькулятор) с тремя методами:

- `read(a, b)` (читать) запрашивает два значения и сохраняет их как свойства объекта.
- `sum()` (суммировать) возвращает сумму сохранённых значений.
- `mul()` (умножить) перемножает сохранённые значения и возвращает результат.

```js
let calculator = {
  read() {
    this.a = +prompt('Введите значение a', 0);
    this.b = +prompt('Введите значение b', 0);
  }
  mul() {
    return this.a * this.b;
  },
  sum() {
    return this.a + this.b;
  },
};

calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15
```
