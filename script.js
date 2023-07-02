

// Fonction pour taper les lettres du Titre

const text = "Frontend Mentor";
const delay = 100;
const el = document.getElementById('typed-text');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    if (text.charAt(i) === "<") {
      // Si on trouve une balise HTML, on avance jusqu'à la fin de la balise
      const endIndex = text.indexOf(">", i) + 1;
      el.innerHTML += text.slice(i, endIndex);
      i = endIndex;
    } else {
      // Sinon, on ajoute la lettre courante au texte affiché avec le curseur à la fin
      el.innerHTML = text.slice(0, i) + '<span class="cursor">|</span>';
      i++;
    }

    // Attend un délai avant de taper la prochaine lettre
    setTimeout(typeWriter, delay);
  } else {
    // Ajoute le curseur clignotant à la fin
    el.innerHTML = text + '<span class="cursor">|</span>';
  }
}
typeWriter();

// Fonction pour écrire le texte de la section "About"

const text1 = "sur cette page qui a pour but de répertorier tous les challenges Frontend Mentor que j'ai réalisés...";
const text2 = "cette page sera mise à jour en fonction des challenges terminés. Bonne visite !";
const delayTxt = 300; // Délai de 300 millisecondes entre les mots
const el1 = document.getElementById('about__txt--typed');

let wordIndex = 0;
let textIndex = 0;
let currentText = text1;
let words = currentText.split(' ');

function typeWriterTxt() {
  if (wordIndex < words.length) {
    const word = document.createElement('span');
    word.classList.add('fade-in');
    word.textContent = words[wordIndex] + ' ';
    el1.appendChild(word);
    wordIndex++;
    setTimeout(typeWriterTxt, delayTxt);

  } else {
    setTimeout(() => {
      el1.innerHTML = '';
      wordIndex = 0;
      textIndex = (textIndex + 1) % 2;
      currentText = textIndex === 0 ? text1 : text2;
      words = currentText.split(' ');
      typeWriterTxt();
    }, delayTxt * 10); 
  }
}
setTimeout(typeWriterTxt, 1000); 

// Fonction pour gérer l'affichage des sections en fonction du scroll...

const aboutSection = document.querySelector('.about');
const challengeSection = document.querySelector('.challenge');
const completed = document.getElementById('challenge--completed');

let isAboutVisible = true;

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 0 && isAboutVisible) {
    aboutSection.classList.add('hidden');
    challengeSection.classList.remove('hidden');
    isAboutVisible = false;
    updateChallengeCount()
 
  } else if (scrollPosition === 0 && !isAboutVisible) {
    aboutSection.classList.remove('hidden');
    challengeSection.classList.add('hidden');
    isAboutVisible = true;
    completed.textContent = 0
}
});

// Fonction pour compter le nombre de Challenge effectué

function updateChallengeCount() {
  const counter = document.getElementById('challenge--counter');
  const completed = document.getElementById('challenge--completed');

  const cards = counter.querySelectorAll('.challenge__card');
  const numChallenges = cards.length;

  let count = 0;
  const intervalId = setInterval(() => {
    completed.textContent = count.toString();
    count++;

    if (count > numChallenges) {
      clearInterval(intervalId);
    }
  }, 200);
 
}

// Fonction pour gérer l'animation d'entrée des cards "challenge"

const cards = document.querySelectorAll('.challenge__list > li .challenge__card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});






























  
  
  
  
  
  
  

