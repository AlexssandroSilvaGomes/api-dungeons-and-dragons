'use strict'

const dndApiGeral = async () => {
    const url = `https://www.dnd5eapi.co/api/classes`;
    const response = await fetch(url);
    const dados = await response.json()
    return dados
}


class ButtonDetail extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.description = `view  detail`
    }

    static get observedAttributes(){
        return['description']
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
        const btn = document.createElement('div')
        btn.classList.add('card__btn')
        const btnText = document.createElement('a')
        btnText.classList.add('card__btn--text')
        btnText.href = '#'
        btnText.innerHTML = this.description

        btn.appendChild(btnText)

        
        return btn
    }
   

}

customElements.define('btn-detail', ButtonDetail)
