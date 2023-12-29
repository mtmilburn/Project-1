const openBtn = document.querySelector("button")
const modal = document.querySelector("modal")
const closeBtn = document.querySelector("closeModal")



//~~~~~~~~~~~~~~~~~~~~~~~Event Listeners

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
//~~~~~~~~~~~~~~~~~~~~~~~Functions


const openModal = () => {
    modal.style.display = 'block';
}
const closeModal = () => {
    modal.style.display = 'none'
}