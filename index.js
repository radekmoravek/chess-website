document.getElementById("getDate").onclick = displayDate;

const dateElement = document.getElementById("date");
dateElement.innerText = new Date();

function displayDate(){
    
    
    if(dateElement.hidden){
        dateElement.hidden=false;
    }
    else{
        dateElement.hidden=true;
    }
}

// x.addEventListener("mouseover",() => changeBackgroundColour("blue"));
// x.addEventListener("mouseout", () => changeBackgroundColour("black"))
// console.log(document.body.style)

// function changeBackgroundColour(color){
//     document.body.style.background=color;
// }
let scrolldelay;

// function scrollDown(){
//     window.scrollBy(0,10); // horizontal and vertical scroll increments
//     scrolldelay = setTimeout('scrollDown()',50); // scrolls every 100 milliseconds
//         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
//             scrolldelay = setTimeout('PageUp()',2000);
// }

function scrollDown(){
    window.scrollBy(0,10); // horizontal and vertical scroll increments
    console.log(window.pageYOffset)
    if(window.pageYOffset < 500)
        scrolldelay = setTimeout('scrollDown()',20); // scrolls every 100 milliseconds

}

function addImage(){
   const image = document.createElement("img")
   image.src = 'Images/james_camile.JPG'
   const adding = document.getElementById("adding");
   adding.appendChild(image);
}