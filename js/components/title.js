'use strict'

class Title extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.title_name = ' '
        
        
    }

    static get observedAttributes(){
        return['title_name']
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
        .container__title {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            border-bottom: 4px solid var(--cor-vermelho);
        }
        
        .container__title--title {
            width: 100%;
            font-size: 3.5rem;
        }
        `

        return style
    }

    component() {
        const container = document.createElement('div')
        container.classList.add('container__title')
        const title = document.createElement('h1')
        title.classList.add('container__title--title')
        title.textContent = this.title_name

        container.appendChild(title)

        return container
    }
}

customElements.define('title-name', Title)