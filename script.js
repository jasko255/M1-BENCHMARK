// DOM 

//         31) Get element with ID "container" from the page
//         32) Get every "td" from the page
//         33) Create a cycle that prints the text inside every td of the page
//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add the class "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a UL
//         40) Write a function to empty a list

//31
let container = document.getElementById('container') 

//32
let collTd = document.querySelectorAll('td')

//33
for(let i = 0; i < collTd.length; i++){
    collTd[i].innerText = 'ha ha ha' + i
}
//34

let changeHead = function(){
    let head = document.getElementsByTagName('h1')
    head[0].innerText = 'NYC'
}

//35) Write a function to add an extra row to the table

