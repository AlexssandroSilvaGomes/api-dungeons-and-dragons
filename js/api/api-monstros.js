let cacheListaMonstros = null

const pegarListaMonstros = async () => {
    if (cacheListaMonstros) {
        return cacheListaMonstros
    }

    const url = 'https://www.dnd5eapi.co/api/monsters'
    const response = await fetch(url)
    const dados = await response.json()

    cacheListaMonstros = dados.results
    return cacheListaMonstros
}

export const pegarMonstrosPagina = async (pagina = 1, pageSize = 10) => {
    const lista = await pegarListaMonstros()
    const total = lista.length
    const totalPages = Math.max(1, Math.ceil(total / pageSize))
    const paginaAtual = Math.min(Math.max(1, pagina), totalPages)
    const start = (paginaAtual - 1) * pageSize

    const paginaLista = lista.slice(start, start + pageSize)
    const dadosMonstro = await Promise.all(paginaLista.map(monstro => pegarMonstroInfo(monstro.index)))

    return {
        monstros: dadosMonstro,
        total,
        pagina: paginaAtual,
        pageSize,
        totalPages
    }
}

const pegarMonstroInfo = async (nome) => {
    const url = `https://www.dnd5eapi.co/api/monsters/${nome}`
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}