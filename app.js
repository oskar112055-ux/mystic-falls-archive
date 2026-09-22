const people={Damon:'Damon Salvatore',Stefan:'Stefan Salvatore',Elena:'Elena Gilbert',Katherine:'Katherine Pierce'};
const scenes=[
 ['Damon','Wreszcie. Mamy problem i potrzebujemy kogoś spoza Mystic Falls.'],
 ['Stefan','Damon, przestań ją straszyć. Najpierw wyjaśnijmy, co się stało.'],
 ['Elena','Żaklin, jeśli to czytasz, jesteś już częścią sprawy.'],
 ['Damon','I nie, nie możesz po prostu wyjść z grupy.'],
 ['Katherine','Zabawne. Całe Mystic Falls i akurat ona ma nam pomóc.'],
 ['Elena','Potrzebujemy kogoś, komu jeszcze możemy zaufać.'],
 ['Damon','Pierwszy ślad czeka tam, gdzie zaczyna się Twój dzisiejszy wieczór.'],
 ['Stefan','Nie szukaj koperty. Nie ma żadnej. Po prostu idź.'],
 ['Damon','Kiedy dotrzesz na miejsce, napisz tylko: „Jestem”.'],
 ['Katherine','A jeśli zobaczysz coś, czego nie powinnaś widzieć... cóż. Powodzenia.'],
 ['Elena','Żaklin. To ważne. Od tej chwili nikomu nie ufaj.'],
 ['Damon','Zwłaszcza mnie.']
];
const messages=document.querySelector('#messages'),typing=document.querySelector('#typing'),cont=document.querySelector('#continue');
let i=0,started=false;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function add(w,t){const e=document.createElement('div');e.className='msg';e.innerHTML=`<div class="name">${people[w]}</div><div class="bubble">${t}</div><div class="time">${new Date().toLocaleTimeString('pl-PL',{hour:'2-digit',minute:'2-digit'})}</div>`;messages.append(e);window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});}
async function next(){if(i>=scenes.length){cont.textContent='AKTA ZAKOŃCZONE ✓';cont.disabled=true;return}cont.classList.add('hidden');const [w,t]=scenes[i++];typing.textContent=`${people[w]} pisze…`;await sleep(900);typing.textContent='';add(w,t);await sleep(450);if(i<scenes.length)cont.classList.remove('hidden');else{await sleep(300);cont.classList.remove('hidden');cont.textContent='ZAMKNIJ SPRAWĘ ✓'}}
document.querySelector('#start').onclick=async()=>{document.querySelector('#intro').classList.add('hidden');document.querySelector('#main').classList.remove('hidden');if(!started){started=true;await next();}};
cont.onclick=next;
document.querySelector('#bell').onclick=async()=>{if('Notification'in window){const p=await Notification.requestPermission();if(p==='granted')new Notification('Mystic Falls Archive',{body:'Kanał zabezpieczony. Akta są aktywne.'})}};
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelector('#chat').classList.toggle('hidden',b.dataset.view!=='chat');document.querySelector('#archive').classList.toggle('hidden',b.dataset.view!=='archive');});
if('serviceWorker'in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
