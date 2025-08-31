let menue = document.querySelector(".header .mega-menue")
let par = document.querySelector(".header .main-nav>li:last-child")
let skillspans = document.querySelectorAll(".our-skills .skills .the-progress span")
let skill = document.querySelectorAll(".our-skills .skill h3 span")
let days = document.querySelector(".events .info .unit .days")
let hours = document.querySelector(".events .info .unit .hours")
let minutes = document.querySelector(".events .info .unit .minutes")
let seconds = document.querySelector(".events .info .unit .seconds")
let nums = document.querySelectorAll(".stats .container .box >.number")
let section = document.querySelector(".stats")
let started = false; // Function Started ? No


let day = 45.54654156;
let mdays = day*(1000*60*60*24);

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 500){
        if(!started){
            started = true;
            nums.forEach((num) => startCounter(num));
        }
    }
}
function startCounter(num) {
    let goal = num.dataset.goal;
    let count = 0;
    let counter = setInterval(() => {
        count ++;
        if (count >= goal) {
            count = goal;
            clearInterval(counter);
        }
        num.innerHTML = count.toLocaleString();
    }, 2000/goal);
}

if(localStorage.getItem("days")){
    let day = localStorage.getItem("days");
    mdays = day*(1000*60*60*24);
}
skill.forEach((skil)=>{
skil.style.left = skil.innerHTML
})

par.addEventListener("click",() =>{
    if(menue.classList.contains("active")){
        menue.classList.remove("active")
    }else{
        menue.classList.add("active")
    }
})

window.addEventListener("scroll",(e) =>{
    let scrollTop = window.scrollY;
    if(scrollTop > 400){
        menue.classList.remove("active")
    }
    if (scrollTop >= 6330) {
        setTimeout(() => {
            skill.forEach((span, index) =>{
                let percentage = span.innerHTML
                skillspans[index].style.width = percentage
            })
        }, 600);
    }

});


setInterval(() => {
    mdays = mdays - 1000
    day = mdays / (1000*60*60*24)
    let hour = (day-Math.floor(day))*24;
    let minute = (hour-Math.floor(hour))*60;
    let second =(minute-Math.floor(minute))*60;
    days.innerHTML = Math.floor(day) <10 ? "0" + Math.floor(day) : Math.floor(day);
    minutes.innerHTML = Math.floor(minute) <10 ? "0" + Math.floor(minute) : Math.floor(minute);
    hours.innerHTML = Math.floor(hour) <10 ? "0" + Math.floor(hour) : Math.floor(hour);
    seconds.innerHTML = Math.floor(second) <10 ? "0" + Math.floor(second) : Math.floor(second);
    localStorage.setItem("days", day);
}, 1000);