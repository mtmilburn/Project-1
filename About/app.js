const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');


//~~~~~~~~~~~~~~~~~~~~~~~Functions

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none'
}

//~~~~~~~~~~~~~~~~~~~~~~~Event Listeners

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);