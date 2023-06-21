'use strict'

class CardRaca extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.titulo = 'Dragonborn'
        this.size = 'Medium'
        this.languages = 'common, draconic'
        this.ability_bonuses = '+2 Strength, +1 Charisma'
        this.traits = ' Draconic Ancestry, Breath Weapon, Damage Resistance'
        this.btn_title = 'view Dragonborn detail'
        this.foto = '../img/img_racas/dragonborn.png'
    }

    static get observedAttributes(){
        return['titulo', 'size', 'languages', 'ability_bonuses', 'traits', 'btn_title', 'foto']
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
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--cor-card);
            color: var(--cor-branco);
            padding: 30px 15px 56px 15px;
            position: relative;
            border-radius: 5px;
            background-image: url(${this.foto});
            background-position: 150% 0%;
            background-size: 80%;
            background-repeat: no-repeat;
        }
        
        .card__detail {
            height: fit-content;
            max-width: 270px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--cor-cinza-alpha);
            padding: 19px 10px;
            border-radius: 5px;
        }
        
        .card__title {
            height: 42px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            border-bottom: 4px solid var(--cor-vermelho);
            margin-bottom: 10px;
        }
        
        .card__title--title {
            width: 100%;
            font-size: 1.75rem;
            font-weight: 700;
        }
        
        .card__infos {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
        }
        
        .card__infos--info {
            font-size: 0.75rem;
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
    
    const detail = document.createElement('div')
    detail.classList.add('card__detail')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('card__title')

    const title = document.createElement('p')
    title.classList.add('card__title--title')
    title.textContent = this.titulo

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__infos')

    const size = document.createElement('div')
    size.classList.add('card__infos--info')
    size.classList.add('size')
    size.textContent = `Size: ${this.size}`

    const languages = document.createElement('div')
    languages.classList.add('card__infos--info')
    languages.classList.add('languages')
    languages.textContent = `Languages: ${this.languages}`

    const abilityBonuses = document.createElement('div')
    abilityBonuses.classList.add('card__infos--info')
    abilityBonuses.classList.add('ability-bonuses')
    abilityBonuses.textContent = `Ability Bonuses: ${this.ability_bonuses}`

    const traits = document.createElement('div')
    traits.classList.add('card__infos--info')
    traits.classList.add('traits')
    traits.textContent = `Racial Traits: ${this.traits}`

    const cardBtn = document.createElement('div')
    cardBtn.classList.add('card__btn')
    cardBtn.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal-race')
        modals.forEach(modal => {
            if (modal.getAttribute('id') == this.titulo) {
                e.preventDefault()

                const overlay = document.getElementById('overlay')
                modal.classList.add('active')
                overlay.style.display = 'block'
                document.body.style.overflow = 'hidden'

                const body = document.querySelector('body')
                    const bodyH = body.offsetHeight
                    
                    let windowHeight = window.scrollY;
                    let modalHeight = modal.offsetHeight + 50;
                    let modalTop = 0
                    if(windowHeight >= (bodyH / 2)) {
                        modalTop = (bodyH + (bodyH / 3))
                        windowHeight = window.scrollTo(0, ((modalTop / 2) + 120))
                        console.log(modalTop);
                        console.log('uiui');
                    } else {
                        modalTop = windowHeight + (modalHeight / 2);
                        console.log(modalTop);
                    }
                    modal.style.top = `${modalTop}px`;
            }
        })

    })

    const btnLink = document.createElement('a')
    btnLink.classList.add('card__btn--text')
    btnLink.href = '#'
    btnLink.textContent = `view ${this.btn_title} detail`

    card.append(detail, cardBtn)
    detail.append(titleContainer, cardInfo)
    titleContainer.append(title)
    cardInfo.append(size, languages, abilityBonuses, traits)
    cardBtn.append(btnLink)

    return card
    }
   

}

customElements.define('card-raca', CardRaca)