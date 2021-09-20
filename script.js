


// variable declaration for DOM Manipulation
let btn = document.querySelector(".btn");
let no = document.querySelector("#no");
let sect_tam = document.querySelector("#sect_tam");
let chapgrp_tam = document.querySelector("#chapgrp_tam");
let chap_tam = document.querySelector("#chap_tam");
let l1 = document.querySelector("#line1");
let l2 = document.querySelector("#line2");
let t_exp = document.querySelector("#t_exp");

let n1 = document.querySelector("#n1");
let sect_eng = document.querySelector("#sect_eng");
let chapgrp_eng = document.querySelector("#chapgrp_eng");
let chap_eng = document.querySelector("#chap_eng");
let kural_eng = document.querySelector("#eng_line");
let eng_exp = document.querySelector("#eng_exp");

// Displaying data while loading document
document.addEventListener("DOMContentLoaded",api_fetch);

// Button 
btn.addEventListener("click",api_fetch);


// Function to fetch the api data

async function api_fetch()
{
    //Generating random number 
    var n = Math.floor(Math.random() * 1330) + 1;
    
    // appending the generated random number with url to fetch the data
    let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${n}`);
    let data = await res.json();
    console.log(data);
    // DOM Manipulation
    no.innerHTML = `குறள் எண்: ${n}`;
    sect_tam.innerHTML =`பால்: ${data.sect_tam}`;
    chapgrp_tam.innerHTML = `இயல்: ${data.chapgrp_tam}`;
    chap_tam.innerHTML = `அதிகாரம்: ${data.chap_tam}`;
    l1.innerHTML = data.line1;
    l2.innerHTML = data.line2;
    t_exp.innerHTML = data.tam_exp;

    n1.innerHTML = `Kural No: ${n}`;
    sect_eng.innerHTML = `Section: ${data.sect_eng}`;
    chapgrp_eng.innerHTML = `Chapter Group: ${data.chapgrp_eng}`;
    chap_eng.innerHTML = `Chapter : ${data.chap_eng}`;
    kural_eng.innerHTML = data.eng;
    eng_exp.innerHTML = data.eng_exp;
}

