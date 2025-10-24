document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnLogin").addEventListener("click", function(){
        window.location.href = "login.html";
    });
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnSignup").addEventListener("click", function(){
        window.location.href = "signup.html";
    });
});
// // function init() {
// //   var name = "Mozilla"; // name is a local variable created by init
// //   function displayName() {
// //     // displayName() is the inner function, that forms a closure
// //     console.log(name); // use variable declared in the parent function
// //   }
// //   displayName();
// // }
// // init();
// // function x(){
// //     var a = "7";
// //     function y(){
// //        console.log(a) 
// //       }
// //       return y; 
// // }
// // var z = x();
// // console.log(z)
// function createGame() {
//   let score = 0
//   function increaseScore() {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore() {
//     score -= points;
//     console.log(`-${points}pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return {increaseScore, decreaseScore, getScore}
// } 
// const game = createGame();
// game.increaseScore(9);
// game.increaseScore(9);
// game.decreaseScore(9);
// console.log(`the final score is ${game.getScore()}pts`);

// function chicken() {
//  return egg();
//  }
//  function egg() {
//  return chicken();
//  }
//  console.log(chicken() + " came first.");
//  // → ??

//  function minus(a, b) {
//  if (b === undefined) return-a;
//  else return a- b;
//  }
//  console.log(minus(10));
//  // →-10
//  console.log(minus(10, 5));
//  // → 5

//  function power(base, exponent) {
//  if (exponent == 0) {
//  return 1;
//  } else {
//  return base * power(base, exponent- 1);
//  }
//  }
//  console.log(power(2, 3));
//  // → 8

