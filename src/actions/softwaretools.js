import { ADD_SOFTWARE_TOOLS } from "./types";

export const createSoftwareTools = (formData) => async (dispatch) => {
    console.log("sfffffffff",formData)

    try {

        dispatch({ type: ADD_SOFTWARE_TOOLS, payload: formData })




    } catch (error) {
        console.log("error from createSoftwareTools", error)

    }
}