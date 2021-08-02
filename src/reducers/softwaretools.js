import { ADD_SOFTWARE_TOOLS } from "../actions/types";



const softwareTools= (state = { softwareToolData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_SOFTWARE_TOOLS:

            return { ...state, softwareToolData: state.softwareToolData.concat(payload) }

        default:
            return state;
    }


}

export default softwareTools;