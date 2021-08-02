import { ADD_WORK } from "../actions/types";



const works= (state = { workData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_WORK:

            return { ...state, workData: [...state.workData, payload] }

        default:
            return state;
    }


}

export default works;