const calc = () => {
  const calcBlock = document.querySelector('.calc-block');

  const inputs = calcBlock.querySelectorAll('.calc-item');

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      let isError = false;

      if (!/[^\d]/g.test(input.value) && input.value !== '') {
        alert('Только Цифры'); 
      } else {
        isError = true
      }

      if (!isError) {
        console.log('Calk');
      }
    });
  });
};

export default calc;


