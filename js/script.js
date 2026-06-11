
const msg='Selamat Ulang Tahun Wiyana 🎂';
let i=0;
function type(){if(i<msg.length){typing.innerHTML+=msg[i++];setTimeout(type,70)}}
setTimeout(()=>{loader.style.display='none';type()},2200);

startBtn.onclick=()=>{ music.play(); confetti({particleCount:300,spread:180}); alert('🎉 Selamat Ulang Tahun Bocil'); };
function closeBirthdayModal(){

    document
    .getElementById("birthdayModal")
    .classList
    .add("hidden");

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
