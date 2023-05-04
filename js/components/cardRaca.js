'use strict'

class CardRaca extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.titulo = 'Dragonborn'
        this.descricao = 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.'
        this.racial_traits = 'Racial Traits: '
        this.racial_description = '+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance'
        this.btn_title = 'view Dragonborn detail'
    }

    static get observedAttributes(){
        return['titulo', 'descricao', 'racial_traits', 'btn_title']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.style())
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        a{
            text-decoration: none;
        }

        .card {
            width: 370px;
            height: fit-content;
            min-height: 360px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--cor-cinza);
            color: var(--cor-branco);
            padding: 24px 15px 56px 15px;
            position: relative;
            border-radius: 5px;
        }

        .card__title {
            height: 42px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            border-bottom: 4px solid var(--cor-vermelho);
            margin-bottom: 14px;
        }

        .card__title--title {
            width: 100%;
            font-size: 2.25rem;
            font-weight: 700;
        }

        .card__description {
            width: 100%;
            height: fit-content;
            font-size: 1.25rem;
            margin-bottom: 32px;
        }

        .card__infos {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
        }

        .card__infos--info {
            font-size: 1.25rem;
            font-weight: 700;
        }

        .card__btn {
            height: 40px;
            display: grid;
            place-items: center;
            place-self: center;
            background-color: var(--cor-vermelho);
            position: absolute;
            top: 100%;
            transform: translateY(-50%);
            padding: 6px 34px;
            border-radius: 5px;
        }

        .card__btn:hover {
            cursor: pointer;
            background-color: var(--cor-azul-cinza);
            transition: 0.25s;
        }
        
        .card__btn--text {
            font-size: 1.25rem;
            color: var(--cor-branco);
        }
        `

        return style
    }

    component() {
    const card = document.createElement('div')
    card.classList.add('card')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('card__title')

    const title = document.createElement('p')
    title.classList.add('card__title--title')
    title.textContent = this.titulo

    const description = document.createElement('span')
    description.classList.add('card__description')
    description.textContent = this.descricao

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__infos')

    const racialTraits = document.createElement('div')
    racialTraits.classList.add('card__infos--info')
    racialTraits.classList.add('racial-traits')
    racialTraits.textContent = this.racial_traits

    const racialDesc = document.createElement('span')
    racialDesc.classList.add('card__description')
    racialDesc.textContent = this.racial_description

    const cardBtn = document.createElement('div')
    cardBtn.classList.add('card__btn')

    const btnLink = document.createElement('a')
    btnLink.classList.add('card__btn--text')
    btnLink.href = '#'
    btnLink.textContent = this.btn_title

    card.append(titleContainer, description, cardInfo, cardBtn)
    titleContainer.append(title)
    cardInfo.append(racialTraits, racialDesc)
    cardBtn.append(btnLink)

    return card
    }
   

}

customElements.define('card-raca', CardRaca)