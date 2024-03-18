import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import tabs from './modules/tabs';
import validator from './modules/validator';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import sendForm from './modules/sendForm';

timer('19 march 2024');
menu();
modal();
calc(100);

tabs();
validator();
slider();
sliderCarousel();
sendForm({
  formId_1: 'form1',
  formId_2: 'form2',
  formId_3: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
