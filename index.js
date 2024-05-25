// У вас есть объект пользователя с информацией о его имени и адресе. Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор)

/*const user = {
    name: "John",
    address: {
        city: "New York",
        country: "USA",
    },
};*/

/*
const updatedUser = {...user, address: {...user.address}}
updatedUser.address.city = "Toronto"
console.log(updatedUser);
console.log(user)
*/

// У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения)
/*const originalArray = [1, 2, 3, 4, 5];
const newArray = addElementToArray(originalArray, 6);

function addElementToArray(arr, n) {
    const c = [...arr]
    c.push(n)
    return c
}

console.log(newArray); // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]
console.log(originalArray);*/

// Задачи для отработки деструктуризации:

// Извлечь значения свойств объекта в переменные name, age, city

/*const user = {name: "John", age: 25, city: "New York"};

let {name, age, city} = user

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/


// Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
// и вывести в консоль эти переменные

/*const fruits = ["apple", "banana", "orange"];
const [, secondFruit, thirdFruit] = fruits

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/


// Использовать деструктуризацию в параметрах функции

/*const person = {name: "Alice", age: 30};

// Деструктуризация в параметрах функции
function printPersonDetails({name,age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}*/

// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30

// Установите значение по умолчанию для свойства year которого нет в объекте car

// const car = {brand: "Toyota", model: "Camry"};

// выведите в консоль его
/*const {brand, model, year = "2022"} = car

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/

// Извлечь значения из массива объектов
/*const students = [
    {name: "Alex", grade: "A"},
    {name: "Emma", grade: "B"},
    {name: "Chris", grade: "C"},
];*/
/*const student1 = students[0].name
const student3 = students[2].name*/
/*const [student1, , student3] = students.map(e => e.name)

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris*/


// Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
/*const person = {firstName: "Max", lastName: "Johnson"};

const firstName = "first Name: Nina";
const lastName = "last Name: Ivanov";

const {firstName: myName, lastName: secondName, age = "25"} = person*/
// и вывести результат в консоль
/*
console.log(myName); // 'Max'
console.log(secondName); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)*/
