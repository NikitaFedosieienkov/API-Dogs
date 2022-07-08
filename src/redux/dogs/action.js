import axios from "axios"
import { ADD_DOG, ADD_DOG_FINISH, ADD_DOG_START, DELETE_DOG, UPDATE_DOG, } from "./actionType";

export const addDog = () => (dispatch) => {
    const id = new Date().getTime();
    dispatch({ type: ADD_DOG_START })
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => dispatch({ type: ADD_DOG, payload: { ...response.data, name: "Rex", id } }))
        .then(() => dispatch({ type: ADD_DOG_FINISH }))
};

export const deleteDog = (id) => ({ type: DELETE_DOG, payload: id });
export const renameDog = (dog) => ({ type: UPDATE_DOG, payload: dog });
export const changeImage = (dog) => (dispatch) => {
    dispatch({ type: ADD_DOG_START })
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => dispatch({ type: UPDATE_DOG, payload: { ...dog, message: response.data.message } }))
        .then(() => dispatch({ type: ADD_DOG_FINISH }))

};

