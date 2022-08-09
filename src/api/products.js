import { Router } from "express"


export const router = Router()

function handler (request, response) {
    response.json({
        app: 'Geopeças',
        descrition: 'E-commerce de peças'
    })
}

router.get('', handler)
