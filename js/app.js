let tickets_sold = 6000;
let venue_capacity = 6000;
let performer = "Bon Jovi";
let special_perf_one = `Alex Bymoen`;
let special_perf_two = `Elvis Presley`;
let special_perf_three = `1972 Miami Dolphins`;
let special_perf_four = `Elton John`;
let special_perf_five = `Queen`;
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

if ((special_perf_one === `Alex Bymoen` || special_perf_one === `Shrek` || special_perf_one === `1972 Miami Dolphins`) || (special_perf_two === `Alex Bymoen` || special_perf_two === `Shrek` || special_perf_two === `1972 Miami Dolphins`) || (special_perf_three === `Alex Bymoen` || special_perf_three === `Shrek` || special_perf_three === `1972 Miami Dolphins`) || (special_perf_four === `Alex Bymoen` || special_perf_four === `Shrek` || special_perf_four === `1972 Miami Dolphins`) || (special_perf_five === `Alex Bymoen` || special_perf_five === `Shrek` || special_perf_five === `1972 Miami Dolphins`) )  {
    console.log(`Lucky you!`);
} else {
    console.log(`Too Bad!`);
}
