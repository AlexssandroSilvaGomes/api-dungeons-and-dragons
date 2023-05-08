'use strict'

import './router.js'

import { pegarNomeClasses } from './apiLinks.js'

const classes = await pegarNomeClasses()

const criaCardClasse = (classe) => {
    let savesArray = []
    let profArray = []
    const saves = classe.saving_throws.forEach(save => {
        savesArray.push(save.name)
        return savesArray
    });
    const prof = classe.proficiencies.forEach(proficience => {
        profArray.push(proficience.name)
        return profArray
    });
    
    const cardClasse = document.createElement('card-classe')
    cardClasse.titulo = classe.name
    // cardClasse.descricao
    cardClasse.hit_die = classe.hit_die
    cardClasse.proficiencies = `${profArray[0]}, ${profArray[1]} ...`
    cardClasse.saves = `${savesArray[0]} & ${savesArray[1]}`
    cardClasse.btn_title = classe.name

    return cardClasse
}



export const carregarCardClasse = () => {
    const container = document.getElementById('container-classe')
    const cardClasse = classes.map(criaCardClasse)

    container.replaceChildren(...cardClasse)


}