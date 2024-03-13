"use strict";
//question 2
let message = ("hello eric , would you like to lern some python today?");
console.log(message);
let name1 = ("yemna");
console.log(name1);
//question 3
//lowercase
let personName = "Karachi";
console.log("lowercase;", personName.toLowerCase());
//uppercase
console.log("uppercase;", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase;", personName.replace(/\bw/g, c => c.toUpperCase()));
//question 4
let quote = "a person who never made a mistake never tried anything new.";
let famous_person = "Albert Einstein";
let messaGe = `${famous_person} once said, ${quote}`;
console.log(messaGe);
//question 5
let personname = "A person who never made a mistake never tried anything new.";
let famousperson = "Albert Einstein";
let Message = `${famousperson} once said, ${personname}`;
console.log(Message);
//question 6
let personname1 = `\n\t Governor Sindh Kamran Tessori\t\n`;
console.log(personname1);
let stripped = personname1.trim();
console.log(stripped);
//question 7
console.log(5 + 3);
console.log(9 - 1);
console.log(2 * 4);
console.log(32 / 4);
//question 8
console.log(5 + 3);
console.log(9 - 1);
console.log(2 * 4);
console.log(32 / 4);
//question 9
let favouritenumber = 16;
console.log(`my favourite number is ${favouritenumber}`);
//question 10
//my name is Yemna mehmood
// date: 2/27/2024
// This program will welcome you to git hub
console.log(`welcome to git hub impressive program`);
//my name is Yemna mehmood
// date:2/27/2024
// This program also have multiplication
console.log(2 * 3);
//question 11
let members = [`maham`, `Aamash`, `laraib`, `ahmed`];
for (let i = 0; i < members.length; i++) {
    console.log(members);
}
//question 12
let members1 = [`maham`, `Aamash`, `laraib`, `ahmed`];
let message2 = `How are you doing?`;
for (let i = 0; i < members1.length; i++) {
    console.log(message2 + members1[i]);
}
//question 13
let transportation = [`Honda city`, `Audi A3`, `Toyota Fortuner`,];
for (let i = 0; i < transportation.length; i++) {
    console.log(`I Would like to own a    ` + transportation[i]);
}
//question 14
let guestlist = [`Maham`, `Aamash`, `Ahmed`, `Haider`];
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear` + guestlist[i] + `\nI would like to invite you for tomorrow dinner`);
}
//question 15
let guestlist1 = [`Maham`, `Aamash`, `Ahmed`, `Haider`];
for (let i = 0; i < guestlist1.length; i++) {
    console.log(`Dear` + guestlist1[i] + `\nI would like to invite you for tomorrow dinner. \n\nThankyou\n`);
}
let notpresent = `Ahmed`;
let newguest = `Hasan`;
guestlist1[2] = newguest;
for (let i = 0; i < guestlist1.length; i++) {
    console.log(`Dear` + guestlist1[i] + `\nI Would like to invite you for tomorrow dinner. \n\nThankyou\n`);
}
console.log(`Mr, ${notpresent} is not coming for tomorrow dinner`);
//question 16
guestlist.unshift(`hira `, `ruba `, `amina `);
for (let i = 0; i < guestlist1.length; i++) {
    console.log(`Dear` + guestlist[i] + `\nI Would like to invite you for tomorrow dinner. \n\nThankyou\n`);
}
console.log(`I have found a bigger dinner table so i am inviting more guest.`);
//question 17
console.log(`\n\nUnfortunately i am out of space, so i just have space for two guest only.\n\n`);
while (guestlist1.length > 2) {
    let removedguest = guestlist1.pop();
    console.log(`Sorry, Dear ${removedguest} You are not invited for tomorrow dinner`);
    for (let i = 0; i < guestlist1.length; i++) {
        console.log(`Dear` + guestlist1[i] + `\nYou all are still invited for tomorrow dinner. \n\nThankyou\n`);
    }
    guestlist.splice(0, 2);
    console.log(guestlist);
    //question 18
    //task1
    let places = [`maldives `, `Austrailia `, `Bali `, `Greece `, `Dubai `];
    console.log("Original order:", places);
    console.log("Alphabetical order:", [...places].sort());
    console.log("Original order:", places);
    console.log("Reverse alphabetical order:", [...places].sort().reverse());
    console.log("Originial order:", places);
    places.reverse();
    console.log("Reversed order:", places);
    places.reverse();
    console.log("Original order:", places);
    places.sort();
    console.log("Alphabetical order:", places);
    places.reverse();
    console.log("Reverse alphabetical ordder:", places);
    //question 19
    let invitations = ["Maham", "Asmash"];
    let count_invitations = invitations.length;
    console.log(`${count_invitations} Peoples are coming to the dinner`);
    //question 20
    let languages = ["Urdu", "Punjabi", "English", "Sindhi"];
    console.log("List of Languages");
    console.log(languages);
    // question 21
    let book = { name: "The Exorcist", genre: "Horror", price: 400 };
    console.log(book);
    //question 22
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //console.log(days[7]);
    console.log(days[6]);
    //question 23
    let car = "subaru";
    console.log("is car == `subaru` ? predict true");
    console.log(car == `subaru`);
    console.log("is car != `honda civic`? predict true");
    console.log(car != `honda civic`);
    console.log("is car == `toyota`? predict false");
    console.log(car != `toyota`);
    console.log("is car == `SUBARU` ? predict false");
    console.log(car == `SUBARU`);
    console.log("is car.length == 5? predict true");
    console.log(car.length == 5);
    console.log("is car.length == 9? predict true");
    console.log(car.length != 9);
    console.log("is 10>45 ? predict false");
    console.log(10 > 45);
    console.log("is 3<=2 ? predict false");
    console.log(3 <= 2);
    console.log("is 64>45 ? predict false");
    console.log(64 > 45);
    console.log("is car== `honda` ? predict true");
    console.log(car == `honda`);
    //question 24
    let name1 = "Yemna";
    let name2 = "Yemna Mehmood";
    let name3 = "Yemna Mehmood Chohaan";
    //if (name1 == name3){
    //    console.log("names are equal")
    // } else {
    //    console.log("names are not equal")
    if (name1 != name2) {
        console.log("names are equal");
    }
    //if (name1 != name2){
    //    console.log("names are equal")
}
let age1 = 18;
let age2 = 23;
if (age1 == 18) {
    console.log("eligible for vote");
}
if (age1 != 22) {
    console.log("eligible for vote in older cateogry");
}
if (age1 <= age2) { //less
    console.log("younger");
}
if (age2 >= age1) { //greater
    console.log("older");
}
if (age1 == 18 && age2 == 23) {
    console.log("person is eligible for vote");
}
if (age1 == 18 || age2 != 23) {
    console.log(" person is not eligible for vote");
}
let countries = ["Pakistan", "China", "Australia", "Maldives"];
if (countries.includes("Pakistan")) {
    console.log("pakistan is in country list");
}
if (!countries.includes("finland")) {
    console.log("Finland is not in country list");
}
//question 25
let aliencolour = "green";
if (aliencolour == "green")
    console.log("you earn 5 points");
let aliencolour2 = "red";
if (aliencolour2 == "green")
    console.log("no output");
//question 26
let Aliencolour1 = "green";
if (Aliencolour1 == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
let Aliencolour2 = "red";
if (Aliencolour2 == "green") {
    console.log("player just earned 5points for shooting the aliens");
}
else {
    console.log("players just earned 10 points");
}
// question 27
let aliencolor3 = "red";
if (aliencolor3 == "green") {
    console.log("players just earned 5 points for shooting the alien");
}
else if (aliencolor3 == "yellow") {
    console.log("players just earned 10 points");
}
else {
    console.log("player got 15 points");
}
//question 28
let age = 14;
if (age1 < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are va kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are elder");
}
//question 29
let favourite_fruits = ["mango", "strawberry", "banana", "peach", "custard apple"];
if (favourite_fruits.includes("custard apple")) {
    console.log("custard apple");
}
if (favourite_fruits.includes("peach")) {
    console.log("you really like banana");
}
if (favourite_fruits.includes("mango")) {
    console.log("mango");
}
if (favourite_fruits.includes("strawberry")) {
    console.log("you really like banana");
}
if (favourite_fruits.includes("banana")) {
    console.log("banana");
}
//question 30
let users = ["admin", "eric", "ayan", "amna"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin would you like to see a report");
    }
    else
        (console.log(`Hello ${user}, Thankyou for logging in again`));
}
//question 31
let users1 = ["admin", "eric", "ayan", "amna"];
if (users1.length === 0) {
    console.log("we need to find some users");
}
else {
    for (let user of users1) {
        if (user === "admin") {
            console.log("Hello admin would you like to see a report");
        }
        else {
            console.log(`Hello $(user), Thankyou for logging in again`);
        }
    }
}
users1 = [];
if (users1.length === 0) {
    console.log("we need to find some users");
}
//question 32
let currentusers = ["admin", "eric", "ayan", "haider", "rina"];
let newusers = ["admin", "eric", "rayan", "azhan", "shayan"];
let currentusers_lower = currentusers.map(user3 => user3.toLowerCase());
for (let newuser of newusers) {
    if (currentusers_lower.includes(newuser.toLowerCase())) {
        console.log(`sorry ${newuser}, That name is taken`);
    }
    else {
        console.log(`Yes ${newuser}, Is still available in list`);
    }
}
//question 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let number of numbers)
    if (number === 1) {
        console.log(`${number}st`); //1st
    }
    else if (number === 2) {
        console.log(`${number}nd`); //2nd
    }
    else if (number === 3) {
        console.log(`${number}rd`); //3rd
    }
    else {
        console.log(`${number}th`); //4th,5th,6th,7th,8th,9th
    }
//question 34
let favouritePizza = ["chickentikka", "chickenfajita", "cheesy"];
for (let pizza of favouritePizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favouritePizza) {
    console.log(`I Really Like ${pizza} pizza`);
}
console.log("\n I reaaly love to eat pizza");
//question 35
let animals = ["Rabbit", "Cat", "Dog"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} Has a tail`);
}
console.log("\n All of these are wonderful pets but I love Cat more");
//question 36
function makeShirt(size, text) {
    console.log(`\n You order a ${size} shirt that says ${text}`);
}
makeShirt(`Large`, `"I love typescript"`);
makeShirt(`Medium`, `"I need a big shirt"`);
//question 37
function makeshirt1(size = `Large`, text = `I love typescript`) {
    console.log(`\n You order a ${size} shirt that says ${text}`);
}
makeshirt1();
makeshirt1(`Medium`);
///different message
makeshirt1(`Small`, `I need a loose shirt to wear`);
//question 38
function describeCity(city, country = `Pakistan`) {
    console.log(`${city} Is in ${country}`);
}
describeCity(`Karachi`); //default sentence
describeCity(`Melbourne`, `Australia`);
describeCity(`Toronto`, `Canada`);
//question 39
function city_country(city1, country1) {
    return `${city1} , ${country1}`;
}
let c1 = city_country(`Lahore`, `Pakistan`);
let c2 = city_country(`Paris`, `France`);
let c3 = city_country(`Austin`, `US`);
console.log(c1);
console.log(c2);
console.log(c3);
//question 40
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
let album1 = makeAlbum("Atif Aslam", "Meri kahani");
console.log(album1);
let album2 = makeAlbum("Fuzon", "Saagar");
console.log(album2);
let album3 = makeAlbum("Ali zafar", "Masty");
console.log(album3);
let album4 = makeAlbum("Sajjad Ali", "Sahil");
console.log(album4);
//question 41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Yums", "Harry", "David", "Ricky"];
show_magicians(magician);
//question 42
function make_great(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = magicians1[i] + `  the great`;
    }
}
const magicians2 = ["Yums", "Harry", "David", "Ricky"];
make_great(magicians2);
show_magicians(magicians2);
//question 43
function make_great2(magicians3) {
    const greatmagicians = [];
    for (let I = 0; I < magicians3.length; I++) {
        greatmagicians.push(magicians3[I] + `The Great`);
    }
    return greatmagicians;
}
const magicians4 = ["Yums", "Harry", "David", "Ricky"];
const greatmagicians2 = make_great2(magicians4);
show_magicians(magicians4);
show_magicians(greatmagicians2);
//question 44 
function sandwich(...items) {
    console.log("Sandwich Order:");
    for (let I = 0; I < items.length; I++) {
        console.log(`-${items[I]}`);
    }
}
console.log("Enjoy you sandwich Mr.A");
sandwich(`potato`, `garlic`, `greenchillies`);
sandwich(`chicken`, `cheesy`, `beef`);
sandwich(`extracheesy`, `mayo`);
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createcar("Toyota", "Fortuner", { colour: "Black", year: "2022" });
console.log(mycar);
