import { ADD_SKILLS } from "../actions/types";



const skills= (state = { skillsData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case ADD_SKILLS:

            return { ...state, skillsData: state.skillsData.concat(payload)}

        default:
            return state;
    }


}

export default skills;