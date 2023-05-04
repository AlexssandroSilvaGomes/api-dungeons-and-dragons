'use strict'

class CardMonstro extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.titulo = 'Aboleth'
        this.descricao = 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.'
        this.hit_die = 'Hit Die: '
        this.type = 'Type: '
        this.size = 'Size: '
        this.alignment = 'Alignment: '
        this.btn_title = 'view Aboleth detail'
        this.foto = '../img/aboleth.png'
    }

    static get observedAttributes(){
        return['titulo', 'descricao', 'hit_die', 'type', 'size', 'alignment', 'btn_title', 'foto']
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
        
        #monster-card {
            background-image: url(${this.foto});
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        
        .card__detail {
            height: fit-content;
            width: 270px;
            display: flex;
            justify-content: center;
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
            margin-bottom: 14px;
        }
        
        #monster-card__title {
            margin-bottom: 10px;
        }
        
        .card__title--title {
            width: 100%;
            font-size: 2.25rem;
            font-weight: 700;
        }
        
        #monster-card__title--title {
            font-size: 1.25rem
        }
        
        .card__description {
            width: 100%;
            height: fit-content;
            font-size: 1.25rem;
            margin-bottom: 32px;
        }
        
        #monster-card--desc {
            margin-bottom: 14px;
            font-size: 0.625rem;
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
        
        #monster-card--info {
            gap: 10px;
        }
        
        .card__infos--info {
            font-size: 1.25rem;
            font-weight: 700;
        }
        
        #monster-card--text {
            font-size: 0.625rem;
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
    card.id = 'monster-card'

    const detail = document.createElement('div')
    detail.classList.add('card__detail')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('card__title')
    titleContainer.id = 'monster-card__title'

    const title = document.createElement('p')
    title.classList.add('card__title--title')
    title.id = 'monster-card__title--title'
    title.textContent = this.titulo

    const description = document.createElement('span')
    description.classList.add('card__description')
    description.id = 'monster-card--desc'
    description.textContent = this.descricao

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__infos')
    cardInfo.id = 'monster-card--info'

    const hitDie = document.createElement('div')
    hitDie.classList.add('card__infos--info')
    hitDie.classList.add('hit-die')
    hitDie.id = 'monster-card--text'
    hitDie.textContent = this.hit_die

    const type = document.createElement('div')
    type.classList.add('card__infos--info')
    type.classList.add('type')
    type.id = 'monster-card--text'
    type.textContent = this.type

    const size = document.createElement('div')
    size.classList.add('card__infos--info')
    size.classList.add('size')
    size.id = 'monster-card--text'
    size.textContent = this.size

    const alignment = document.createElement('div')
    alignment.classList.add('card__infos--info')
    alignment.classList.add('alignment')
    alignment.id = 'monster-card--text'
    alignment.textContent = this.alignment

    const cardBtn = document.createElement('div')
    cardBtn.classList.add('card__btn')

    const btnLink = document.createElement('a')
    btnLink.classList.add('card__btn--text')
    btnLink.href = '#'
    btnLink.textContent = this.btn_title

    card.append(detail, cardBtn)
    detail.append(titleContainer, description, cardInfo)
    titleContainer.append(title)
    cardInfo.append(hitDie, type, size, alignment)
    cardBtn.append(btnLink)

    return card
    }
   

}

customElements.define('card-monstro', CardMonstro)