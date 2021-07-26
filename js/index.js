const btnBurger = document.getElementById('btn-burger');
const btnMenu = document.getElementsByClassName('btn-menu');

btnBurger.addEventListener('click', function() {
  const menu = document.getElementById('menu');
  btnBurger.classList.toggle('more')
  menu.classList.toggle('more');
})


for(let i = 0; i < btnMenu.length; i++) {  
  btnMenu[i].addEventListener('click', function(e) {
    e.preventDefault()
    const btnActive = document. getElementsByClassName('active')
    
    if(btnActive.length > 0) {
      btnActive[0].className = btnActive[0].className.replace(' active', '')
    }
    
    this.className += ' active'

    const id = btnMenu[i].getAttribute('data-menu');
    const offset = window.pageYOffset + document.getElementById(id).getBoundingClientRect().top - 90
    window.scrollTo({top: offset, behavior: 'smooth'});
  })
}