const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastcheck;
function handleCheck(e) {
    // console.log(e)
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkbox.forEach( checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastcheck) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })       
    }
    lastcheck = this;
}

checkbox.forEach(checkbox => checkbox.addEventListener('click', handleCheck))