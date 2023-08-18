//timer
const endDate = "31 August 2023 12:00 AM";
const inputs = document.querySelectorAll("input");

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if(diff < 0) return;

    //convert ito days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into hours
    inputs[1].value = Math.floor(diff / 3600 % 24);

    //convert into minutes
    inputs[2].value = Math.floor(diff / 60 % 60);

    //convert into seconds
    inputs[3].value = Math.floor(diff % 60);
}

clock();

setInterval(() => {
    clock();
}, 1000)


//second clock
//timer
const endDate1= "31 August 2023 12:00 AM";
const inputs1 = document.querySelectorAll("input[type=number]");

const clock1 = () =>{
    const end1 = new Date(endDate1);
    const now1 = new Date();
    const diff1 = (end1 - now1)/1000;

    if(diff1 < 0) return;

    //convert ito days
    inputs1[0].value = Math.floor(diff1 / 3600 / 24);

    //convert into hours
    inputs1[1].value = Math.floor(diff1 / 3600 % 24);

    //convert into minutes
    inputs1[2].value = Math.floor(diff1 / 60 % 60);

    //convert into seconds
    inputs1[3].value = Math.floor(diff1 % 60);
}

clock1();

setInterval(() => {
    clock1();
}, 1000)

//third clock
//timer
const endDate2= "31 August 2023 12:00 AM";
const inputs2 = document.querySelectorAll("input[type=email]");

const clock2 = () =>{
    const end2 = new Date(endDate2);
    const now2 = new Date();
    const diff2 = (end2 - now2)/1000;

    if(diff2 < 0) return;

    //convert ito days
    inputs2[0].value = Math.floor(diff2 / 3600 / 24);

    //convert into hours
    inputs2[1].value = Math.floor(diff2 / 3600 % 24);

    //convert into minutes
    inputs2[2].value = Math.floor(diff2 / 60 % 60);

    //convert into seconds
    inputs2[3].value = Math.floor(diff2 % 60);
}

clock2();

setInterval(() => {
    clock2();
}, 1000)

//four clock
//timer
const endDate3= "31 August 2023 12:00 AM";
const inputs3 = document.querySelectorAll(".clock4");

const clock3 = () =>{
    const end3 = new Date(endDate3);
    const now3 = new Date();
    const diff3 = (end3 - now3)/1000;

    if(diff3 < 0) return;

    //convert ito days
    inputs3[0].value = Math.floor(diff3 / 3600 / 24);

    //convert into hours
    inputs3[1].value = Math.floor(diff3 / 3600 % 24);

    //convert into minutes
    inputs3[2].value = Math.floor(diff3 / 60 % 60);

    //convert into seconds
    inputs3[3].value = Math.floor(diff3 % 60);
}

clock3();

setInterval(() => {
    clock3();
}, 1000)


//five clock
//timer
const endDate4= "31 August 2023 12:00 AM";
const inputs4 = document.querySelectorAll(".clock5");

const clock4 = () =>{
    const end4 = new Date(endDate4);
    const now4 = new Date();
    const diff4 = (end4 - now4)/1000;

    if(diff4 < 0) return;

    //convert ito days
    inputs4[0].value = Math.floor(diff4 / 3600 / 24);

    //convert into hours
    inputs4[1].value = Math.floor(diff4 / 3600 % 24);

    //convert into minutes
    inputs4[2].value = Math.floor(diff4 / 60 % 60);

    //convert into seconds
    inputs4[3].value = Math.floor(diff4 % 60);
}

clock4();

setInterval(() => {
    clock4();
}, 1000)

//six clock
//timer
const endDate5= "31 August 2023 12:00 AM";
const inputs5 = document.querySelectorAll(".clock6");

const clock5 = () =>{
    const end5 = new Date(endDate5);
    const now5 = new Date();
    const diff5 = (end5- now5)/1000;

    if(diff5 < 0) return;

    //convert ito days
    inputs5[0].value = Math.floor(diff5 / 3600 / 24);

    //convert into hours
    inputs5[1].value = Math.floor(diff5 / 3600 % 24);

    //convert into minutes
    inputs5[2].value = Math.floor(diff5 / 60 % 60);

    //convert into seconds
    inputs5[3].value = Math.floor(diff5 % 60);
}

clock5();

setInterval(() => {
    clock5();
}, 1000)