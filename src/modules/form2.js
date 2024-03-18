const form2 = () => {
  const form = document.querySelector('#form2');
  const nameInput = form.querySelector('.top-form');
  const emailInput = form.querySelector('.form-email');
  const telInput = form.querySelector('.form-phone');
  const formBtn = form.querySelector('.form-btn');

  console.log(form);
  console.log(nameInput);
  console.log(emailInput);
  console.log(telInput);
  console.log(formBtn);

  formBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    let isError = false;

    if (!/[^а-яА-Я]/g.test(nameInput.value) && emailInput.value !== '') {
      alert('Только Кирилица');
    }
    if (!/[\-\_\.\!\~\*\'\-\.\w]+@([\w]+\.)+[\w]+/gi.test(emailInput.value) && emailInput.value !== '') {
      alert('Корректный email');
    } else {
      isError = true;
    }

    if (!/[\-\()\^\d]/g.test(telInput.value) && telInput.value !== '') {
      alert('Только цифры');
    } else {
      isError = true;
    }

    if (!isError) {
      alert('Данные отправлены');
    }
  });
};


export default form2;

