export function language (state = {language: "de"}) {
    return state;
}

export function content (state = {content: {}, isFetching: true}, action) {
    switch(action.type) {
        case 'REQUEST_POSTS_SUCCESS':
            return {
                ...state,
                content: action.items,
                isFetching: false,
                EntrySize: action.postSize
            };
        case 'REQUEST_POSTS_ERROR':
            return {
                ...state,
                error: action.error,
                isFetching: false,
                EntrySize: action.postSize
            };
        default:
            return state;
    }
}