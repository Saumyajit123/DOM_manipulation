const btn = document.querySelector("#btn");
const image = document.querySelector("#on");

btn.addEventListener('click', change)
function change() {
    if(btn.textContent.includes('on')){
        image.src = "BulbOn.png"
        btn.style.backgroundColor = "green"
        btn.textContent = "Turn Off"
    }else{
        image.src = "BulbOff.png"
        btn.style.backgroundColor = "yellow"
        btn.textContent = "Turn On"       
    }
}

