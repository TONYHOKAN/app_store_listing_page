import {
  UPDATE_USER_NAME
} from '../actions/users'

const initialState = {
  userName: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        userName: action.userName
      }
    default:
      return state
  }
}
