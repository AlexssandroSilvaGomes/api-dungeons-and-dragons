import { pegarNomeRacas } from '../api/api-raca.js'
const racas = await pegarNomeRacas()
console.log(racas);

const criaCardRaca = (raca) => {
    let langArray = []
    let traitsArray = []
    let bonusArray = []
    raca.languages.forEach(lang => {
        langArray.push(lang.name)
        return langArray
    })

    raca.traits.forEach(trait => {
        traitsArray.push(" " + trait.name)
        return traitsArray
    })

    raca.ability_bonuses.forEach(bonus => {
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
    cardRaca.id = raca.name

    return cardRaca
}

const criaModalRaca = (raca) => {
    let abilityScoreArray = []
    let traitsArray = []

    raca.ability_bonuses.forEach(ability => {
        const score = ability.ability_score
        abilityScoreArray.push(`${score.name} + ${ability.bonus}`)

    })

    raca.traits.forEach(trait => {
        traitsArray.push(trait.name)
    })


    const modalRace = document.createElement('div')
    modalRace.classList.add('modal-race')
    modalRace.id = raca.name

    const modalRaceContainer = document.createElement('div')
    modalRaceContainer.classList.add('modal-race__container')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container__title')

    const title = document.createElement('h2')
    title.textContent = raca.name

    const containerTitleTraits = document.createElement('div')
    containerTitleTraits.classList.add('container__title-traits')

    const containerTitleTraitsTitle = document.createElement('h3')
    containerTitleTraitsTitle.classList.add('container__title-traits--title')
    containerTitleTraitsTitle.textContent = `${raca.name} Traits`

    const containerTitleTraitsLine = document.createElement('div')
    containerTitleTraitsLine.classList.add('container__title-traits--linha')

    const containerTitleTraitsDesc = document.createElement('p')
    containerTitleTraitsDesc.classList.add('container__title-traits--desc')
    containerTitleTraitsDesc.textContent = `As a ${raca.index}, you gain the following racial traits.`

    const containerTraits = document.createElement('div')
    containerTraits.classList.add('container__traits')

    const containerTraitsAbilityScore = document.createElement('div')
    containerTraitsAbilityScore.classList.add('container__traits-trait')
    containerTraitsAbilityScore.classList.add('ability-score')
    const containerTraitsAbilityScoreP = document.createElement('p')
    containerTraitsAbilityScoreP.innerHTML = `<b>Ability Score Increase: </b>${abilityScoreArray.join(', ')}`

    const containerTraitsSpeed = document.createElement('div')
    containerTraitsSpeed.classList.add('container__traits-trait')
    containerTraitsSpeed.classList.add('speed')
    const containerTraitsSpeedP = document.createElement('p')
    containerTraitsSpeedP.innerHTML = `<b>Speed: </b>${raca.speed}feet (${Math.round(raca.speed / 3.2)}m)`

    const containerTraitsAge = document.createElement('div')
    containerTraitsAge.classList.add('container__traits-trait')
    containerTraitsAge.classList.add('age')
    const containerTraitsAgeP = document.createElement('p')
    containerTraitsAgeP.innerHTML = `<b>Age: </b>${raca.age}`

    const containerTraitsAlignment = document.createElement('div')
    containerTraitsAlignment.classList.add('container__traits-trait')
    containerTraitsAlignment.classList.add('alignment')
    const containerTraitsAlignmentP = document.createElement('p')
    containerTraitsAlignmentP.innerHTML = `<b>Alignment: </b>${raca.alignment}`

    const containerTraitsSize = document.createElement('div')
    containerTraitsSize.classList.add('container__traits-trait')
    containerTraitsSize.classList.add('size')
    const containerTraitsSizeP = document.createElement('p')
    containerTraitsSizeP.innerHTML = `<b>Size: </b>${raca.size_description}`

    const containerTraitsTraits = document.createElement('div')
    containerTraitsTraits.classList.add('container__traits-trait')
    containerTraitsTraits.classList.add('traits')
    const containerTraitsTraitsP = document.createElement('p')
    if(traitsArray.length < 1) {
        traitsArray.push('none')
    }
    containerTraitsTraitsP.innerHTML = `<b>Traits: </b>${traitsArray.join(', ')}`

    const containerTraitsLanguage = document.createElement('div')
    containerTraitsLanguage.classList.add('container__traits-trait')
    containerTraitsLanguage.classList.add('language')
    const containerTraitsLanguageP = document.createElement('p')
    containerTraitsLanguageP.innerHTML = `<b>Language: </b>${raca.language_desc}`

    const btnClose = document.createElement('button')
    btnClose.classList.add('button-close')
    btnClose.textContent = 'Close'
    btnClose.addEventListener('click', () => {
        const overlay = document.getElementById('overlay')
        modalRace.classList.remove('active')
        overlay.style.display = 'none'
        document.body.style.overflow = 'auto';
    })

    modalRace.append(modalRaceContainer)
    modalRaceContainer.append(containerTitle, containerTitleTraits, containerTraits, btnClose)
    containerTitle.append(title)
    containerTitleTraits.append(containerTitleTraitsTitle, containerTitleTraitsLine, containerTitleTraitsDesc)
    containerTraits.append(containerTraitsAbilityScore, containerTraitsSpeed, containerTraitsAge, containerTraitsAlignment, containerTraitsSize, containerTraitsTraits, containerTraitsLanguage)
    containerTraitsAbilityScore.append(containerTraitsAbilityScoreP)
    containerTraitsSpeed.append(containerTraitsSpeedP)
    containerTraitsAge.append(containerTraitsAgeP)
    containerTraitsAlignment.append(containerTraitsAlignmentP)
    containerTraitsSize.append(containerTraitsSizeP)
    containerTraitsTraits.append(containerTraitsTraitsP)
    containerTraitsLanguage.append(containerTraitsLanguageP)

    return modalRace
}

export const carregarCardRaca = () => {
    const container = document.getElementById('container-raca')
    racas.forEach(raca => {
        container.append(criaCardRaca(raca), criaModalRaca(raca))
    })
}

const reload = document.querySelector('.loading-screen')
const container = document.querySelector('.container')

// //local
// if (location.href == 'http://127.0.0.1:5500/pages/racas.html') {
//     reload.style.display = 'flex'
//     container.style.display = 'none'
//     setTimeout(() => {
//         reload.style.display = 'none'
//         container.style.display = 'grid'
//     }, 2000)
//     carregarCardRaca()
// }

//online
if (location.href == 'https://dungeonanddragons.netlify.app/pages/racas.html') {
    reload.style.display = 'flex'
    container.style.display = 'none'
    setTimeout(() => {
        reload.style.display = 'none'
        container.style.display = 'grid'
    }, 2000)
    carregarCardRaca()
}