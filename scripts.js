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

