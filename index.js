//1//

// const num = prompt('read num');

// function colonOdd(num) {
//     let newNum = '';

//     for (let i = 0; i < num.length; i++) {
//         if ((num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0) && (num[i + 1])) {
//             newNum += num[i] + ':';
//         } else {
//             newNum += num[i];
//         }
//     }

//     return newNum;
// }
// console.log(colonOdd(num));






// 2///


// var array = [5, 1, 1, 9, 9, 6, 15, 4, 1];

// function getFirst(array, n) {
//     if (array == null) return false;
//     if (n == null) return array[0];
//     return array.slice(0, n)
// };

// console.log(getFirst(array));
// console.log(getFirst(array, 4));
// console.log(getFirst(array, -3));





//3//



// var array = [5, 1, 1, 9, 9, 6, 15, 4, 1];

// function getLast(array, n) {
//     if (array == null) return false;
//     if (n == null) return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));
// };

// console.log(getLast(array));
// console.log(getLast(array, 4));
// console.log(getLast(array, 12));






// //4//
// (тут тупнечёк )


// const mas1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const mas2 = [1, 3, 5, 7, 9, 11, 19, 34, 0];

// function testUnique(A) {
//     var n = A.length;
//     for (var i = 0; i < n - 1; i++) {
//         for (var j = i + 1; j < n; j++) {
//             if (A[i] === A[j]) return false;
//         }
//     }
//     return true;
// };




//5//


// function sumOfSquares(arr) {
//     return arr.reduce(function(prev, cur) {
//         return prev + cur * cur;
//     })
// }

// console.log(sumOfSquares([14, 24, 68, 2, 3]));



//6//


// не получается сортировать при элементах в массиве ,но с  числами всё работает.



// const logs = [{
//         name: 'Sergey',
//         age: 25
//     },
//     {
//         name: 'Andrey',
//         age: 42
//     },
//     {
//         name: 'Vasa',
//         age: 35
//     }
// ];
// console.log(logs);
// -----------------------------------------------------------------------------------------------------------------
// const logs = [1, 14, 33, 785663, 234236, 4, 7, 78, 32, 23, 57, 8, 34, 7, 7, 3, 2, 8, 8];
// console.log(logs);

// function sortBy(a, b) {
//     console.log();
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;

// }
// console.log(logs.sort(sortBy));



// 7 // 



// const logs = [{
//         name: 'Sergey',
//         age: 25
//     },
//     {
//         name: 'Andrey',
//         age: 42
//     },
//     {
//         name: 'Vasa',
//         age: 35
//     }
// ];
// console.log(logs);

// function propertyValue(array, key) {
//     const arr = [];
//     let index = -1;
//     let item;

//     while (++index < array.length) {
//         item = array[index];

//         if (item.hasOwnProperty(key)) {
//             arr[arr.length] = item[key];
//         }
//     }

//     return arr;
// }
// console.table(propertyValue(logs, 'name'));
// console.table(propertyValue(logs, 'age'));