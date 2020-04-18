    // get the needed elements from the document
    let div = document.querySelectorAll("div");
    let p = document.querySelectorAll("p");
    // access p[0] textNode and get the current value for the counter
    let pTex0 = p[0].childNodes[0].nodeValue;
    let pArr0 = pTex0.split(' ');
    let countP0 = Number(pArr0[1]);
    // attach event listener to div[3]
    div[3].addEventListener("click", count0);
    function count0() {
        countP0++;
        p[0].innerHTML = `visited ${countP0} times`;
    }
    // access p[1] textNode and get the current value for the counter
    let pTex1 = p[1].childNodes[0].nodeValue;
    let pArr1 = pTex1.split(' ');
    let countP1 = Number(pArr1[1]);
    // attach event listener to div[4]
    div[4].addEventListener("click", count1);
    function count1() {
        countP1++;
        p[1].innerHTML = `visited ${countP1} times`;
    }
    // access p[2] textNode and get the current value for the counter
    let pTex2 = p[2].childNodes[0].nodeValue;
    let pArr2 = pTex2.split(' ');
    let countP2 = Number(pArr2[1]);
    // attach event listener to div[5]
    div[5].addEventListener("click", count2);
    function count2() {
        countP2++;
        p[2].innerHTML = `visited ${countP2} times`;
    }
    // and so on ...








// let page1 = document.getElementById("page1"),
//     div = document.querySelectorAll("div"),
//     thin = document.getElementsByClassName("thin"),
//     thick = document.getElementsByClassName("thick"),
//     p = document.querySelectorAll("p"),
//     a = document.querySelector("a");

//let counter = 42;    


// p[0].innerHTML = "Hello, Gocho!";
// p[2].innerHTML = "visited 60 times";
// p[2].style.color = "red";
// p[2].style.fontSize = "40px";
//p[4].innerHTML = `visited ${counter} times`;
//div[3].style.backgroundColor = "green";

/*div.forEach((element, i, arr) => {
    let counter = 0;

    function myFunction() {
        counter++;
        if (i > 2) {
            element.addEventListener("click", myFunction);
            p.forEach((item, i, arr) => item.innerHTML = `visited ${counter} times`);
        }
    }
});*/


// let h1 = document.createElement("h1"),
//     text = document.createTextNode(" I was here!");

// h1.classList.add("black-ninja");

// document.body.insertBefore(h1, div[0]);
// h1.textContent = "Hello, Gocho!";
// h1.appendChild(text);


// console.log(div);
// console.log(h1);