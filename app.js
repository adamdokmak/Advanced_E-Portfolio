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

function toggleModal(event) {
    event.preventDefault()
    let modalShown = document.querySelector('body').classList.contains('modal__show')
    if (modalShown) {
        document.querySelector('body').classList.remove('modal__show')
        document.querySelector('body').classList.add('delayed__transition')

    } else if (!modalShown) {
        document.querySelector('body').classList.add('modal__show')
        document.querySelector('body').classList.remove('delayed__transition')

    }
}

// template_ccfxqnc
// service_ajqoypr
// Y8W8pEBYE_phrKv1G
