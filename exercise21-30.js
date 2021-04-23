// JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete Email from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string in the previous array
//         26) Create an array with 100 random numbers in it
//         27) Wrote a function to get the MAX and the MIN from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays and returns the longest one
//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

//21
let x = "John" 
let y = "Doe"
console.log(x + ' <> ' + y);

//22
let me = {
    name: 'Jan',
    surname:'Kondziarz',
    email: 'jasko255@gmail.com'
}
//23
delete me.email
console.log(me);
//24
let myArr = ['1','2','3','4','5','6','7','8','9','10']
console.log(myArr.length);
//25
for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

//26
let myRanArr = []
for(let i = 0; i < 100; i++){
    let myRan = Math.floor(Math.random() * 1001)
    myRanArr.push(myRan)
} 
console.log(myRanArr);

//27
let myMinMax = function(arr){
    // let myMax = Math.max(a)
    // let myMin = Math.min(a)

    return 'My max: ' + Math.max(...myRanArr) + ' and my min: ' + Math.min(...myRanArr)
}

console.log(myMinMax());

//28) Create an array of arrays, in which every array has 10 random numbers

// let newArr = []
// let helpArr= []
// // 
// for(let i = 0;  i < 10; i++){
//     let myRan = Math.floor(Math.random() * 101)
//     helpArr.push(myRan)
//     // if (helpArr.length === 10){

//     // }
//     for(let j = 0; j < 10; j++){
//         newArr.push(helpArr)
//     }


// }
// console.log(newArr);

let newArr = []
let helpArr= []
// 
for(let i = 0;  i < 100; i++){
    let myRan = Math.floor(Math.random() * 101)
    helpArr.push(myRan)
   
    if (helpArr.length === 10){

        for (let y = 0; y < 10; y++){
        newArr.push(helpArr.slice(0,10))}

    }
    

} 
console.log(newArr);

//29) Create a function that gets 2 arrays and returns the longest one

let verifyArr = function(a, b){
    if (a.length > b.length){
    return a
 } else {
     return b
 }
}

console.log('which one is longer: ', verifyArr(myArr, myRanArr));

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
let karl = [5, 3, 5, 7, 8, 8, 9]
let bob = [7,9,8,8,9,9,7,7,7]


let arrOfNum = function(c, z){
    let see = c.reduce((a, b) => a + b, 0)
    let bee = z.reduce((a, b) => a + b, 0)
    if (see  > bee ){
    return see
 } else {
     return bee
 }
}

console.log('which one has bigger sum: ', arrOfNum(karl, bob));
// let see = helpArr.reduce((a, b) => a + b, 0)
// console.log(see);