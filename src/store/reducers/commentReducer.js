const initialState = {
    commentsByFilm: {} // Объект, где ключом является ID фильма, а значением — массив комментариев
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            const { filmId, comment } = action.payload;
            const currentComments = state.commentsByFilm[filmId] || [];

            return {
                ...state,
                commentsByFilm: {
                    ...state.commentsByFilm,
                    [filmId]: [...currentComments, comment] 
                }
            };

        default:
            return state;
    }
};

export default commentReducer;
