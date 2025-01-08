export const addComment = (filmId, comment) => {
    return {
        type: "ADD_COMMENT",
        payload: { filmId, comment }
    };
};
