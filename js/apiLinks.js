export const pegarNomeClasses = async () => {
    const url = 'https://www.dnd5eapi.co/api/classes';
    const response = await fetch(url);
    const dados = await response.json()
    return dados
}

