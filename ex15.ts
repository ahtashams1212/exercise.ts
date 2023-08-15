//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
const guests = [
    {name : "Abtahi", email : "abtahi@gmail.com"},
    {name : "Tabish", email : "tabish@gmail.com"},
    {name : "Zuki", email : "zuki@gmail.com"},
    {name : "Rana Adullah", email : "ranaabdullah@gmail.com"},
    {name : "Shoaib", email : "shoaib@gmail.com"},
];
//one guest cannot make it
guests.splice(1,1);
//send new invitation
for(const guest of guests) {
   sendInvitation(guest.email);
}