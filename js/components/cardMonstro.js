'use strict'

class CardMonstro extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.titulo = 'Aboleth'
        this.hit_dice = 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.'
        this.hit_points = 'Hit Die: '
        this.type = 'Type: '
        this.size = 'Size: '
        this.alignment = 'Alignment: '
        this.btn_title = 'view Aboleth detail'
        this.foto = '../img/img_classesaboleth.png'
    }

    static get observedAttributes() {
        return ['titulo', 'hit_dice', 'hit_points', 'type', 'size', 'alignment', 'btn_title', 'foto']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
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
            width: 100%;
            max-width: 370px;
            height: fit-content;
            min-height: 360px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--cor-cinza);
            color: var(--cor-branco);
            padding: 30px 15px 56px 15px;
            position: relative;
            border-radius: 5px;
            background-image: url(${this.foto});
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        
        .card__detail {
            height: fit-content;
            width: 100%;
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

        @media (max-width: 700px) {
            .card {
                max-width: 100%;
                min-height: 320px;
                padding: 24px 12px 50px 12px;
            }

            .card__detail {
                max-width: 100%;
            }

            .card__title--title {
                font-size: 1.4rem;
            }

            .card__infos--info {
                font-size: 0.7rem;
            }

            .card__btn--text {
                font-size: 1rem;
            }
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

        const hitDice = document.createElement('div')
        hitDice.classList.add('card__infos--info')
        hitDice.classList.add('hit-dice')
        hitDice.textContent = `Hit Dice: ${this.hit_dice}`

        const hitPoints = document.createElement('div')
        hitPoints.classList.add('card__infos--info')
        hitPoints.classList.add('hit-die')
        hitPoints.textContent = `Hit Points: ${this.hit_points}`

        const type = document.createElement('div')
        type.classList.add('card__infos--info')
        type.classList.add('type')
        type.textContent = `Type: ${this.type}`

        const size = document.createElement('div')
        size.classList.add('card__infos--info')
        size.classList.add('size')
        size.textContent = `Size: ${this.size}`

        const alignment = document.createElement('div')
        alignment.classList.add('card__infos--info')
        alignment.classList.add('alignment')
        alignment.textContent = `Alignment: ${this.alignment}`

        const cardBtn = document.createElement('div')
        cardBtn.classList.add('card__btn')
        cardBtn.addEventListener('click', (e) => {
            const modals = document.querySelectorAll('.modal-monster')
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
                    let modalHeight = modal.offsetHeight + 120;
                    let modalTop = 0
                    if (windowHeight >= (bodyH * 4)) {
                        modalTop = (bodyH * 4.5)
                        console.log(modalTop);
                        windowHeight = window.scrollTo(0, (((modalTop / 2) + modalTop / 3) + 90))
                        console.log(windowHeight);
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
        cardInfo.append(hitDice, hitPoints, type, size, alignment)
        cardBtn.append(btnLink)

        return card
    }


}

customElements.define('card-monstro', CardMonstro)