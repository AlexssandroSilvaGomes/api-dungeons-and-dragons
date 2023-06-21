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