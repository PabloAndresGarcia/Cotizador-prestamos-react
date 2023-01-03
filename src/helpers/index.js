const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USH'
    })
    return formatter.format(valor)
}

export {
    formatearDinero
}