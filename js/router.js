'use strict'

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    //local
    // if (path == '/classes') {
    //     location.href = 'http://127.0.0.1:5500/pages/classes.html'
    // } else if (path == '/racas') {
    //     location.href = 'http://127.0.0.1:5500/pages/racas.html'
    // } else if (path == '/monstros') {
    //     location.href = 'http://127.0.0.1:5500/pages/monstros.html'
    // } else {
    //     location.href = 'http://127.0.0.1:5500/'
    // }

    //online
    if (path == '/classes') {
        location.href = 'https://dungeonanddragons.netlify.app/pages/classes.html'
    } else if (path == '/racas') {
        location.href = 'https://dungeonanddragons.netlify.app/pages/racas.html'
    } else if (path == '/monstros') {
        location.href = 'https://dungeonanddragons.netlify.app/pages/monstros.html'
    } else {
        location.href = 'https://dungeonanddragons.netlify.app/'
    }



}

window.route = route



