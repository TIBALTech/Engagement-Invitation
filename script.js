const opening = document.getElementById("openingScreen");
const main = document.getElementById("mainInvitation");
const openButtons = [document.getElementById("openInvitation"), document.getElementById("openByRing")];
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

async function openInvitation() {
  opening.classList.add("closed");
  main.classList.add("visible");
  main.setAttribute("aria-hidden","false");
  musicToggle.classList.add("show");
  try { await music.play(); } catch(e) {}
  musicToggle.textContent = "❚❚";
  setTimeout(() => document.getElementById("home").scrollIntoView({behavior:"smooth"}), 450);
}
openButtons.forEach(btn => btn.addEventListener("click", openInvitation));

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); } catch(e) { alert("Please add your Nadaswaram audio file as music.mp3 in the website folder."); }
    musicToggle.textContent = "❚❚";
  } else {
    music.pause();
    musicToggle.textContent = "♫";
  }
});

// Countdown — 25 October 2026, 10:00 AM IST
const target = new Date("2026-10-25T10:00:00+05:30").getTime();
function updateCountdown(){
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff/3600000)%24;
  const m=Math.floor(diff/60000)%60;
  const s=Math.floor(diff/1000)%60;
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

// Google Calendar
document.getElementById("calendarBtn").addEventListener("click",()=>{
  const params=new URLSearchParams({
    action:"TEMPLATE",
    text:"NaveenKumar & Sona - Engagement",
    dates:"20261025T043000Z/20261025T063000Z",
    details:"Engagement ceremony of NaveenKumar & Sona.",
    location:"AL RASI MAHAL A/C, Kangayam Rd, Amarjothi Garden, Bavani Nagar, Tiruppur, Tamil Nadu 641604"
  });
  window.open("https://calendar.google.com/calendar/render?"+params.toString(),"_blank");
});

// Decorative petals
const petals=document.querySelector(".petals");
for(let i=0;i<16;i++){
  const p=document.createElement("span");
  p.className="petal";
  p.style.left=(Math.random()*100)+"%";
  p.style.animationDuration=(8+Math.random()*8)+"s";
  p.style.animationDelay=(-Math.random()*12)+"s";
  p.style.setProperty("--drift",(-80+Math.random()*160)+"px");
  petals.appendChild(p);
}
