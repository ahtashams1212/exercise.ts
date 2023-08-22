"use strict";
/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
*/
let guestList = [
    "Ahtasham",
    "Abtahi",
    "Tayyab",
];
// Exercise 16 Solution

for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}

let newGuestAtBeginnibg = "Ali";
guestList.unshift(newGuestAtBeginnibg);

let newGuestInMiddle = "Mian Rehan";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);

let newGuestAtEnd = "Shoiab";
guestList.push(newGuestAtEnd);

console.log("New set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner`);
}