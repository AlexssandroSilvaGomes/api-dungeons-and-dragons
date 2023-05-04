'use strict'

const criarCardClasse = () => {
    const card = document.createElement('div')
    card.classList.add('card')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('card__title')

    const title = document.createElement('p')
    title.classList.add('card__title--title')
    title.textContent = 'Barbarian'

    const description = document.createElement('span')
    description.classList.add('card__description')
    description.textContent = 'A fierce warrior who can enter a battle rage'

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__infos')

    const hitDie = document.createElement('div')
    hitDie.classList.add('card__infos--info')
    hitDie.classList.add('hit-die')
    hitDie.innerHTML = 'Hit Die: '

    const primaryAbility = document.createElement('div')
    primaryAbility.classList.add('card__infos--info')
    primaryAbility.classList.add('primaryAbility')
    primaryAbility.innerHTML = 'Hit Die: '

    const saves = document.createElement('div')
    saves.classList.add('card__infos--info')
    saves.classList.add('saves')
    saves.innerHTML = 'Hit Die: '

    const cardBtn = document.createElement('div')
    cardBtn.classList.add('card__btn')

    const btnLink = document.createElement('a')
    btnLink.classList.add('card__btn--text')
    btnLink.href = '#'
    btnLink.innerHTML = 'view Barbarian detail'

    card.append(titleContainer, description, cardInfo, cardBtn)
    titleContainer.append(title)
    cardInfo.append(hitDie, primaryAbility, saves)
    cardBtn.append(btnLink)

    return card
}
