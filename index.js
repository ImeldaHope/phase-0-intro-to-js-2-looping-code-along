// // Code your solutions in this file

// for(let age = 30; age < 40; age++){
//     console.log(`I am ${age} years old. Happy birthday to me.`);
//     // debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//for loops iteration for thank you cards.
const friends = [];
let thankYous = [];
function writeCards(friends,celebration){
    for(let i=0; i < friends.length; i++){
        thankYous.push(`Thank you, ${friends[i]}, for the wonderful ${celebration} gift!`);
        console.log(thankYous);
    }
    return thankYous;
}

writeCards(friends, "surprise");

//while loop iteration for count down

function countDown(x){
    while (x > 0){
        console.log(x);   
        x--;     
    }
    console.log(x);
}



