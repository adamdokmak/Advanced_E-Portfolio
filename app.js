function darkMode() {
    document.querySelector('body').classList.toggle('dark-mode')
}

function contact(event) {
    event.preventDefault();
    document.querySelector('.modal__loading-state').style.display = 'flex'
    emailjs.send('service_ajqoypr', 'template_ccfxqnc', {
        message: document.getElementsByName('message')[0].value,
        user_name: document.getElementsByName('user_name')[0].value
    }).then(function () {
        document.querySelector('.modal__success-state').style.display = 'flex'
    }).catch(function () {
        document.querySelector('.modal__failed-state').style.display = 'flex'
    });
}

function toggleModal() {
    let modalShown = document.querySelector('body').classList.contains('modal__show')

    if (modalShown) {
        document.querySelector('body').classList.remove('modal__show')
        document.querySelector('body').classList.add('delayed__transition')

    } else if (!modalShown) {
        document.querySelector('body').classList.add('modal__show')
        document.querySelector('body').classList.remove('delayed__transition')
        document.querySelector('.modal__failed-state').style.display = 'none'
        document.querySelector('.modal__success-state').style.display = 'none'
        document.querySelector('.modal__loading-state').style.display = 'none'
    }
}

function moveBackground(event) {
    let shapes = document.querySelectorAll('.shape')
    let x = event.clientX / 20
    let y = event.clientY / 20
    for (let i = 0; i < shapes.length; i++) {
        let isOdd = i % 2 === 1
        let booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px) rotate(${x * 10}deg)`
    }
}

function updateYear() {
    const year = new Date().getFullYear().toString()
    const yearEl = document.getElementById('year')
    yearEl.innerText = year
}

updateYear()
