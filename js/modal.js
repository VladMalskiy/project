const modalController = () => {
    const buttonElem = document.querySelector('[data-modal-open]');
    const modalElem = document.querySelector('[data-modal]');
    const bodyElem = document.querySelector('body');
  
    const closeModal = event => {
      const target = event.target;
  
      if (target === modalElem || target.closest('[data-modal-close]')) {
        bodyElem.classList.remove('fixed');
        modalElem.classList.remove('active');
      }
    }
  
    const openModal = () => {
      bodyElem.classList.add('fixed');
      modalElem.classList.add('active');
    };
    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);
  };
  modalController();

const mobileButton = document.querySelector('.js--header-button');
const mobileMenu = document.querySelector('.js--mobile-menu');

mobileButton.addEventListener('click', (e) => {
    e.preventDefault
    mobileButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

document.addEventListener('click', (e) => {
        if(!mobileButton.contains(e.target) && !mobileMenu.contains(e.target)){
            mobileButton.classList.remove('active');
            mobileMenu.classList.remove('active');
        } 
})