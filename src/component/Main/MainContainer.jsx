import Main from "./Main";
import { connect } from "react-redux";
import {updateLogin, updatePassword, addUser} from '../../redux/users-reducer'

const mapStateToProps = (state) =>{
    return{
        newUserLogin: state.users.newUserLogin,
        newUserPassword: state.users.newUserPassword,
        users: state.users.users
    }
}

const MainContainer = connect(mapStateToProps, {updateLogin, updatePassword, addUser})(Main)

export default MainContainer