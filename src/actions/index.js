export const addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'DELETE_MOVIE',
        id
    }
}

export const updateUsername = (oldUsername, newUsername) => {
    return {
        type: 'UPDATE_USERNAME',
        oldUsername,
        newUsername
    }
}

export const resetUsername = (oldUsername) => {
    return {
        type: 'RESET_USERNAME',
        oldUsername,
        username: 'default'
    }
}
