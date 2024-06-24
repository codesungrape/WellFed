let buttonOne = document.getElementsByClassName('favorites-button')
let buttonTwo = document.getElementsByClassName('shopping-list-button')

// create an NodeList array variable to store all .buttonTwo
const allButtonTwo = document.querySelectorAll('.shopping-list-button');

//turn the NodeList array into a usable array-like object
//const buttonArray = Array.from(buttonTwo);
const buttonArray = Array.from(allButtonTwo);

console.log(buttonArray)



// convert HTMLCollection to an array and then apply for each arrayitem
Array.from(buttonOne).forEach(buttonOne => {
    const favesAdd = () => {
        //when button is pressed, show message saying 'item added'
        buttonOne.innerHTML = 'Item added!';
        buttonOne.style.backgroundColor = 'rgb(255, 0, 255)';
    };
    //add event listener
buttonOne.onclick = favesAdd;
});

// convert HTMLCollection to an array and then apply for each arrayitem
Array.from(buttonTwo).forEach(buttonTwo => {
    const shoppingList = () =>{
        //when mouse clicks in button, the button changes colour
        buttonTwo.style.backgroundColor = '#e6f7ff';
        buttonTwo.style.color = '#003366';
        buttonTwo.innerHTML = 'Item added to shopping list!'
    };
    //add event listener
buttonTwo.onclick = shoppingList;
})

document.alert('Here is a  message');


