// const catsDiv = document.getElementsByClassName("cats")[0];
// // console.log(catsDiv);

// function insertImage (src) {
//     catsDiv.insertAdjacentHTML("afterbegin", `
//         <img src="${src}" alt="Cat Image">    
//     `);
// }

// // insertImage("dsfdsf")

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         insertImage(data[0].url)
//     })
    // .catch(error => console.error('Error fetching the data:', error));


    // const artDiv = document.getElementsByClassName("art")[0];
    // console.log(artDiv);

    // fetch("http://colormind.io/list/")
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
            
    //         const atrImage = `<img src="${data[0].url}" alt="art>"`
    //         artDiv.innerHTML = atrImage; 
    //     })
    
const artDiv = document.getElementsByClassName("art")[0];
// console.log(artDiv);

fetch("https://placebear.com/200/300")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        
        const atrImage = `<img src="${data[0].url}" alt="art>"`
        artDiv.innerHTML = atrImage
    })



























































// 1. Create a new Promise that resolves with the value "Hello, World!".
// const question1 = new Promise((resolve) => {
//         resolve("hello world");
//     });
//     console.log(question1);
        
// 2. Create a new Promise that rejects with the value "Error occurred".
// const reject = new Promise((resolve,reject) => {
//     reject("Error occured")
// });

// reject
//     .catch(error => {
//         console.error(error); 
//     });

// 3. Write a Promise that resolves after 2 seconds with the value "Resolved!".
// const resolvedAfterTwoMinute = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved");
//     },2000);
// });

// resolvedAfterTwoMinute.then((result) => {
//     console.log(result);
// });
// 4. Write a Promise that rejects after 1 second with the value "Rejected!".

// const rejectAfetrOneSecond = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     reject("rejected")
// },1000);
// });

// rejectAfetrOneSecond
//     .catch(error => {
//         console.error(error);
//     });
    
// 5. Create a Promise that resolves with a given value and log the resolved value using .then().
// const resolve = new Promise((resolve,reject) => {
//     resolve("hello world");
// });
// resolve.then(result =>{
//     console.log(result);   
// })

// 6. Create a Promise that rejects with a given value and handle the rejection using .catch().

// 7. Write a Promise that resolves with the value "Hello, World!" and logs "Promise Resolved!" after it resolves.

// 8. Write a function that returns a resolved Promise with a given message.

// 9. Write a function that returns a rejected Promise with a given error message.

// 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".

// 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".

// 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().

// 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.

// 14. Write a function that returns a Promise which resolves after a given number of milliseconds.

// 15. Write a Promise that resolves with the current date and time.

// 16. Use Promise.all() to wait for two Promises to resolve and then log their results.

// 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".

// 18. Write a function that returns a Promise which resolves with a random number after 1 second.

// 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.

// 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().

// 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().

// 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.

// 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.

// 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.

// 25. Write a Promise that resolves with the square of a given number.

// 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.

// 27. Write a function that returns a Promise which resolves with a greeting message for a given name.

// 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.

// 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.

// 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.