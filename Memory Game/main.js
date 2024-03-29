let cardOne = null;
let cardTwo = null;
let clickPermission = true;

let trying = document.getElementsByClassName('trying')[0].querySelector('span');

let successing = document.getElementsByClassName('successing')[0].querySelector('span');

const cards = document.getElementsByClassName("game-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML += '<i class="fa fa-question-circle"></i>';
}

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    if (clickPermission == true && !cards[i].classList.contains("okay")) {
      cards[i].classList.add("flip");

      if (cardOne == null) {
        cardOne = i;
      } else {
        if (i != cardOne) {
          cardTwo = i;
          clickPermission = false;
        }
      }

      if (cardOne != null && cardTwo != null && cardOne != cardTwo) {
        if (
          cards[cardOne].firstElementChild.className ===
          cards[cardTwo].firstElementChild.className
        ) {
          setTimeout(() => {
            cards[cardOne].classList.add("okay");
            cards[cardTwo].classList.add("okay");

            cardOne = null;
            cardTwo = null;
            clickPermission = true;
            successing.innerHTML = parseInt(successing.innerText) + 1;
          }, 500);
        } else {
          setTimeout(() => {
            cards[cardOne].classList.remove("flip");
            cards[cardTwo].classList.remove("flip");

            cardOne = null;
            cardTwo = null;
            clickPermission = true;
          }, 1000);
        }
        trying.innerHTML = parseInt(trying.innerText) + 1;
      }
    }
  };
}
