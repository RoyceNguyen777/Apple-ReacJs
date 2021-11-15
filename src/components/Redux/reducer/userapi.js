import { FETCH_API_USER } from "../action/fetchapiUser"


const initState = []
const ApiUser = (state = initState, action) => {
    switch (action.type) {
        case FETCH_API_USER: {
            state = action.payload
            return [...state]
        }
        default: return [...state]
    }
}
export default ApiUser;