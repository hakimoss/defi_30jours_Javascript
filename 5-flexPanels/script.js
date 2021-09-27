
const panels =  document.querySelectorAll('.panel');

function openToggle() {
    // console.log('hello')
    this.classList.toggle('open')
}

function openActive(e) {
    console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {

        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', openToggle));
panels.forEach(panel => panel.addEventListener('transitionend', openActive));