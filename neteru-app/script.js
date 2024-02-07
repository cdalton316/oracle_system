const pickedCards = [];
class AudioController {
  constructor() {
    this.bgMusic = new Audio(
      '/neteru-app/background_music/Siddhi-TheSecretPass.mp3',
    );
    this.flipSound = new Audio('/neteru-app/assets/flip.wav');
    this.querySound = new Audio(
      '/neteru-app/background_music/LoboLoco-MonkDoor(ID 1832).mp3',
    );
    this.queryOverSound = new Audio(
      '/neteru-app/background_music/Ketsa-RainMan.mp3',
    );
    this.flipSound.volume = 1;
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
  stopMusic() {
    this.bgMusic.pause();
  }
  flip() {
    this.flipSound.play();
  }
  querySound() {
    this.querySound.play();
  }
  queryOver() {
    this.stopMusic();
    this.queryOverSound.play();
  }
}
class QuerySelector {
  constructor(cards) {
    this.cardsArray = cards;
    console.log(this.cardsArray);
    // this.hetepCard = hetep;
    this.card = document.querySelector('.img');
    console.log(this.card);
    this.audioController = new AudioController();
  }

  startQuery() {
    this.cardToCheck = null;
    // this.hetepCard = false;
    this.cardsToFlip = 2;
    this.queryCards = [];
    this.busy = true;
    setTimeout(() => {
      this.audioController.startMusic();
      this.shuffleCards();
      this.busy = false;
    }, 500);
    this.hideCards();
  }

  hideCards(card) {
    this.cardsArray.forEach((card) => {
      card.classList.remove('visible');
      card.classList.remove('complete');
    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      console.log(card.children[1].children[0].id);

      this.audioController.flip();
      this.cardsToFlip--;

      card.classList.add('visible');
      this.busy = true;
      // this.queryCards.push(card);
      if (card.children[1].children[0].id !== 'hetep') this.busy = false;
      setTimeout(() => {
        this.shuffleCards();

        this.hideCards();
      }, 500);

      if (this.cardToCheck) {
        this.checkForHetep(card);
      } else this.cardToCheck = card;
    }
    console.log(this.cardsToFlip);
  }

  checkForHetep(card) {
    // const cardValue = document.querySelector('.card-value');
    // console.log(cardValue.getAttribute('id'));
    if (this.getCardType(card) === 'hetep') this.hetep(card);
    else this.notHetep(card);
    this.cardToCheck = null;
  }
  hetep(card) {
    this.queryCards.push(card);
    console.log(card.children[1].children[0].id);
    pickedCards.push(card.children[1].children[0].id);
    this.audioController.queryOver();
    this.busy = true;
    this.overlay();
  }
  overlay(card) {
    const overlay = document.querySelector('.overlay-text');
    console.log(overlay);

    overlay.classList.add('visible');
  }
  notHetep(card) {
    this.busy = true;
    setTimeout(() => {}, 1000);
    this.busy = false;
  }
  getCardType(card) {
    return card.getElementsByClassName('card-value')[0].id;
  }

  queryOver() {
    clearInterval();
  }
  complete() {
    clearInterval(this.countDown);
    this.audioController.queryOver();
  }

  shuffleCards() {
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      this.cardsArray[randIndex].style.order = i;
      this.cardsArray[i].style.order = randIndex;
    }
  }

  canFlipCard(card) {
    console.log(this.cardsToFlip);
    console.log(card.children[1].children[0].id);

    // return true;
    return (
      this.cardsToFlip > 0 &&
      !this.busy &&
      !this.hetepCard &&
      card != this.cardToCheck &&
      !this.queryCards.includes(card)

      // !this.getCardType(card) === 'hetep'
    );
    //
  }
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));

  let cards = Array.from(document.getElementsByClassName('card__img'));

  let query = new QuerySelector(cards);
  overlays.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      query.startQuery();
    });
  });

  cards.forEach((card) => {
    console.log(card);
    console.log(card.children[1].children[0].id);
    card.addEventListener('click', () => {
      query.flipCard(card);
      cardType = card.children[1].children[0].id;
      console.log(pickedCards.length);

      if (pickedCards.length < 2 && cardType !== 'hetep')
        pickedCards.push(cardType);

      if (cardType === 'hetep' && pickedCards.length < 1) query.hetep(card);
      console.log(card);
      console.log(pickedCards);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}

// New QuerySelector

// class AudioController {
//   constructor() {
//       this.bgMusic = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/creepy.mp3');
//       this.flipSound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/flip.wav');
//       this.matchSound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/match.wav');
//       this.victorySound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/victory.wav');
//       this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
//       this.bgMusic.volume = 0.5;
//       this.bgMusic.loop = true;
//   }
//   startMusic() {
//       this.bgMusic.play();
//   }
//   stopMusic() {
//       this.bgMusic.pause();
//       this.bgMusic.currentTime = 0;
//   }
//   flip() {
//       this.flipSound.play();
//   }
//   match() {
//       this.matchSound.play();
//   }
//   victory() {
//       this.stopMusic();
//       this.victorySound.play();
//   }
//   gameOver() {
//       this.stopMusic();
//       this.gameOverSound.play();
//   }
// }

// class MixOrMatch {
//   constructor(totalTime, cards) {
//       this.cardsArray = cards;
//       this.totalTime = totalTime;
//       this.timeRemaining = totalTime;
//       this.timer = document.getElementById('time-remaining')
//       this.ticker = document.getElementById('flips');
//       this.audioController = new AudioController();
//   }

//   startGame() {
//       this.totalClicks = 0;
//       this.timeRemaining = this.totalTime;
//       this.cardToCheck = null;
//       this.matchedCards = [];
//       this.busy = true;
//       setTimeout(() => {
//           this.audioController.startMusic();
//           this.shuffleCards(this.cardsArray);
//           this.countdown = this.startCountdown();
//           this.busy = false;
//       }, 500)
//       this.hideCards();
//       this.timer.innerText = this.timeRemaining;
//       this.ticker.innerText = this.totalClicks;
//   }
//   startCountdown() {
//       return setInterval(() => {
//           this.timeRemaining--;
//           this.timer.innerText = this.timeRemaining;
//           if(this.timeRemaining === 0)
//               this.gameOver();
//       }, 1000);
//   }
//   gameOver() {
//       clearInterval(this.countdown);
//       this.audioController.gameOver();
//       document.getElementById('game-over-text').classList.add('visible');
//   }
//   victory() {
//       clearInterval(this.countdown);
//       this.audioController.victory();
//       document.getElementById('victory-text').classList.add('visible');
//   }
//   hideCards() {
//       this.cardsArray.forEach(card => {
//           card.classList.remove('visible');
//           card.classList.remove('matched');
//       });
//   }
//   flipCard(card) {
//       if(this.canFlipCard(card)) {
//           this.audioController.flip();
//           this.totalClicks++;
//           this.ticker.innerText = this.totalClicks;
//           card.classList.add('visible');

//           if(this.cardToCheck) {
//               this.checkForCardMatch(card);
//           } else {
//               this.cardToCheck = card;
//           }
//       }
//   }
//   checkForCardMatch(card) {
//       if(this.getCardType(card) === this.getCardType(this.cardToCheck))
//           this.cardMatch(card, this.cardToCheck);
//       else
//           this.cardMismatch(card, this.cardToCheck);

//       this.cardToCheck = null;
//   }
//   cardMatch(card1, card2) {
//       this.matchedCards.push(card1);
//       this.matchedCards.push(card2);
//       card1.classList.add('matched');
//       card2.classList.add('matched');
//       this.audioController.match();
//       if(this.matchedCards.length === this.cardsArray.length)
//           this.victory();
//   }
//   cardMismatch(card1, card2) {
//       this.busy = true;
//       setTimeout(() => {
//           card1.classList.remove('visible');
//           card2.classList.remove('visible');
//           this.busy = false;
//       }, 1000);
//   }
//   shuffleCards(cardsArray) {
//       for (let i = cardsArray.length - 1; i > 0; i--) {
//           const randIndex = Math.floor(Math.random() * (i + 1));
//           [cardsArray[i], cardsArray[randIndex]] = [cardsArray[randIndex], cardsArray[i]];
//       }
//       cardsArray = cardsArray.map((card, index) => {
//           card.style.order = index;
//       });
//   }
//   getCardType(card) {
//       return card.getElementsByClassName('card-value')[0].src;
//   }
//   canFlipCard(card) {
//       return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
//   }
// }

// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready()
// }

// function ready() {
//   let overlays = Array.from(document.getElementsByClassName('overlay-text'));
//   let cards = Array.from(document.getElementsByClassName('card'));
//   let game = new MixOrMatch(100, cards);

//   overlays.forEach(overlay => {
//       overlay.addEventListener('click', () => {
//           overlay.classList.remove('visible');
//           game.startGame();
//       });
//   });

//   cards.forEach(card => {
//       card.addEventListener('click', () => {
//           game.flipCard(card);
//       });
//   });
// }
