import Product from "../../src/models/product.js"

test('verificar se a app é geopeças', () => {
    const product = new Product('Geopeças', 'E-commerce de peças usadas')

    expect(product.name).toBe('Geopeças')
})