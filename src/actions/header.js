import { ADD_HEADER } from "./types";

export const createHeader = (formData) => async (dispatch) => {
    console.log("actions header 4 satir", formData)

    try {

        dispatch({ type: ADD_HEADER, payload: formData })




    } catch (error) {
        console.log("error from getUserEVents", error)

    }
}