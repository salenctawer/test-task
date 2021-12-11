const ADD_USER = 'ADD_USER'
const UPDATE_NEW_USER_LOGIN = 'UPDATE_NEW_USER_LOGIN'
const UPDATE_NEW_USER_PASSWORD = 'UPDATE_NEW_USER_PASSWORD'
const UPDATE_NEW_USER_ID = 'UPDATE_NEW_USER_ID'

let initialState = {
    users:[
    ],
    newUserLogin: '',
    newUserPassword: '',
    idCount: 0
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_USER:
            let login = state.newUserLogin
            let password = state.newUserPassword
            let id = state.idCount
            return{
                ...state,
                newUserLogin: '',
                newUserPassword: '',
                users: [...state.users, {id:id, login:login, password:password}]
            }
        case UPDATE_NEW_USER_LOGIN:
            return{
                ...state,
                newUserLogin: action.newLogin
            }
        case UPDATE_NEW_USER_PASSWORD:
            return{
                ...state,
                newUserPassword: action.newPassword
            }
        case UPDATE_NEW_USER_ID:
            return{
                ...state,
                idCount: action.newId
            }
        default:
            return state
    }
}

export const addUser = () =>{
    return{
        type: ADD_USER
    }
}
export const updateLogin = (login) =>{
    return {
      type: UPDATE_NEW_USER_LOGIN,
      newLogin: login
    }
}
  export const updatePassword = (password) =>{
    return {
        type: UPDATE_NEW_USER_PASSWORD, 
        newPassword: password
    }
}
export const updateId = (id) =>{
    return {
      type: UPDATE_NEW_USER_ID,
      newId: id
    }
}
export default usersReducer