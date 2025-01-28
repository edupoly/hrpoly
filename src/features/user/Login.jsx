import React,{useState} from 'react'
import { useLazyAuthenticateUserQuery } from '../../services/userApi'
import { useDispatch } from 'react-redux';
import { updateUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        username:'',
        password:''
    })
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var [authUser,x] = useLazyAuthenticateUserQuery();
    function login(){
        authUser(user).then((res)=>{
            dispatch(updateUser(res.data[0]));
            navigate('/')
        })
    }
  return (
    <div>
        <input type="text" placeholder='User Name' onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
        <br></br>
        <input type="text" placeholder='Password' onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
        <br></br>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login