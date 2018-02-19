// ACTIONS POSTS
import {api} from '../utils/helpers'

// Async
export function loadPosts() {
    return function (dispatch) {
        api.getAllPosts()
            .then(response  => {
               dispatch(getPosts(response))
            })
            .catch(err=>dispatch(showError(err)))
    }
}

export function loadCategories() {
    return function (dispatch) {
        api.getCategories()
            .then(response  => {
               dispatch(getCategories(response))
            })
            .catch(err=>dispatch(showError(err)))
    }
}

export function loadPostsCategory() {
    return function (dispatch) {
        api.getPostsCategories()
            .then(response  => {
               dispatch(getPostsCategories(response))
            })
            .catch(err=>dispatch(showError(err)))
    }
}

export function votePost(id, option) {
    return function (dispatch) {
        api.vote(id, option).then(res => {
            option === 'upVote' ? dispatch(voteUpAction(res)) : dispatch(voteDownAction(res));
        })
        .catch(err=>dispatch(showError(err)))
    }
}

// Sync
export function getPosts(posts) {
    return {
        type: 'GET_ALL',
        payload: posts
    }
}

export function getCategories(posts) {
    return {
        type: 'GET_CATEGORIES',
        payload: posts
    }
}

export function getPostsCategories(posts) {
    return {
        type: 'GET_POSTS_CATEGORIES',
        payload: posts
    }
}

export function voteUpAction(result) {
    return {
        type: 'VOTE_UP',
        payload: result
    }
}

export function voteDownAction(result) {
    return {
        type: 'VOTE_DOWN',
        payload: result
    }
}

export function showError(posts) {
    return {
        type: 'ERROR',
        payload:'what'
    }
}