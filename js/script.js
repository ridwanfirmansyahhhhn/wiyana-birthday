
const msg='Selamat Ulang Tahun Wiyana 🎂';
let i=0;
function type(){if(i<msg.length){typing.innerHTML+=msg[i++];setTimeout(type,70)}}
setTimeout(()=>{loader.style.display='none';type()},2200);

startBtn.onclick=()=>{
music.play();
confetti({particleCount:300,spread:180});
alert('🎉 Level 23 berhasil dibuka!');
};

envelope.onclick=()=>letter.classList.toggle('hidden');

giftBtn.onclick=()=>{
confetti({particleCount:400,spread:220});
alert('🎁 Voucher VIP: Aku Boleh Sama Kamu Trus 😌🤎');
};

setInterval(()=>{
let h=document.createElement('div');
h.className='heart';
h.innerHTML='🤎';
h.style.left=Math.random()*100+'vw';
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
},700);
