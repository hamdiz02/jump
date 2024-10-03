dino=document.querySelector(".dino")
btnj=document.querySelector(".btnj")
btns=document.querySelector(".btns")
score=document.querySelector(".score")
cactus=document.querySelector(".cactus1")
cactus2=document.querySelector(".cactus2")
obj=document.querySelector(".obj")
msg=document.querySelector(".msg")

const audio1 = new Audio("bow.mp3")
const audio2 = new Audio("sfart.mp3")
const audio3 = new Audio("hag.mp3")
const audio4 = new Audio("br.mp3")

const list = ['ais.jpg','face.png','byas.jpg','cry.png','gae.jpg','twrk.png','sm7ni.png']
let upt = 500;
let boi = 100;
let speed = 50;
let interval
let intervals
let sc=0
let pos = -5
let pos2 = -15
sp = 2

function jump(){
    dino.style.transform = 'translateY(-200%)';
    setTimeout(() => {
        dino.style.transform = 'translateY(0%)';
    },upt);
    audio2.play()
}
function ts() {
    sc++    
    score.textContent = sc
}
function play (){
    document.removeEventListener('keypress' , (u)=>{
        if (u.key == " "){jump()}
        if (u.key == "z"){jump()}
        if (u.key == "Z"){jump()}
    });
    document.addEventListener('keypress' , (u)=>{
        if (u.key == " "){jump()}
        if (u.key == "z"){jump()}
        if (u.key == "Z"){jump()}
    });
    btnj.addEventListener('click', jump)
    document.addEventListener('click', jump)
    pos += sp
    pos2+= sp
    cactus.style.right = pos + '%'
    cactus2.style.right = pos2 + '%'
    
    const dib = dino.getBoundingClientRect();
    const cacb = cactus.getBoundingClientRect();
    const cac2b = cactus2.getBoundingClientRect();
    const objb = obj.getBoundingClientRect();
    
    if (
        cacb.right >= objb.left &&
        cacb.left <= objb.right &&
        cacb.bottom >= objb.top &&
        cacb.top <= objb.bottom
    ) { pos = -60 ;
        cactus.style.width = (Math.floor(Math.random() * (12 - 5) + 5)) + '%';
        src = list[Math.floor(Math.random()* list.length)];
        cactus.style.backgroundImage=`url(${src})`;
    }
    if (
        cac2b.right >= objb.left &&
        cac2b.left <= objb.right &&
        cac2b.bottom >= objb.top &&
        cac2b.top <= objb.bottom
    ) { pos2 = -pos2 ;
        cactus2.style.width = (Math.floor(Math.random() * (12 - 5) + 5)) + '%';
        src = list[Math.floor(Math.random()* list.length)];
        cactus2.style.backgroundImage=`url(${src})`;
    }

    if (
        cacb.right >= dib.left &&
        cacb.left <= dib.right &&
        cacb.bottom >= dib.top &&
        cacb.top <= dib.bottom
    ) {msg.textContent = " u lost bitch r u f*ckin gay ? click hear to restart"; clearInterval(interval) ; clearInterval(intervals) ;audio1.play();
       msg.addEventListener('click', ()=>{
       msg.style.display='none'
       window.location.reload();
       })
}
    if (
        cac2b.right >= dib.left &&
        cac2b.left <= dib.right &&
        cac2b.bottom >= dib.top &&
        cac2b.top <= dib.bottom
    ) {msg.textContent = " u lost bitch r u f*ckin gay ? click hear to restart"; clearInterval(interval) ; clearInterval(intervals) ;audio1.play();
       msg.addEventListener('click', ()=>{
       msg.style.display='none'
       window.location.reload();
       })
}
    function set(){
        speed = speed - 5
        clearInterval(interval);
        interval = setInterval(play,speed);
    }
    if (sc == boi){
        sp += 0.1
        upt = upt - 5;
        boi += 250;
        audio3.play()
        set()
    }
}

function br(){
    audio4.play()
    audio4.loop = true
    audio4.volume= 0.1;
}

function start (){
    interval = setInterval(play,speed)
    intervals =setInterval(ts,100)
    btns.style.display = 'none';
    br()
}



