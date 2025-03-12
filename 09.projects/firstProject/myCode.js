const myButtons = document.querySelectorAll('.button')
const body = document.querySelector('body')
myButtons.forEach((button)=> {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        
    })
})
