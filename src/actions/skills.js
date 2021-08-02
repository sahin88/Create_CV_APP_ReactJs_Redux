import { ADD_SKILLS } from "./types";

export const createSkills = (formData) => async (dispatch) => {


    try {

        dispatch({ type: ADD_SKILLS, payload: formData })




    } catch (error) {
        console.log("error from createSkills", error)

    }
}