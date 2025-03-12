import { pegarNomeClasses } from '../api/api-classe.js'

const classes = await pegarNomeClasses()

console.log(classes);

const criaCardClasse = (classe) => {
    let savesArray = []
    let profArray = []
    classe.saving_throws.forEach(save => {
        savesArray.push(save.name)
    });
    classe.proficiencies.forEach(proficience => {
        profArray.push(proficience.name)
    });
    profArray.splice(profArray.length - 2, 2)

    const cardClasse = document.createElement('card-classe')
    cardClasse.titulo = classe.name
    cardClasse.hit_die = classe.hit_die
    cardClasse.proficiencies = profArray.join(", ")
    cardClasse.saves = savesArray.join(" & ")
    cardClasse.btn_title = classe.name
    cardClasse.foto = `../img/img_classes/${classe.index}.png`
    cardClasse.id = classe.name

    return cardClasse
}

const criaDialogClasse = (classe) => {
    let savesArray = []
    let armorArray = []
    let weaponsArray = []
    let toolsArray = []
    let auxArray = []
    let profChoices = ''

    classe.saving_throws.forEach(save => {
        savesArray.push(save.name)
    });

    classe.proficiencies.forEach(prof => {
        const id = prof.index

        if (!id.match(/saving/)) {
            auxArray.push(id)
        }
    })

    auxArray.forEach(prof => {
        if (prof.match(/armor/) || prof.match(/shields/)) {
            armorArray.push(prof)
        } else if (prof.match(/tools/) || prof.match(/kit/)) {
            toolsArray.push(prof)
        } else {
            weaponsArray.push(prof)
        }
    })
    if (weaponsArray.length == 0) {
        weaponsArray.push('none')
    }
    if (armorArray.length == 0) {
        armorArray.push('none')
    }
    if (toolsArray.length == 0) {
        toolsArray.push('none')
    }

    classe.proficiency_choices.forEach(choice => {
        profChoices = choice.desc
    })

    const dialog = document.createElement('div')
    dialog.classList.add('dialog-class')
    dialog.id = classe.name


    const container = document.createElement('div')
    container.classList.add('dialog-class__container')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container__title')

    const titulo = document.createElement('h2')
    titulo.classList.add('container__title--title')
    titulo.textContent = `${classe.name}`

    const containerFeature = document.createElement('div')
    containerFeature.classList.add('container__feature')

    const featureSubtitle = document.createElement('h4')
    featureSubtitle.classList.add('container__feature--subtitle')
    featureSubtitle.textContent = 'Class Features'

    const featureDesc = document.createElement('p')
    featureDesc.classList.add('contaner__feature--desc')
    featureDesc.textContent = `As a ${classe.index}, you gain the following class features.`

    const containerHitPoints = document.createElement('div')
    containerHitPoints.classList.add('container__hit-points')

    const hitPointsTitle = document.createElement('h3')
    hitPointsTitle.classList.add('container__hit-points--title')
    hitPointsTitle.textContent = 'Hit Points'

    const hitPointsInfo = document.createElement('div')
    hitPointsInfo.classList.add('container__hit-points--infos')

    const hitDice = document.createElement('div')
    hitDice.classList.add('container__hit-points--infos-infos')
    hitDice.classList.add('hit-dice')

    const hitDiceSpan = document.createElement('span')
    hitDiceSpan.textContent = 'Hit Dice:'

    const hitDiceP = document.createElement('p')
    hitDiceP.textContent = `1d${classe.hit_die} per ${classe.index} level`

    const hitPointsFirst = document.createElement('div')
    hitPointsFirst.classList.add('container__hit-points--infos-infos')
    hitPointsFirst.classList.add('hit-points-first')

    const hitPointsFirstSpan = document.createElement('span')
    hitPointsFirstSpan.textContent = 'Hit Points at 1st Level:'

    const hitPointsFirstP = document.createElement('p')
    hitPointsFirstP.textContent = `${classe.hit_die} + your Constitution modifier`

    const hitPointsHigher = document.createElement('div')
    hitPointsHigher.classList.add('container__hit-points--infos-infos')
    hitPointsHigher.classList.add('hit-points-higher')

    const hitPointsHigherSpan = document.createElement('span')
    hitPointsHigherSpan.textContent = 'Hit Points at Higher Levels:'

    const halfDie = (classe.hit_die / 2) + 1

    const hitPointsHigherP = document.createElement('p')
    hitPointsHigherP.textContent = `1d${classe.hit_die} (or ${halfDie}) + your Constitution modifier per ${classe.index} level after 1st`

    const containerProficiencies = document.createElement('div')
    containerProficiencies.classList.add('container__proficiencies')

    const profTitle = document.createElement('h3')
    profTitle.classList.add('container__proficiencies--title')
    profTitle.textContent = 'Proficiencies'

    const profInfos = document.createElement('div')
    profInfos.classList.add('container__proficiencies--infos')

    const profArmor = document.createElement('div')
    profArmor.classList.add('container__proficiencies--infos-infos')
    profArmor.classList.add('armor')

    const profArmorSpan = document.createElement('span')
    profArmorSpan.textContent = 'Armor:'

    const profArmorP = document.createElement('p')
    profArmorP.textContent = `${armorArray.join(', ')}`

    const profWeapons = document.createElement('div')
    profWeapons.classList.add('container__proficiencies--infos-infos')
    profWeapons.classList.add('weapons')

    const profWeaponsSpan = document.createElement('span')
    profWeaponsSpan.textContent = 'Weapons:'

    const profWeaponsP = document.createElement('p')
    profWeaponsP.textContent = `${weaponsArray.join(', ')}`

    const profTools = document.createElement('div')
    profTools.classList.add('container__proficiencies--infos-infos')
    profTools.classList.add('tools')

    const profToolsSpan = document.createElement('span')
    profToolsSpan.textContent = 'Tools:'

    const profToolsP = document.createElement('p')
    profToolsP.textContent = `${toolsArray.join(', ')}`

    const profSavings = document.createElement('div')
    profSavings.classList.add('container__proficiencies--infos-infos')
    profSavings.classList.add('savings')

    const profSavingsSpan = document.createElement('span')
    profSavingsSpan.textContent = 'Saving Throws:'

    const profSavingsP = document.createElement('p')
    profSavingsP.textContent = `${savesArray.join(", ")}`

    const profSkills = document.createElement('div')
    profSkills.classList.add('container__proficiencies--infos-infos')
    profSkills.classList.add('skills')

    const profSkillsSpan = document.createElement('span')
    profSkillsSpan.textContent = 'Skills:'

    const profSkillsP = document.createElement('p')
    profSkillsP.textContent = `${profChoices}`

    const containerEquipment = document.createElement('div')
    containerEquipment.classList.add('container__equipment')

    const equipmentTitle = document.createElement('h3')
    equipmentTitle.classList.add('container__equipment--title')
    equipmentTitle.textContent = 'Equipment'

    const equipmentInfo = document.createElement('div')
    equipmentInfo.classList.add('container__equipment--infos')

    const equipmentInfoDesc = document.createElement('p')
    equipmentInfoDesc.classList.add('container__equipment--infos-desc')
    equipmentInfoDesc.textContent = ' You start with the following equipment, in addition to the equipment granted by your background:'

    const list = document.createElement('ul')

    classe.starting_equipment_options.forEach(equipment => {
        const li = document.createElement('li')
        li.textContent = equipment.desc
        list.append(li)
    })

    const btnClose = document.createElement('button')
    btnClose.classList.add('button-close')
    btnClose.textContent = 'Close'
    btnClose.addEventListener('click', () => {
        const overlay = document.getElementById('overlay')
        dialog.classList.remove('active')
        overlay.style.display = 'none'
        document.body.style.overflow = 'auto';

    })

    dialog.append(container)
    container.append(containerTitle, containerFeature, containerHitPoints, containerProficiencies, containerEquipment, btnClose)
    containerTitle.append(titulo)
    containerFeature.append(featureSubtitle, featureDesc)
    containerHitPoints.append(hitPointsTitle, hitPointsInfo)
    hitPointsInfo.append(hitDice, hitPointsFirst, hitPointsHigher)
    hitDice.append(hitDiceSpan, hitDiceP)
    hitPointsFirst.append(hitPointsFirstSpan, hitPointsFirstP)
    hitPointsHigher.append(hitPointsHigherSpan, hitPointsHigherP)
    containerProficiencies.append(profTitle, profInfos)
    profInfos.append(profArmor, profWeapons, profTools, profSavings, profSkills)
    profArmor.append(profArmorSpan, profArmorP)
    profWeapons.append(profWeaponsSpan, profWeaponsP)
    profTools.append(profToolsSpan, profToolsP)
    profSavings.append(profSavingsSpan, profSavingsP)
    profSkills.append(profSkillsSpan, profSkillsP)
    containerEquipment.append(equipmentTitle, equipmentInfo)
    equipmentInfo.append(equipmentInfoDesc, list)

    return dialog
}

export const carregarCardClasse = () => {
    const container = document.getElementById('container-classe')
    classes.forEach(classe => {
        container.append(criaCardClasse(classe), criaDialogClasse(classe))
    })


}

const reload = document.querySelector('.loading-screen')
const container = document.querySelector('.container')

//local
// if (location.href == 'http://127.0.0.1:5500/pages/classes.html') {
//     reload.style.display = 'flex'
//     container.style.display = 'none'
//     setTimeout(() => {
//         reload.style.display = 'none'
//         container.style.display = 'grid'
//     }, 2000)
//     carregarCardClasse()

// }

if (location.href == 'https://dungeonanddragons.netlify.app/pages/classes.html') {
    reload.style.display = 'flex'
    container.style.display = 'none'
    setTimeout(() => {
        reload.style.display = 'none'
        container.style.display = 'grid'
    }, 2000)
    carregarCardClasse()

}
