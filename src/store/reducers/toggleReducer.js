const initialState = {
    favourites: [],
    watchLater: []
};

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVOURITE":
            return {
                ...state,
                favourites: state.favourites.includes(action.payload)
                    ? state.favourites.filter(id => id !== action.payload)
                    : [...state.favourites, action.payload]
            };
        case "TOGGLE_WATCH_LATER":
            return {
                ...state,
                watchLater: state.watchLater.includes(action.payload)
                ? state.watchLater.filter(id => id !== action.payload)
                : [...state.watchLater, action.payload]
            }
        default:
            return state
    }
}

export default toggleReducer