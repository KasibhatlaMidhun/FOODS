const icons = document.querySelectorAll('.section1-icons i');

let j = 1;

setInterval(() => {

  j++;
  
  const icon = document.querySelector('.section1-icons .change');
  icon.classList.remove('change');
  
  if(j > icons.length) {
    icons[0].classList.add('change');
    j = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 2000);