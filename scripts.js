/* Colorize the website title */
const getColor = (inIndex, inRange) => {
 return Math.trunc(inIndex / inRange);
};

const colorize = (inElement) => {
  if(inElement) {
    const wordArr = inElement.textContent.split("");
    inElement.textContent = "";
    const range = Math.round(wordArr.length / 6);
    for(let index in wordArr) {
      const span = document.createElement('span');
      span.textContent = wordArr[Number(index)];
      const color = getColor(Number(index), range);
      span.style.setProperty('--hue', 60 * color);
      inElement.append(span);
    }
  }
};

const nameElements = document.querySelectorAll('[data-type="name"]');
for(const nameElement of nameElements) {
  colorize(nameElement);
}

/* Count up the remaining funds */
const countUp = () => {
  const funds = document.querySelectorAll('.funds');
  // Main function
  for(let fundElement of funds) {
    const animateRemainingFunds = () => {
      const target = Number(fundElement.getAttribute('data-pending-fund'));
      const count = + fundElement.innerText;
      const speed = 1000; // change animation speed here
      const inc = target / speed;
      if(count < target) {
        fundElement.innerText = Math.ceil(count + inc);
        setTimeout(animateRemainingFunds, 1);
      } else {
        fundElement.innerText = target;
      }
    }
    animateRemainingFunds();
  }
};

/* Show dialog */
const dialogOpener2022 = document.getElementById('dialogOpener2022');
const dialogOpener2023 = document.getElementById('dialogOpener2023');
const dialog2022 = document.getElementById('dialog2022');
const dialog2023 = document.getElementById('dialog2023');
const dialogClose2022 = document.getElementById('dialogClose2022');
const dialogClose2023 = document.getElementById('dialogClose2023');

dialogOpener2022.addEventListener('click', () => {
  dialog2022.showModal();
});

dialogClose2022.addEventListener('click', () => {
  dialog2022.close();
});

dialogOpener2023.addEventListener('click', () => {
  dialog2023.showModal();
});

dialogClose2023.addEventListener('click', () => {
  dialog2023.close();
});

const funds = document.getElementById('remaining-funds');
const observerOptions = {
  root: document.querySelector('body'),
  rootMarging: '0px',
  threshold: 1.0
}
const observerCallback = () => {
  countUp();
}
let observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(funds);
