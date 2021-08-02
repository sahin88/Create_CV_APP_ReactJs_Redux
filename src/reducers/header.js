import { ADD_HEADER } from "../actions/types";



const header = (state = { headerData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_HEADER:

            return { ...state, headerData: [...state.headerData, payload] }

        default:
            return state;
    }


}

export default header;