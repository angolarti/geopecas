test('verificar se a app é geopeças', () => {
    const product = {
        app: 'Geopeças',
        descrition: 'E-commerce de peças'
    }

    expect(product.app).toBe('Geopeças')
})