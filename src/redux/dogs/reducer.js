import { ADD_DOG, ADD_DOG_FINISH, ADD_DOG_START, DELETE_DOG, UPDATE_DOG, } from "./actionType";
import { localStorageHelper } from "../../helpers/localStorageHelper";

const initialState = {
    dogs: {
        items: localStorageHelper.getItem("dogs") || [],
        loading: false
    }
};

const dogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DOG: {
            return {
                ...state,
                dogs: {
                    ...state.dogs,
                    items: [...state.dogs.items, payload]
                },
            }
        }

        case ADD_DOG_START: {
            return {
                ...state,
                dogs: {
                    ...state.dogs,
                    loading: true
                },
            }
        }

        case ADD_DOG_FINISH: {
            return {
                ...state,
                dogs: {
                    ...state.dogs,
                    loading: false
                },
            }
        }

        case DELETE_DOG: {
            return {
                ...state,
                dogs: {
                    ...state.dogs,
                    items: state.dogs.items.filter(({ id }) => id !== payload)
                },
            }
        }

        case UPDATE_DOG: {
            return {
                ...state,
                dogs: {
                    ...state.dogs,
                    items: state.dogs.items.map((dog) => {
                        if (dog.id === payload.id) {
                            return payload
                        }
                        return dog;
                    }),
                },
            }
        }

        default:
            return state;
    }
}

export default dogsReducer;