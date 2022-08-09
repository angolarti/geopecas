class Product {

    constructor (app, description) {
        this.app = app
        this.description = description
    }

    get name () {
        return this.app
    }

    get details () {
        return this.description
    }
}

export default Product
