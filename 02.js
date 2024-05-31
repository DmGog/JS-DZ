/*push():

Добавьте один или несколько элементов в конец массива

Исходный массив:*/
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('яблоко','банан','апельсин')
// console.log(fruits)


/*Удалите последний элемент в массиве и верните этот элемент

Исходный массив:*/

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const lastUser = users.pop()
//
// console.log (users)
// console.log (lastUser)

/*Удалите первого юзера и верните его

Исходный массив:*/

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const firstUser = users.shift()
//
// console.log (users)
// console.log (firstUser)

/*Добавьте один и более элементов в начало массива

Исходный массив:*/

// const users = [
//     {
//         id: 1,
//         name: "Bob",
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: "Alex",
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: "Ann",
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: "Donald",
//         isStudent: false,
//     },
// ];
//
// users.unshift({id: 0, name: "Viz", isStudent: true})
// console.log(users)


/*Сделать reverse слова

Исходная строка:*/
//
// const str = 'JavaScript is awesome';
// console.log(str.split(" ").reverse().join(" "))

/*Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.*/

// function mergeArrays (a,b){
//     let c = []
//     console.log(c.concat(a,b))
// }
// mergeArrays([1,2,3,4], [5,6,7,8])
// mergeArrays(["krot"], ["enot"])

/*Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины*/
// function flattenArray(arr){
//     console.log(arr.flat(Infinity))
// }
//
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]]));

/*Напишите функцию JavaScript, которая находит первый элемент в массиве, удовлетворяющий заданному условию.

    Пример:

Входной массив: [10, 20, 30, 40, 50]
Условие: Найти первый элемент больше 25
Выходные данные: 30

Входной массив: ["яблоко", "банан", "апельсин", "киви"].
    Условие: Найти первый элемент, начинающийся на "o".
    Выходные данные: "апельсин"

Необходимо написать функцию findFirstElement, которая принимает на вход массив и функцию условия и возвращает первый элемент в массиве, удовлетворяющий условию.*/

// const numbers = [10, 20, 30, 40, 50];
// const fruits = ["яблоко", "банан", "апельсин", "киви"]
//
// function findFirstElement(arr, callback) {
//     return arr.find(callback)
// };
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25);
//
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith("я"));
// console.log(firstFruitStartingWithO);


/*Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.

    Пример:

Входной массив: [1, 2, 3, 4, 5]
Элемент для проверки: 3
Выход: true

Входной массив: ["яблоко", "банан", "апельсин", "киви"].
    Элемент для проверки: "виноград"
Выход: false

Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true, если элемент присутствует в массиве, и false в противном случае.*/

// const arr = [1, 2, 3, 4, 5];
// const arr2 = ["яблоко", "банан", "апельсин", "киви"];
// console.log(arr.includes(4))
// console.log(arr2.includes("вино"))

/*Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы, которые больше заданного значения.

    Пример:

Входной массив: [10, 20, 30, 40, 50]
Значение для фильтрации: 25
Выходной массив: [30, 40, 50]

Входной массив: [5, 15, 25, 35, 45]
Значение для фильтрации: 20
Выходные данные: [25, 35, 45]

Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и значение и возвращает новый массив, содержащий только элементы, превышающие указанное значение.*/


// const arr = [10, 20, 30, 40, 50];
//
// const arr2 = [5, 15, 25, 35, 45];
//
// function filterGreaterThan(myArr, n) {
//     let c = []
//     c = myArr.filter((e) => {
//         return e > n
//     })
//     return c
// }
//
// console.log(filterGreaterThan(arr, 25))
// console.log(filterGreaterThan(arr2, 20))

/*
Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.*/

// let people = [
//     {name: "John", age: 30},
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 35},
// ];
//
// function sortAlphabeticallyByProperty(arr,myName) {
//
//     return arr.sort((a, b)=> a[myName].localeCompare(b[myName]))
// }
//
// console.log(sortAlphabeticallyByProperty(people, "name"))

/*
Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания*/

// let numbers = [5, 2, 8, 1, 4];
//
// function sortDescending(arr) {
//     return arr.sort((a, b) => b - a)
// }
//
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]

/*
1)	Отформатируйте data в массив объектов с такими вот св-ми*/
/*[
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' }
]*/


// let data = [
//     {value: 1, name: "Option 1"},
//     {value: 2, name: "Option 2"},
//     {value: 3, name: "Option 3"},
// ];
//
// let res = data.map(el=>({
//     value: el.value,
//     label: el.name
// }))
// console.log(res)

// let formattedData = data.map(item => {
// мапим объект data и возвращаем объект с нужными нам ключами и записываем в качестве значений - значения из массива объектов дата
//     return {
//         value: item.value,
//         label: item.name
//     };
// });


/*2)	У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных. Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9

Исходный массив:*/


// let products = [
//     {id: 1, name: "Apple", price: 1.99},
//     {id: 2, name: "Banana", price: 0.99},
//     {id: 3, name: "Orange", price: 2.49},
// ];
//
// let res = products.map((el) => {
//     return {
//         id: el.id,
//         name: el.name,
//         price: el.price,
//         discountPrice: (el.price * 0.9)
//     }
//
// })
//
// console.log(res)

/*
1)	Напишите функцию, которая определяет, является ли переданная строка палиндромом. Палиндромом считается строка, которая читается одинаково как слева направо, так и справа налево(split, reverse, join)*/

// function isPalindrome(str) {
//     let str2 = str.split("").reverse().join("");
//     return (str === str2 ? str2 : "строка не палиндром");
//
// }
//
// console.log(isPalindrome("level"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

/*2)	Выведите все дублирующиеся элементы массива(filter, indexOf)

например исходный массив*/

// let arr1 = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
//
// function removeDublicates(arr) {
//   let res = arr.filter((el, index) => arr.indexOf(el) !== index)
//    console.log(res)
// }
// removeDublicates(arr1)

/*
3)	Напишите функцию JavaScript для сортировки массива объектов по определенному свойству в порядке возрастания, используя метод Array.prototype.sort()(тут кастомная сортировка придется чуть-чуть поискать и подумать)

Пример*/


// const persons = [
//     {name: "Bob", age: 30},
//     {name: "Alice", age: 425},
//     {name: "Charlie", age: 3},
// ];
//
// function sortByProperty(arr, proper) {
//     return (arr.sort((a, b) => {
//         if (a[proper] > b[proper]) {
//             return 1
//         }
//         if (a[proper] < b[proper]) {
//             return -1
//         } else return 0
//     }))
// }
//
// function sortProperty (arr, proper){
//     return (arr.sort((a,b)=> a[proper].localeCompare(b[proper])))
// }
//
//
// console.log(sortByProperty(persons, "age"))
// console.log(sortProperty(persons, "name"))

