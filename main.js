const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.querySelector('.output');
const outputContainer = document.querySelector('.output-container');


button.addEventListener('click', validation);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    validation();
  }
})

function validation() {
  outputContainer.classList.remove("hidden");
  if (!input.value) {
    outputContainer.classList.add('invalid');
    output.textContent = '\"Please enter a valid number\"';
    return;
  }
  else if  (input.value < 0) {
    output.textContent = '\"Please enter a number greater than or equal to 1\"';
    return;
  }
  else if (input.value > 3999) {
    output.textContent = '\"Please enter a number less than or equal to 3999';
    return;
  }else {
     outputContainer.classList.remove('invalid');
    output.textContent = convert(input.value);
    return;
  }
}
function convert(number) {
  let result = '';
  let localNumb = number;
  for (const {value, id} of romanNumeralValues) {
      while (localNumb >= value) {
        result += id;
        localNumb -= value;
      }
    }
    return result;
}


const romanNumeralValues = [
  { value: 1000, id: 'M' },
  { value: 900, id: 'CM' },
  { value: 500, id: 'D' },
  { value: 400, id: 'CD' },
  { value: 100, id: 'C' },
  { value: 90, id: 'XC' },
  { value: 50, id: 'L' },
  { value: 40, id: 'XL' },
  { value: 10, id: 'X' },
  { value: 9, id: 'IX' },
  { value: 5, id: 'V' },
  { value: 4, id: 'IV' },
  { value: 1, id: 'I' },
];









