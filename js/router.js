'use strict'

import { carregarCardClasse } from "./scripts.js"

const routes =  {
    '/' : '/pages/home.html',
    '/classes' : '/pages/classes.html',
    '/racas' : '/pages/racas.html',
    '/monstros' : '/pages/monstros.html',
    '/outros' : '/pages/outros.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

     document.getElementById('root').innerHTML = html
    
    if(window.location.pathname == '/classes') {
        carregarCardClasse()
    }
    
    
}

window.route = route