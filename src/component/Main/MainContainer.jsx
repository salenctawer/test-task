import Main from "./Main";
import { connect } from "react-redux";
import {updateLogin, updatePassword, addUser, updateId} from '../../redux/users-reducer'

const mapStateToProps = (state) =>{
    return{
        newUserLogin: state.users.newUserLogin,
        newUserPassword: state.users.newUserPassword,
        users: state.users.users,
        id: state.users.idCount
    }
}

const MainContainer = connect(mapStateToProps, {updateLogin, updatePassword, addUser, updateId})(Main)

export default MainContainer