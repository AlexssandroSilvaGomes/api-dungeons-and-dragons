'use strict'

import './router.js'

import { pegarNomeClasses } from './apiLinks.js'

const classes = await pegarNomeClasses()


const carregarcardClasse = () => {
    const container = document.getElementById('container-classe')
    const cardClasse = classes.results.map(criaCardClasse)

    container.replaceChildren(...cardClasse)
}

