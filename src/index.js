import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import form1 from './modules/form1';
import form2 from './modules/form2';
import form3 from './modules/form3';
import tabs from './modules/tabs';
import validator from './modules/validator';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import sendForm from './modules/sendForm';

timer('19 march 2024');
menu();
modal();
calc(100);
form1();
form2();
form3();
tabs();
validator();
slider();
sliderCarousel()
sendForm({
   formId: 'form1', 
   formId: 'form2', 
   formId: 'form3', 
   someElem: [
      {
        type: 'block',
        id: 'total'
      }
   ] 
  });







