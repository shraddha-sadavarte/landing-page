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

//second clock
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