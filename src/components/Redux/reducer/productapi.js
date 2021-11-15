import { FETCH_API_PRODUCT } from "../action/fetchapi"

const initState = []
const ApiProduct = (state = initState, action) => {
    switch (action.type) {
        case FETCH_API_PRODUCT: {
            state = action.payload
            return [...state]
        }
        default: return [...state]
    }
}
export default ApiProduct;