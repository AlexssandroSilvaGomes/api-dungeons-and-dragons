'use strict'

import './router.js'


/******************************************** CARD CLASSE ************************************************************/

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
    console.log(classe.proficiencies)
    profArray.splice(profArray.length - 2, 2)
    console.log(profArray)


    const cardClasse = document.createElement('card-classe')
    cardClasse.titulo = classe.name
    cardClasse.hit_die = classe.hit_die
    cardClasse.proficiencies = profArray.join(", ")
    cardClasse.saves = savesArray.join(" & ")
    cardClasse.btn_title = classe.name
    cardClasse.foto = `../img/img_classes/${classe.index}.png`

    return cardClasse
}



export const carregarCardClasse = () => {
    const container = document.getElementById('container-classe')
    const cardClasse = classes.map(criaCardClasse)

    container.replaceChildren(...cardClasse)
}




/******************************************** CARD RAÇAS ************************************************************/

import { pegarNomeRacas } from './apiLinks.js'
const racas = await pegarNomeRacas()

const criaCardRaca = (raca) => {
    let langArray = []
    let traitsArray = []
    let bonusArray = []
    let languages = raca.languages.forEach(lang => {
        langArray.push(lang.name)
        return langArray
    })

    let traits = raca.traits.forEach(trait => {
        traitsArray.push(" " + trait.name)
        return traitsArray
    })

    let bonuses = raca.ability_bonuses.forEach(bonus => {
        bonusArray.push("+" + bonus.bonus + " " + bonus.ability_score.name)
        return bonusArray
    })

    const cardRaca = document.createElement('card-raca')
    cardRaca.titulo = raca.name
    cardRaca.size = raca.size
    cardRaca.languages = langArray.join(", ")
    cardRaca.ability_bonuses = bonusArray.join(", ")
    if (raca.name == 'Human') {
        cardRaca.traits = 'Extra Language'
    } else {
        cardRaca.traits = traitsArray
    }
    cardRaca.btn_title = raca.name
    cardRaca.foto = `../img/img_racas/${raca.index}.png`

    return cardRaca
}

export const carregarCardRaca = () => {
    const container = document.getElementById('container-raca')
    const cardRaca = racas.map(criaCardRaca)

    container.replaceChildren(...cardRaca)
}

/******************************************** CARD MONSTROS ************************************************************/

import { pegarNomeMonstros } from './apiLinks.js'
const monstros = await pegarNomeMonstros()
console.log(monstros);

const criaCardMonstro = (monstro) => {

    const cardMonstro = document.createElement('card-monstro')
    cardMonstro.titulo = monstro.name
    cardMonstro.hit_dice = monstro.hit_dice
    cardMonstro.hit_points = monstro.hit_points
    cardMonstro.type = monstro.type
    cardMonstro.size = monstro.size
    cardMonstro.alignment = monstro.alignment
    cardMonstro.btn_title = monstro.name
    cardMonstro.foto = `'https://www.dnd5eapi.co/api/images/monsters/${monstro.index}.png'`

    return cardMonstro
}

export const carregarCardMonstro = () => {
    const container = document.getElementById('container-monstro')
    let newMonstrosArray = []
    monstros.forEach(monstros => {
        if (monstros.image != undefined) {
            newMonstrosArray.push(monstros)
        }
    })
    const cardMonstro = newMonstrosArray.map(criaCardMonstro)

    container.replaceChildren(...cardMonstro)
}

