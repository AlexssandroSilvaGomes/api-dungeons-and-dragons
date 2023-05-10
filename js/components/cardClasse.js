'use strict'

class CardClasse extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.titulo = 'Barbarian'
        this.hit_die = ''
        this.proficiencies = ''
        this.saves = ''
        this.btn_title = 'view Barbarian detail'
        this.foto = '../img/img_classes/barbarian.png'
    }

    static get observedAttributes(){
        return['titulo', 'hit_die', 'proficiencies', 'primary_ability', 'saves', 'btn_title', 'foto']
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

    const hitDie = document.createElement('div')
    hitDie.classList.add('card__infos--info')
    hitDie.classList.add('hit-die')
    hitDie.textContent = `Hit Die: ${this.hit_die}`

    const proficiencies = document.createElement('div')
    proficiencies.classList.add('card__infos--info')
    proficiencies.classList.add('proficiencies')
    proficiencies.textContent = `Proficiencies: ${this.proficiencies}` 

    const saves = document.createElement('div')
    saves.classList.add('card__infos--info')
    saves.classList.add('saves')
    saves.textContent = `Saves: ${this.saves}`

    const cardBtn = document.createElement('div')
    cardBtn.classList.add('card__btn')

    const btnLink = document.createElement('a')
    btnLink.classList.add('card__btn--text')
    btnLink.href = '#'
    btnLink.textContent = `view ${this.btn_title} detail`

    card.append(detail, cardBtn)
    detail.append(titleContainer, cardInfo)
    titleContainer.append(title)
    cardInfo.append(hitDie, proficiencies, saves)
    cardBtn.append(btnLink)

    return card
    }
   

}

customElements.define('card-classe', CardClasse)



