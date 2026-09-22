const people={Damon:'Damon Salvatore',Stefan:'Stefan Salvatore',Elena:'Elena Gilbert',Caroline:'Caroline Forbes'};
const locations=[
 {title:'Kiedyś boisko, obecnie Wybieg dla psów',address:'Gdańsk, Ferdynanda Magellana 35',tag:'SYGNAŁ PIERWSZY',scene:[
  ['Damon','Żaklin. Jeśli to widzisz, mamy problem. I zanim zapytasz: tak, ten problem jest dokładnie tak zły, jak brzmi.'],
  ['Stefan','Łowcy wampirów wrócili. Nie wiemy jak. Nie wiemy ilu ich jest. Wiemy tylko, że czegoś szukają.'],
  ['Caroline','W Gdańsku pojawił się artefakt. Nie wiemy jeszcze, czym jest ani do czego służy. Ale czujemy jego ślad.'],
  ['Elena','I właśnie dlatego potrzebujemy Ciebie. Twoje wyczucie może pomóc nam zidentyfikować to, czego sami nie potrafimy znaleźć.'],
  ['Damon','Pierwszy sygnał prowadzi do miejsca, które kiedyś było boiskiem, a dziś jest wybiegiem dla psów.'],
  ['Damon','I zanim Stefan zacznie analizować każdy ślad łapy: tak, mam teorię. Psy mogły coś wynieść.'],
  ['Stefan','Damon, to nie jest teoria. To przypuszczenie.'],
  ['Damon','Różnica semantyczna. Poza tym wolę kruki. Są mniej skłonne do biegania za patykiem.'],
  ['Caroline','Skupmy się. Żaklin, rozejrzyj się, ale nie szukaj niczego na siłę.'],
  ['Damon','A jeśli zobaczysz coś dziwnego... cóż. W Mystic Falls to zazwyczaj oznacza, że sprawa właśnie się zaczęła.']
 ]},
 {title:'Zbiornik Retencyjny Jaśkowa Dolina',address:'Gdańsk, Zbiornik Retencyjny Jaśkowa Dolina',tag:'SYGNAŁ DRUGI',scene:[
  ['Caroline','Mamy zmianę. Sygnał z pierwszego miejsca zniknął.'],
  ['Damon','Albo artefakt się przemieścił.'],
  ['Stefan','Nie. Coś go przemieściło.'],
  ['Elena','Najwyraźniej psy zainteresowały się czymś, czego nie powinny były znaleźć. Sygnał wskazuje teraz na wodę.'],
  ['Damon','Świetnie. Łowcy, tajemniczy artefakt i teraz wycieczka nad zbiornik. Ktoś naprawdę miał za dużo wolnego czasu.'],
  ['Caroline','Drugi punkt: Zbiornik Retencyjny Jaśkowa Dolina.'],
  ['Damon','Jeśli artefakt naprawdę był tam wcześniej, mógł zostać wyniesiony gdzieś dalej.'],
  ['Stefan','Jedź. I tym razem patrz uważnie. Łowcy mogą być bliżej, niż myślimy.'],
  ['Damon','I nie, nie sugeruję, żebyś wskakiwała do wody. Nawet ja mam pewne granice.'],
  ['Elena','Damon.'],
  ['Damon','Co? To była troska. Bardzo dobrze ukryta, ale jednak.']
 ]},
 {title:'Elena Dobroczek Noclegi',address:'Gdańsk, Elena Dobroczek Noclegi',tag:'SYGNAŁ TRZECI',scene:[
  ['Elena','To niemożliwe... sygnał znów się zmienił.'],
  ['Damon','Czyli miałem rację. Najciemniej jest pod latarnią. Lubię, kiedy moje podejrzenia okazują się prawdziwe.'],
  ['Caroline','Ty lubisz, kiedy Twoje podejrzenia brzmią efektownie.'],
  ['Damon','To również.'],
  ['Stefan','Trzeci punkt wygląda jak stara kryjówka Eleny.'],
  ['Elena','Jeśli to miejsce rzeczywiście jest powiązane z artefaktem, może znajdziemy tam odpowiedź.'],
  ['Damon','Coś tu nadal nie pasuje.'],
  ['Stefan','Sygnał zatrzymał się dokładnie tam, gdzie kiedyś ukrywaliśmy rzeczy, których nie powinno się znaleźć.'],
  ['Elena','Może to miejsce ma znaczenie. Albo ktoś chce, żebyśmy tak myśleli.'],
  ['Caroline','Nie podoba mi się to. Ani trochę.'],
  ['Damon','Mi też nie. A zwykle lubię, kiedy sytuacja jest interesująca.'],
  ['Elena','Sprawdźmy to miejsce. Nie wyciągajmy jeszcze żadnych wniosków.']
 ]},
 {title:'Rakoczego 19',address:'Gdańsk, ul. Rakoczego 19',tag:'SYGNAŁ CZWARTY',scene:[
  ['Damon','Mamy trop. Sygnał prowadzi do kogoś z Twojego najbliższego otoczenia.'],
  ['Stefan','Damon, ostrożnie. Nie mamy jeszcze dowodu.'],
  ['Damon','Wiem. Ale mam przeczucie. A moje przeczucia mają irytujący zwyczaj bycia trafnymi.'],
  ['Elena','Żaklin, wygląda na to, że Twoja rodzina może być powiązana z tą sprawą.'],
  ['Caroline','I wszystko wskazuje na Twojego brata.'],
  ['Damon','Nie panikuj. Panika jest moja. Ty masz po prostu znaleźć odpowiedź.'],
  ['Stefan','Jeśli artefakt jest przy nim, musimy to sprawdzić.'],
  ['Elena','Jedźmy na Rakoczego 19. I zachowaj ostrożność.'],
  ['Damon','Bo jeśli mam rację, ta sprawa właśnie zrobiła się bardzo rodzinna.']
 ]},
 {title:'Romana Wyrobka 9/40',address:'Gdańsk, ul. Romana Wyrobka 9/40',tag:'AKTA KOŃCOWE',scene:[
  ['Caroline','Czekaj... coś się nie zgadza. Sygnał z Rakoczego był zbyt idealny.'],
  ['Stefan','Masz rację. Ktoś prowadził nas dokładnie tam, gdzie chciał.'],
  ['Damon','Czyli cała ta wycieczka była podstępem.'],
  ['Caroline','Dywersja. Chcieli odciągnąć Żaklin od miejsca, w którym była.'],
  ['Elena','Od jej domu.'],
  ['Damon','Genialne. Naprawdę ich nie lubię. A to już sporo mówi.']
 ],afterAddress:[
  ['Damon','I teraz czuję coś jeszcze.'],
  ['Stefan','Co?'],
  ['Damon','Zwierzę.'],
  ['Caroline','Psy?'],
  ['Damon','Nie.'],
  ['Stefan','Kruki?'],
  ['Damon','Kruki są świetne, ale nie. To ptak. Dziwny. Bardzo dziwny.'],
  ['Elena','Biało-czarny.'],
  ['Damon','Dokładnie. I nie przypomina żadnego ptaka, którego spodziewałbym się znaleźć tutaj.'],
  ['Caroline','Żaklin, potrzebujemy nazwy. Jeśli trafimy, będziemy wiedzieć, że znaleźliśmy właściwy trop.'],
  ['Damon','Wpisz, co według Ciebie wyczuwam. Jedno słowo. I tym razem proszę bez „kruka”. Mam reputację do utrzymania.']
 ]}
];
let current=0,busy=false;
const $=s=>document.querySelector(s);
function add(person,text){const el=document.createElement('div');el.className='msg';el.innerHTML=`<div class="avatar">${person[0]}</div><div class="bubble"><div class="name">${people[person]}</div><div class="text">${text}</div></div>`;$('#messages').appendChild(el);el.scrollIntoView({behavior:'smooth',block:'end'});}
function type(person){$('#typing').textContent=`${people[person]} pisze…`;}
function wait(ms){return new Promise(r=>setTimeout(r,ms));}
async function play(scene, after){if(busy)return;busy=true;$('#activate')?.remove();for(const [p,t] of scene){type(p);await wait(700);$('#typing').textContent='';add(p,t);await wait(500);}busy=false;if(after)after();}
function showAddress(i){const l=locations[i];const card=document.createElement('div');card.className='locationCard';card.innerHTML=`<div class="num">${l.tag} · ${String(i+1).padStart(2,'0')}/05</div><h3>${l.title}</h3><p class="address">${l.address}</p><p>To właśnie tutaj prowadzi aktualny sygnał.</p><button id="activate" class="goldBtn">${i===locations.length-1?'JESTEM NA MIEJSCU →':'DOTARŁAM NA MIEJSCE →'}</button>`;$('#messages').appendChild(card);card.scrollIntoView({behavior:'smooth',block:'end'});$('#activate').onclick=async()=>{if(i<locations.length-1){showLocation(i+1);return;}$('#activate').disabled=true;await play(l.afterAddress||[],()=>showFinalInput());};}
function showLocation(i){current=i;busy=false;$('#messages').innerHTML='';$('#typing').textContent='';$('#continue').classList.add('hidden');const l=locations[i];play(l.scene,()=>showAddress(i));}
function showFinalInput(){const box=document.createElement('div');box.className='finalInput';box.innerHTML=`<div class="num">IDENTYFIKACJA ARTEFAKTU</div><h3>Co wyczuwają?</h3><p>Biało-czarny, dziwny ptak. Wpisz nazwę.</p><div class="inputRow"><input id="answer" autocomplete="off" placeholder="Wpisz hasło…"><button id="check">SPRAWDŹ</button></div><div id="result"></div>`;$('#messages').appendChild(box);box.scrollIntoView({behavior:'smooth',block:'end'});$('#answer').focus();$('#check').onclick=checkAnswer;$('#answer').onkeydown=e=>{if(e.key==='Enter')checkAnswer()};}
function checkAnswer(){const value=$('#answer').value.trim().toLowerCase().replaceAll('ę','e').replaceAll('ą','a');const ok=value==='pingwin'||value==='pingwinek';const r=$('#result');if(!ok){r.innerHTML='<span class="wrong">Nie. To nie ten trop. Spróbuj jeszcze raz.</span>';return;}r.innerHTML='<span class="right">TO JEST TO.</span>';setTimeout(()=>finish(),500);}
function finish(){const box=document.createElement('div');box.className='finale';box.innerHTML=`<div class="seal">MF</div><div class="num">SPRAWA ZAMKNIĘTA</div><h2>Żaklin, uratowałaś nam życie.</h2><p><b>Damon:</b> „Tak. To właśnie to.”</p><p><b>Stefan:</b> „Ukryj to bardzo bezpiecznie. Resztą zajmiemy się my.”</p><p><b>Caroline:</b> „Nie mogliśmy zostawić Cię bez podziękowania.”</p><p><b>Elena:</b> „Spójrz do <b>dużej szafy na przedpokoju</b>. Zostawiliśmy tam mały upominek.”</p><p><b>Damon:</b> „I nie przyzwyczajaj się. Jeśli będzie trzeba… odezwiemy się jeszcze kiedyś.”</p><div class="signature">DAMON SALVATORE<br><span>dla Żaklin</span></div>`;$('#messages').appendChild(box);box.scrollIntoView({behavior:'smooth',block:'end'});}
function startArchive(){ const intro=$('#intro'), main=$('#main'); if(!intro||!main)return; intro.classList.add('hidden'); main.classList.remove('hidden'); showLocation(0); }
document.addEventListener('DOMContentLoaded',()=>{ const btn=$('#start'); if(btn) btn.addEventListener('click',startArchive); });
document.addEventListener('DOMContentLoaded',()=>{$('#continue').onclick=()=>showLocation(current+1);});
$('.tab[data-view="archive"]').onclick=()=>{$('#chat').classList.add('hidden');$('#archive').classList.remove('hidden');document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));$('.tab[data-view="archive"]').classList.add('active')};
$('.tab[data-view="chat"]').onclick=()=>{$('#archive').classList.add('hidden');$('#chat').classList.remove('hidden');document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));$('.tab[data-view="chat"]').classList.add('active')};
$('#bell').onclick=async()=>{if('Notification'in window){const p=await Notification.requestPermission();if(p==='granted')new Notification('Mystic Falls Archive',{body:'Kanał zabezpieczony. Czekamy na Ciebie.'})}};
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
