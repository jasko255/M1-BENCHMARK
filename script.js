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
console.log('my container   --- ', container);
//32
let collTd = document.querySelectorAll('td')

//33
// for(let i = 0; i < collTd.length; i++){
//     collTd[i].innerText = 'ha ha ha' + i
//}
//34

let changeHead = function(){
    let head = document.getElementsByTagName('h1')
    head[0].innerText = 'NYC'
}

//35) Write a function to add an extra row to the table

let addATro = function(){
    let table = document.getElementsByTagName('table')
    
    let newRow = document.createElement('tr')
    table[0].appendChild(newRow)
}
console.log(addATro());

// 36) Write a function to add the class "test" to each row in the table

let addClass = function(){
let myTrs = document.getElementsByTagName('tr')
for(let i = 0; i < myTrs.length; i++){
    myTrs[i].setAttribute('class', 'test')
}

}


// 37) Write a function to add a red background to every link in the page
let colorItABit = function(){
    let myAs = document.getElementsByTagName('a')
    for(let i = 0; i < myAs.length; i++){
        myAs[i].style.backgroundColor = 'red'
    }
}

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function() {
     (console.log('Page loaded'));
}


// 39) Write a function to add new items to a UL

let addNewUlli = function(){
    let ulist = document.getElementsByTagName('ul')
    
    let newLi = document.createElement('li')
    newLi.innerText = 'Im new LI'
    ulist[0].appendChild(newLi)
}


// 40) Write a function to empty a list
let newButton = document.createElement('button')
newButton.innerText = 'LETS ERASE IT'
document.getElementsByTagName('body')[0].appendChild(newButton)


let emptyList = function(){
    let list = document.getElementsByTagName('li')
     for(let i =0; i <list.length; i++){   
    list[i].innerText = ' '
   
     }
}




newButton.addEventListener('click', emptyList)

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// 42) Add a button to hide every image on the page
// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page


// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL

// let hoverIt = function(event){
//     event.target.style.backgroundColor = 'yellow'
// }

// let myAs = document.getElementsByTagName('a')
// console.log(myAs);


// myAs[0].addEventListener('mouseover', hoverIt() )

// 42) Add a button to hide every image on the page

let eraseButtonPics = document.createElement('button')
eraseButtonPics.innerText = 'Hide em all'
let parent = document.getElementsByTagName('body')[0]
let footer = document.getElementsByTagName('footer')[0]


let hidePics = function(){
    let pcs = document.querySelectorAll('img')
    for(let i = 0; i < pcs.length; i++){
        pcs[i].style.display = 'none'
    }
}

parent.insertBefore(eraseButtonPics, footer )
eraseButtonPics.addEventListener('click', hidePics)