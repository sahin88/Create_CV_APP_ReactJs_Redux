import { ADD_EDUCATION } from "../actions/types";



const education= (state = { educationData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_EDUCATION:

            return { ...state, educationData: [...state.educationData, payload] }

        default:
            return state;
    }


}

export default education;