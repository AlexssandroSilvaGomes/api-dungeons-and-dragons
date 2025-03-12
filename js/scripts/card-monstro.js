import { pegarNomeMonstros } from '../api/api-monstros.js'
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
    cardMonstro.id = monstro.name

    return cardMonstro
}

const criaModalMonstro = (monstro) => {
    let arrayArmorClass = []
    let arraySpeedName = Object.keys(monstro.speed)
    let arraySpeedValue = Object.values(monstro.speed)
    let arraySpeed = []
    let arrayProf = []
    let arraySkills = []
    let arraySensesName = Object.keys(monstro.senses)
    let arraySensesValue = Object.values(monstro.senses)
    let arraySenses = []
    let arrayLang = monstro.languages

    for (let i = 0; i < arraySpeedValue.length; i++) {
        if (arraySpeedValue[i] == true || arraySpeedValue[i] == false) {
            arraySpeed.push(`${arraySpeedName[i]}`)
        } else {
            arraySpeed.push(`${arraySpeedName[i]} ${arraySpeedValue[i]}`)
        }

    }

    for (let i = 0; i < arraySensesValue.length; i++) {
        arraySenses.push(`${arraySensesName[i].replace('_', ' ')} ${arraySensesValue[i]}`)
    }

    monstro.armor_class.forEach(armor => {
        let type = `(${armor.type} armor)`
        arrayArmorClass.push(`${armor.value} ${type}`)
    })

    monstro.proficiencies.forEach(prof => {
        let profs = prof.proficiency
        if (profs.index.match(/saving/)) {
            let subStr = profs.name
            arrayProf.push(`${subStr.substring((subStr.length - 3), subStr.length)} +${prof.value}`)
        } else {
            let subStr = profs.name
            let arrayStr = subStr.split(' ')
            arraySkills.push(`${arrayStr[1]} +${prof.value}`)
        }
    })

    if (arrayProf.length < 1) {
        arrayProf.push('none')
    }

    if (arraySkills.length < 1) {
        arraySkills.push('none')
    }

    if (arrayLang == '') {
        arrayLang = 'none'
    }

    const modalMonster = document.createElement('div')
    modalMonster.classList.add('modal-monster')
    modalMonster.id = monstro.name

    const modalMonsterContainer = document.createElement('div')
    modalMonsterContainer.classList.add('modal-monster__container')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container__title')

    const containerTitleH2 = document.createElement('h2')
    containerTitleH2.textContent = `${monstro.name}`
    containerTitleH2.classList.add(`${monstro.type}-title`)

    const containerTitleP = document.createElement('p')
    containerTitleP.textContent = `${monstro.size} ${monstro.type}, ${monstro.alignment}`

    const linha1 = document.createElement('div')
    linha1.classList.add('linha')
    linha1.classList.add(`${monstro.type}`)

    const containerLifeArmor = document.createElement('div')
    containerLifeArmor.classList.add('container__life-armor')

    const containerLifeArmorItemArmor = document.createElement('div')
    containerLifeArmorItemArmor.classList.add('container__life-armor--item')
    containerLifeArmorItemArmor.classList.add('armor')

    const containerLifeArmorItemArmorP = document.createElement('p')
    containerLifeArmorItemArmorP.innerHTML = `<b>Armor Class: </b>${arrayArmorClass.join(', ')}`

    const containerLifeArmorItemLife = document.createElement('div')
    containerLifeArmorItemLife.classList.add('container__life-armor--item')
    containerLifeArmorItemLife.classList.add('life')

    const containerLifeArmorItemLifeP = document.createElement('p')
    containerLifeArmorItemLifeP.innerHTML = `<b>Hit Points: </b>${monstro.hit_points} (${monstro.hit_points_roll})`

    const containerLifeArmorItemSpeed = document.createElement('div')
    containerLifeArmorItemSpeed.classList.add('container__life-armor--item')
    containerLifeArmorItemSpeed.classList.add('speed')

    const containerLifeArmorItemSpeedP = document.createElement('p')
    containerLifeArmorItemSpeedP.innerHTML = `<b>Speed: </b>${arraySpeed.join(', ')}`

    const linha2 = document.createElement('div')
    linha2.classList.add('linha')
    linha2.classList.add(`${monstro.type}`)

    const containerStatus = document.createElement('div')
    containerStatus.classList.add('container__status')

    const containerStatusStr = document.createElement('div')
    containerStatusStr.classList.add('container__status__status')
    containerStatusStr.classList.add('str')

    const containerStatusStrName = document.createElement('p')
    containerStatusStrName.classList.add('container__status__status--name')
    containerStatusStrName.textContent = 'STR'

    const containerStatusStrValue = document.createElement('p')
    containerStatusStrValue.classList.add('container__status__status--value')
    containerStatusStrValue.textContent = `${monstro.strength} (${tabelaAtributos(monstro.strength)})`

    const containerStatusDex = document.createElement('div')
    containerStatusDex.classList.add('container__status__status')
    containerStatusDex.classList.add('dex')

    const containerStatusDexName = document.createElement('p')
    containerStatusDexName.classList.add('container__status__status--name')
    containerStatusDexName.textContent = 'DEX'

    const containerStatusDexValue = document.createElement('p')
    containerStatusDexValue.classList.add('container__status__status--value')
    containerStatusDexValue.textContent = `${monstro.dexterity} (${tabelaAtributos(monstro.dexterity)})`

    const containerStatusCon = document.createElement('div')
    containerStatusCon.classList.add('container__status__status')
    containerStatusCon.classList.add('con')

    const containerStatusConName = document.createElement('p')
    containerStatusConName.classList.add('container__status__status--name')
    containerStatusConName.textContent = 'CON'

    const containerStatusConValue = document.createElement('p')
    containerStatusConValue.classList.add('container__status__status--value')
    containerStatusConValue.textContent = `${monstro.constitution} (${tabelaAtributos(monstro.constitution)})`

    const containerStatusInt = document.createElement('div')
    containerStatusInt.classList.add('container__status__status')
    containerStatusInt.classList.add('int')

    const containerStatusIntName = document.createElement('p')
    containerStatusIntName.classList.add('container__status__status--name')
    containerStatusIntName.textContent = 'INT'

    const containerStatusIntValue = document.createElement('p')
    containerStatusIntValue.classList.add('container__status__status--value')
    containerStatusIntValue.textContent = `${monstro.intelligence} (${tabelaAtributos(monstro.intelligence)})`

    const containerStatusWis = document.createElement('div')
    containerStatusWis.classList.add('container__status__status')
    containerStatusWis.classList.add('wis')

    const containerStatusWisName = document.createElement('p')
    containerStatusWisName.classList.add('container__status__status--name')
    containerStatusWisName.textContent = 'WIS'

    const containerStatusWisValue = document.createElement('p')
    containerStatusWisValue.classList.add('container__status__status--value')
    containerStatusWisValue.textContent = `${monstro.wisdom} (${tabelaAtributos(monstro.wisdom)})`

    const containerStatusCha = document.createElement('div')
    containerStatusCha.classList.add('container__status__status')
    containerStatusCha.classList.add('cha')

    const containerStatusChaName = document.createElement('p')
    containerStatusChaName.classList.add('container__status__status--name')
    containerStatusChaName.textContent = 'CHA'

    const containerStatusChaValue = document.createElement('p')
    containerStatusChaValue.classList.add('container__status__status--value')
    containerStatusChaValue.textContent = `${monstro.charisma} (${tabelaAtributos(monstro.charisma)})`

    const linha3 = document.createElement('div')
    linha3.classList.add('linha')
    linha3.classList.add(`${monstro.type}`)

    const containerInfos = document.createElement('div')
    containerInfos.classList.add('container__infos')

    const containerInfosSaving = document.createElement('div')
    containerInfosSaving.classList.add('container__infos-info')
    containerInfosSaving.classList.add('saving')

    const containerInfosSavingP = document.createElement('p')
    containerInfosSavingP.innerHTML = `<b>Saving Throws: </b>${arrayProf.join(', ')}`

    const containerInfosSkills = document.createElement('div')
    containerInfosSkills.classList.add('container__infos-info')
    containerInfosSkills.classList.add('skills')

    const containerInfosSkillsP = document.createElement('p')
    containerInfosSkillsP.innerHTML = `<b>Skills: </b>${arraySkills.join(', ')}`

    const containerInfosSenses = document.createElement('div')
    containerInfosSenses.classList.add('container__infos-info')
    containerInfosSenses.classList.add('senses')

    const containerInfosSensesP = document.createElement('p')
    containerInfosSensesP.innerHTML = `<b>Senses: </b>${arraySenses.join(', ')}`

    const containerInfosLanguages = document.createElement('div')
    containerInfosLanguages.classList.add('container__infos-info')
    containerInfosLanguages.classList.add('language')

    const containerInfosLanguagesP = document.createElement('p')
    containerInfosLanguagesP.innerHTML = `<b>Languages: </b> ${arrayLang}`

    const containerInfosChallenge = document.createElement('div')
    containerInfosChallenge.classList.add('container__infos-info')
    containerInfosChallenge.classList.add('challenge')

    const containerInfosChallengeP = document.createElement('p')
    containerInfosChallengeP.innerHTML = `<b></b>`

    const linha4 = document.createElement('div')
    linha4.classList.add('linha')
    linha4.classList.add(`${monstro.type}`)

    const containerAbilities = document.createElement('div')
    containerAbilities.classList.add('container__abilities')

    const containerAbilitiesAbility = document.createElement('div')
    containerAbilitiesAbility.classList.add('container__abilities-ability')

    monstro.special_abilities.forEach(ability => {
        const containerAbilitiesAbilityP = document.createElement('p')
        containerAbilitiesAbilityP.innerHTML = `<b>${ability.name}: </b>${ability.desc}`
        containerAbilitiesAbility.append(containerAbilitiesAbilityP)
    })

    const btnClose = document.createElement('button')
    btnClose.classList.add('button-close')
    btnClose.textContent = 'Close'
    btnClose.addEventListener('click', () => {
        const overlay = document.getElementById('overlay')
        modalMonster.classList.remove('active')
        overlay.style.display = 'none'
        document.body.style.overflow = 'auto';
    })

    modalMonster.append(modalMonsterContainer)
    modalMonsterContainer.append(containerTitle, linha1, containerLifeArmor, linha2, containerStatus, linha3, containerInfos, linha4, containerAbilities, btnClose)
    containerTitle.append(containerTitleH2, containerTitleP)
    containerLifeArmor.append(containerLifeArmorItemArmor, containerLifeArmorItemLife, containerLifeArmorItemSpeed)
    containerLifeArmorItemArmor.append(containerLifeArmorItemArmorP)
    containerLifeArmorItemLife.append(containerLifeArmorItemLifeP)
    containerLifeArmorItemSpeed.append(containerLifeArmorItemSpeedP)
    containerStatus.append(containerStatusStr, containerStatusDex, containerStatusCon, containerStatusInt, containerStatusWis, containerStatusCha)
    containerStatusStr.append(containerStatusStrName, containerStatusStrValue)
    containerStatusDex.append(containerStatusDexName, containerStatusDexValue)
    containerStatusCon.append(containerStatusConName, containerStatusConValue)
    containerStatusInt.append(containerStatusIntName, containerStatusIntValue)
    containerStatusWis.append(containerStatusWisName, containerStatusWisValue)
    containerStatusCha.append(containerStatusChaName, containerStatusChaValue)
    containerInfos.append(containerInfosSaving, containerInfosSkills, containerInfosSenses, containerInfosLanguages, containerInfosChallenge)
    containerInfosSaving.append(containerInfosSavingP)
    containerInfosSkills.append(containerInfosSkillsP)
    containerInfosSenses.append(containerInfosSensesP)
    containerInfosLanguages.append(containerInfosLanguagesP)
    containerInfosChallenge.append(containerInfosChallengeP)
    containerAbilities.append(containerAbilitiesAbility)
    

    return modalMonster

}

const tabelaAtributos = (atributo) => {
    if (atributo == 1) {
        return '-5'
    } else if (atributo == 2 || atributo == 3) {
        return '-4'
    } else if (atributo == 4 || atributo == 5) {
        return '-3'
    } else if (atributo == 6 || atributo == 7) {
        return '-2'
    } else if (atributo == 8 || atributo == 9) {
        return '-1'
    } else if (atributo == 10 || atributo == 11) {
        return '+0'
    } else if (atributo == 12 || atributo == 13) {
        return '+1'
    } else if (atributo == 14 || atributo == 15) {
        return '+2'
    } else if (atributo == 16 || atributo == 17) {
        return '+3'
    } else if (atributo == 18 || atributo == 19) {
        return '+4'
    } else if (atributo == 20 || atributo == 21) {
        return '+5'
    } else if (atributo == 22 || atributo == 23) {
        return '+6'
    } else if (atributo == 24 || atributo == 25) {
        return '+7'
    } else if (atributo == 26 || atributo == 27) {
        return '+8'
    } else if (atributo == 28 || atributo == 29) {
        return '+9'
    } else {
        return '+10'
    }
}

export const carregarCardMonstro = () => {
    const container = document.getElementById('container-monstro')
    let newMonstrosArray = []
    monstros.forEach(monstros => {
        if (monstros.image != undefined) {
            newMonstrosArray.push(monstros)
        }
    })
    newMonstrosArray.forEach(monstro => {
        container.append(criaCardMonstro(monstro), criaModalMonstro(monstro))
    })
    console.log(newMonstrosArray);
}

const reload = document.querySelector('.loading-screen')
const container = document.querySelector('.container')

//local
// if (location.href == 'http://127.0.0.1:5500/pages/monstros.html') {
//     reload.style.display = 'flex'
//     container.style.display = 'none'
//     setTimeout(() => {
//         reload.style.display = 'none'
//         container.style.display = 'grid'
//     }, 2000)
//     carregarCardMonstro()
// }

if (location.href == 'https://dungeonanddragons.netlify.app/pages/monstros.html') {
    reload.style.display = 'flex'
    container.style.display = 'none'
    setTimeout(() => {
        reload.style.display = 'none'
        container.style.display = 'grid'
    }, 2000)
    carregarCardMonstro()
}