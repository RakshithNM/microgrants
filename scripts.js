const getColor = (inIndex, inRange) => {
 return Math.trunc(inIndex / inRange);
}

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
      console.log(span, "span");
      inElement.append(span);
    }
  }
}

const nameElements = document.querySelectorAll('[data-type="name"]');
for(const nameElement of nameElements) {
  colorize(nameElement);
}
