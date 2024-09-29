// Select the content div and change its styles
const divi = document.getElementById("content")
divi.style.backgroundColor = "lightblue"
divi.style.color = "red"

// Select all <li> items and log their text content
const listItems = document.querySelectorAll("#list li")
    for(let i = 0; i < listItems.length; i++){
        console.log(listItems[i].textContent);     
    }

// Add event listener to the button
const highlightBtn = document.querySelector("#btn");
highlightBtn.addEventListener("click", ()=>{
    for(let i = 0; i < listItems.length; i++){
    listItems[i].style.backgroundColor = "yellow";
    }
});



const newList = document.getElementById("new-list")
const addBtn = document.getElementById("add-item-btn")

addBtn.addEventListener("click", ()=>{
    const newItem = document.createElement("li")
    newItem.textContent = "New item"
    newList.appendChild(newItem);
})




// const createLiElemnt = document.createElement("li");
// createLiElemnt.addEventListener("click", (ev)=>{
//     ev.preventDefault();
//     const newLi = newList.createElement
//     listItems.textContent = "Add item";
    
// })

