import { ADD_EDUCATION } from "./types";

export const createEducation = (formData) => async (dispatch) => {
    console.log("actions header 4 satir createEducation", formData)

    try {

        dispatch({ type: ADD_EDUCATION, payload: formData })




    } catch (error) {
        console.log("error from createEducation", error)

    }
}