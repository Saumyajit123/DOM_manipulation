const btn = document.querySelector("#btn");
const image = document.querySelector("#on");

btn.addEventListener('click', ()=>{
    // console.log(image.src);
    if(btn.innerHTML.includes('On')){
        image.src = "./assets/BulbOn.png"
        btn.style.backgroundColor = "green"
        btn.innerHTML = "Turn Off"
    }else{
        image.src = "./assets/BulbOff.png"
        btn.style.backgroundColor = "yellow"
        btn.innerHTML = "Turn On"       
    }
});

