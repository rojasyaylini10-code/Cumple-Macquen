const surpriseBtn = document.getElementById('surpriseBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const raceBtn = document.getElementById('raceBtn');
const confetti = document.getElementById('confetti');

function launchConfetti(amount = 140) {
  const pieces = ['#e10600', '#ffd400', '#ffffff', '#111111', '#ff6b00'];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.setProperty('--x', (Math.random() * 260 - 130) + 'px');
    piece.style.animationDuration = (2.2 + Math.random() * 2.8) + 's';
    piece.style.animationDelay = (Math.random() * .5) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

surpriseBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  launchConfetti(180);
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

raceBtn.addEventListener('click', () => {
  launchConfetti(250);
  raceBtn.textContent = '⚡ ¡KA-CHOW! ⚡';
  setTimeout(() => modal.classList.add('hidden'), 1400);
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.classList.add('hidden');
});

// Un pequeño saludo al cargar la página.
window.addEventListener('load', () => {
  setTimeout(() => launchConfetti(70), 600);
});
