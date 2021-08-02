import { ADD_WORK } from "./types";

export const createWork = (formData) => async (dispatch) => {
    console.log("actions header 4 satir createWork", formData)

    try {

        dispatch({ type: ADD_WORK, payload: formData })




    } catch (error) {
        console.log("error from createWork", error)

    }
}