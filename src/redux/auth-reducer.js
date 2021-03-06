const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"


let initialState ={
    login: null,
    userId: null,
    isAuth: false,
    error: false

}
const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case LOGIN:
            if (action.payload.login ==="test" && action.payload.password ==="123") {
                return {
                    ...state,
                    ...action.payload,
                    userId: 0,
                    isAuth: true,
                    error: false
                }
            } else {
                return {
            ...state,
                    error: true
                }
            }

        case LOGOUT:
                return {
                    ...state,
                    login: null,
                    userId: null,
                    isAuth: false,
                    error: false
                }
        default:
            return state
    }
}
export const loginAC = (login,password) => ({type: LOGIN, payload: {login,password}});
export const logoutAC = () => ({type: LOGOUT});
export default authReducer;