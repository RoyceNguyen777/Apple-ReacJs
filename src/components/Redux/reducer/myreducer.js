import { Add_District, Add_Ward } from "../action/addressRedux"

const initalState = {
    address: '100C'
}
const AddressReducer = (state = initalState, action) => {
    switch (action.type) {
        case Add_Ward: {
            return {
                ...state,
                address: state.address + ' Phuong 8'
            }
        }
        case Add_District: {
            return {
                ...state,
                address: state.address + ' Go Vap'
            }
        }
        default: {
            return state
        }
    }
}
export default AddressReducer