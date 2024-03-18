const sendForm = ({ formId_1, formId_2, formId_3, someElem = [] }) => {
  const form_1 = document.getElementById(formId_1);
  const form_2 = document.getElementById(formId_2);
  const form_3 = document.getElementById(formId_3);
  const statusBlock = document.createElement('div');
  const loadText = 'Load...';
  const errorText = 'Error';
  const successText = 'Спасибо! наш менеджер с вами свяжется';

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  const validate = (list) => {
    let success = true;

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = (form) => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;

    form.append(statusBlock);
    form.append(spinner);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          spinner.remove();
          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((e) => {
          statusBlock.textContent = errorText;
        });

      setTimeout(() => {
        statusBlock.textContent = '';
      }, 5000);
    } else {
      alert('Данные не корректны');
    }
  };

  try {
    if (!form_1) {
      throw new Error('Верните форму на место, пожалуйста!))');
    } else if (!form_3) {
      throw new Error('Верните форму на место, пожалуйста!))');
    } else if (!form_3) {
      throw new Error('Верните форму на место, пожалуйста!))');
    }

    form_1.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm(form_1);
    });
    form_2.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm(form_2);
    });
    form_3.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm(form_3);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
