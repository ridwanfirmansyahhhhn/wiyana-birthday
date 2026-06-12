
const msg='Selamat Ulang Tahun Wiyana 🎂';
let i=0;
function type(){if(i<msg.length){typing.innerHTML+=msg[i++];setTimeout(type,70)}}
setTimeout(()=>{loader.style.display='none';type()},2200);

startBtn.onclick=()=>{

    confetti({
        particleCount:300,
        spread:180
    });

    document
    .getElementById("birthdayModal")
    .classList
    .remove("hidden");

};
function closeBirthdayModal(){

    document
    .getElementById("birthdayModal")
    .classList
    .add("hidden");

    const music = document.getElementById("music");

    music.play()
    .catch(err => console.log(err));

    // Confetti besar

    confetti({
        particleCount:500,
        spread:250,
        origin:{ y:0.6 }
    });

    // Confetti kiri

    confetti({
        particleCount:200,
        angle:60,
        spread:120,
        origin:{ x:0 }
    });

    // Confetti kanan

    confetti({
        particleCount:200,
        angle:120,
        spread:120,
        origin:{ x:1 }
    });

    // Efek zoom hero

    document.querySelector(".hero").classList.add("celebrate");

    // Scroll pelan ke bawah
document.querySelector(".dance-left").style.display="block";
document.querySelector(".dance-right").style.display="block";
   

}
envelope.onclick=()=>letter.classList.toggle('hidden');

giftBtn.onclick=()=>{

    confetti({
        particleCount:400,
        spread:220
    });

    document
    .getElementById("giftModal")
    .classList
    .remove("hidden");

};
function closeGiftModal(){

    document
    .getElementById("giftModal")
    .classList
    .add("hidden");

}

setInterval(()=>{
let h=document.createElement('div');
h.className='heart';
h.innerHTML='🤎';
h.style.left=Math.random()*100+'vw';
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
},700);
