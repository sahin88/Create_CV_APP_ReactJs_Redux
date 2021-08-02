import { ADD_PROJECT } from "../actions/types";



const project= (state = { projectData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_PROJECT:

            return { ...state, projectData: [...state.projectData, payload] }

        default:
            return state;
    }


}

export default project;