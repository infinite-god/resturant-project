 document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("loginBtn").addEventListener("click", function(){
        window.location.href = "dashboard.html";
    });
});
// let x = 10
// if (true){
//     let y = 20
//     var z = 25
//     console.log(x + y - z);   
    
// }
// console.log(x);
// console.log(z);
// console.log(y);
// let x = 4;
// if(true){
//     let y = 8;
//     if(true){
//         let z = 9
//         if(true){
//             let w = 1
//             console.log(x + y + z + w);
            
//         }
        
//     }
//     console.log(z)
// }
 
//  const hummus = function(factor) {
//  const ingredient = function(amount, unit, name) {
//  let ingredientAmount = amount * factor;
//  if (ingredientAmount > 1) {
//  unit += "s";
//  }
//  console.log(`${ingredientAmount} ${unit} ${name}`);
//  };
//  ingredient(1, "can", "chickpeas");
//  ingredient(0.25, "cup", "tahini");
//  ingredient(0.25, "cup", "lemon juice");
//  ingredient(1, "clove", "garlic");
//  ingredient(2, "tablespoon", "olive oil");
//  ingredient(0.5, "teaspoon", "cumin");
//  };
//  ,n  


 function greet(who) {
 console.log("Hello " + who);
 }
 greet("Harry");
 console.log("Bye")