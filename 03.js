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


function sumStringLengths(arr) {
   return  arr.reduce(function (acc, current) {
        return acc + current.length
    }, 0)
}

console.log(sumStringLengths(["apple", "banana", "cherry"])); // Выведет: 17


