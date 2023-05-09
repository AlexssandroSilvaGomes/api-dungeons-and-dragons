export const pegarNomeClasses = async () => {
    const url = 'https://www.dnd5eapi.co/api/classes'
    const response = await fetch(url)
    const dados = await response.json()
    const dadosClasse = await Promise.all( dados.results.map(classe => pegarClasseInfo(classe.index)) )       
    
    
    return dadosClasse
}

const pegarClasseInfo = async (nome) => {
    const url = `https://www.dnd5eapi.co/api/classes/${nome}`
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

export const pegarNomeRacas = async () => {
    const url = 'https://www.dnd5eapi.co/api/races'
    const response = await fetch(url)
    const dados = await response.json()
    const dadosRaca = await Promise.all( dados.results.map(raca => pegarRacaInfo(raca.index)) )       
    
    
    return dadosRaca
}

const pegarRacaInfo = async (nome) => {
    const url = `https://www.dnd5eapi.co/api/races/${nome}`
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

export const pegarNomeMonstros = async () => {
    const url = 'https://www.dnd5eapi.co/api/monsters'
    const response = await fetch(url)
    const dados = await response.json()
    
    const dadosMonstro = await Promise.all(dados.results.map(monstro => pegarMonstroInfo(monstro.index)))       
    
    return dadosMonstro
}

const pegarMonstroInfo = async (nome) => {
    const url = `https://www.dnd5eapi.co/api/monsters/${nome}`
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}
