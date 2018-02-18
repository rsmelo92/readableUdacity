import {api} from '../utils/helpers'

export function loadPosts() {
  console.log("Load posts")
  return function (dispatch) {
    api.getAllPosts()
        .then(response  => {
            dispatch(getPosts(response))
        })
        .catch(err=>dispatch(showError(err)))
  }
}

export function getPosts(posts) {
  return {
    type: 'GET_ALL',
    payload: posts
  }
}

export function showError(posts) {
  return {
    type: 'ERROR',
    payload:'what'
  }
}