const icons = document.querySelectorAll('.icon');
const navMain = document.querySelector('.header-wraper');
const navToggle = document.querySelector('.header-nav__burger');

icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('closed')) {
      navMain.classList.remove('closed');
      navMain.classList.add('opened');
    } else {
      navMain.classList.add('closed');
      navMain.classList.remove('opened');
    }
  });

