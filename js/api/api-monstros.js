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