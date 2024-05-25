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

let {name, age, city} = {...user}

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/


// Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
// и вывести в консоль эти переменные

/*const fruits = ["apple", "banana", "orange"];
const [, secondFruit, thirdFruit] = [...fruits]

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/


// Использовать деструктуризацию в параметрах функции

const person = {name: "Alice", age: 30};

// Деструктуризация в параметрах функции
function printPersonDetails() {

    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30
