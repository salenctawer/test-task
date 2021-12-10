import Login from "./Login";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
    return{
        users: state.users.users
    }
}

const LoginContainer = connect(mapStateToProps,{})(Login)

export default LoginContainer