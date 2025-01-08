export const toggleFavourite = (id) => {
    return {
        type: "TOGGLE_FAVOURITE",
        payload: id
    }
}

export const toggleWatchLater = (id) => {
    return {
        type: "TOGGLE_WATCH_LATER",
        payload: id
    }
}