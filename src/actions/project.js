import { ADD_PROJECT } from "./types";

export const createProject = (formData) => async (dispatch) => {


    try {

        dispatch({ type: ADD_PROJECT, payload: formData })




    } catch (error) {
        console.log("error from createProject", error)

    }
}