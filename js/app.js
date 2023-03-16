let tickets_sold = 5000;
let venue_capacity = 6000
let performer = "Bon Jovi";
let is_sold_out = false;
let is_repeat_show = true;
let percent_sold = tickets_sold / venue_capacity;

if (tickets_sold === venue_capacity) {
    is_sold_out = true;
} else {
    is_sold_out = false;
}

if (is_sold_out === true) {
    console.log("All Sold Out");
} else {
    console.log("Tickets still available");
}

if ((percent_sold) >= 0.9) {
    console.log("Tickets are almost sold out");
} else if ((percent_sold) >= 0.5) {
   console.log("Tickets are selling fast");
} else {
    console.log("Tickets on sale now!");
}

if (tickets_sold > venue_capacity || (tickets_sold === venue_capacity && is_sold_out === false) || (performer === "Alex Byomen" && is_sold_out ===false)) {
    console.log("System Error");
} else {
    console.log("All good!");
}

if (((percent_sold >= 0.9 || venue_capacity >= 6000) && (percent_sold >= 0.7 || venue_capacity >= 9000)) || (is_sold_out === true && is_repeat_show === true)) {
    console.log("Special Case");
} else {
    console.log("Normal Case");
}

