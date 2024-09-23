//1.1
const result = document.getElementById("first");
result.style.backgroundColor = "lightblue";
result.style.color = "red"
//1.2
const geri = document.querySelectorAll("li")
for (let i = 0; i < geri.length; i++){
    console.log(geri[i].textContent);
}

//1.3
let yellowBtn = document.getElementById("Highlight_List_Items")

yellowBtn.addEventListener("click", function (){
    for (let i = 0; i < geri.length; i++){
        geri[i].style.backgroundColor = "yellow"
    }
})
  

//2.1
let getItem = document.getElementById("itemList");
let addItemButton = document.getElementById("addItemButton")

addItemButton.addEventListener("click",function(){
let newListItem = document.createElement('li')
newListItem.textContent = "New Item"
getItem.appendChild(newListItem);
});

//2.1

































































// let selectItem = document.querySelectorAll('li');
// for (let i = 0; i < selectItem.length; i++){
//     selectItem[i].addEventListenerelement("click", function() {
//         for (let j = 0; j < listItems.length; j++) {
//             listItems[j].classList.remove('selected');
//             selectItem[j].style.fontWeight = "normal"; // Remove bold from all

//         }
//         listItems[i].classList.add('selected');
//         selectItem[i].style.fontWeight = "bold"; // Make the selected item bold

//     });
// }