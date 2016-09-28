import axios from 'axios';

export function getContent(link) {
    return function (dispatch) {
        return loadContent(link).then(
            result => dispatch(receivedPosts(result.data) ),
            error => dispatch(receivedError(error))
        );
    }
}

function loadContent(link) {
    return axios.get(link);
}

function receivedPosts(result){
    return {
        type: 'REQUEST_POSTS_SUCCESS',
        items: result,
        postSize: result.length
    }
}

function receivedError(result){
    return {
        type: 'REQUEST_POSTS_ERROR',
        items: result,
        postSize: 0
    }
}