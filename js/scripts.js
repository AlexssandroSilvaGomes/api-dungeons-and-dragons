'use strict'

import './router.js'

import { pegarNomeClasses } from './apiLinks.js'
// import { pegarClasseInfo } from './apiLinks.js'

const classes = await pegarNomeClasses()








const criaCardClasse = (classe) => {

    // const d = await fetch(`https://www.dnd5eapi.co/api/classes/barbarian`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         return data
    //     })
    const cardClasse = document.createElement('card-classe')
    cardClasse.titulo = classe.name
    // cardClasse.descricao
    cardClasse.hit_die = fetch(`https://www.dnd5eapi.co/api/classes/barbarian`).then((res) => res.json()).then((data) => {
            data.hit_die
        })
    // cardClasse.primary_ability
    // cardClasse.saves
    cardClasse.btn_title = classe.name






    return cardClasse
}



export const carregarCardClasse = () => {
    const container = document.getElementById('container-classe')
    const cardClasse = classes.results.map(criaCardClasse)

    container.replaceChildren(...cardClasse)
}