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