import { FETCH_API_CATEGORY } from "../action/fetchapiCate"

const initState = []
const CategoryAPI = (state = initState, action) => {
    switch (action.type) {
        case FETCH_API_CATEGORY: {
            state = action.payload
            return [...state]
        }
        default: return [...state]
    }
}

export default CategoryAPI;