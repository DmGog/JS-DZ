/*
Напишите функцию, которая получает подстроку из строки, начиная с определенного индекса*/

// let str = 'Hello, world!';
// let startIndex = 7;
//
// function getSubStr(str,a){
//    return str.slice(a)
// }
//
// console.log(getSubStr(str, startIndex))

/*
2) Напишите функцию, которая возвращает последние n элементов массива.*/

// function getLastElements(arr,n){
//     return arr.slice(-n)
// }
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3))


/*
Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.*/

// function extractPath(url, index) {
//     return url.slice(index);
// }
//
// console.log(extractPath('https://example.com/blog/article', 18))

/*
Задачи на splice:

    1) Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его*/

// let numbers = [1, 2, 3, 4, 5];
//
// function removeElement(arr, index) {
//     arr.splice(index, 1)
//     return arr
// }
//
// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

/*2) Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива*/

// let numbers = [1, 2, 4, 5];
//
// function insertElement(arr, index, index2) {
//
//     arr.splice(index, 0, index2)
//     return arr
// }
//
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]
/*
Задачи на reduce:


    1)	Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов в массиве*/

// let numbers = [1, 2, 3, 4, 5];
//
//
// function sumArray(arr) {
//     return arr.reduce(function (acc, current) {
//         return acc + current
//     }, 0)
// }
//
// console.log(sumArray(numbers)); // Выведет: 15

/*2)	Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce*/


// function sumStringLengths(arr) {
//    return  arr.reduce(function (acc, current) {
//         return acc + current.length
//     }, 0)
// }
//
// console.log(sumStringLengths(["apple", "banana", "cherry"])); // Выведет: 17


/*3)	Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах*/

// function sumNestedArrays(a) {
//
//     return a.flat(Infinity).reduce(function (acc, current) {
//         return acc + current
//     }, 0)
// }
//
// console.log(
//     sumNestedArrays([
//         [1, 2],
//         [3, 4, 5],
//         [6, 7, 8, 9,4],
//     ])
// ); // Выведет: 45


/*
4)	Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce*/

// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
//
// function removeDuplicates(arr) {
//     return arr.reduce(function (acc, current) {
//         if (!acc.includes(current)) {
//             acc.push(current);
//         }
//         return acc;
//     }, [])
// }
//
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]


/*5)	Найдите дубликаты в массиве с помощью метода reduce и верните массив дублированных элементов*/

// const array = [1, 2, 3, 2, 4, 5, 4, 5];

// function findDuplicates(arr) {
//     return arr.reduce((duplicates, item, index) => {
//         if (arr.indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
//             duplicates.push(item);
//         }
//         return duplicates;
//     }, []);
// }
//
// const duplicatesArray = findDuplicates(array);
// console.log(duplicatesArray); // Output: [2, 4, 5]


// 6/*)	Напишите функцию, которая принимает массив строк и возвращает объект, в котором ключи - это уникальные строки, а значения - количество их вхождений в массив*/

// const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
//
// const wordCount = words.reduce(function (acc, currentValue) {
//     acc[currentValue] = (acc[currentValue] || 0) + 1;
//     return acc;
//
// }, {})
//
// console.log(wordCount); // Output: { apple: 3, banana: 2, cherry: 1 }


/*7)	Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов*/
// const people = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 30},
//     {name: "Charlie", age: 22},
//     {name: "Charlie", age: 22},
// ];
//
// function getPropertyValues(arr, b) {
//     return arr.reduce(function (acc, current) {
//         acc.push(current[b])
//         return acc
//     }, [])
// }
//
//
// const names = getPropertyValues(people, "name");
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
