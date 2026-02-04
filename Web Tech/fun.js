// // (function show() {
// //     console.log("This is fun.js");
// // })();
// // //iife immediately invoked function expression

// ()=>{
//     console.log("This is fun.js arrow function");
// };

let student = {
    name: "Kavin",
    showName: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 10);
    }
};

student.showName(); // Kavin
