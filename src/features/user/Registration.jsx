import { useFormik } from 'formik'
import React from 'react'
import { useRegisterUserMutation } from '../../services/userApi'

function Registration() {
    var [regUser,x]=useRegisterUserMutation()
    var regForm = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            username:'',
            password:'',
        },
        onSubmit:(values)=>{
            regUser(values).then((res)=>{console.log(res)})
        }
    })
    return (
        <div className='border border-2'>
            <h1>Registration</h1>
            <form onSubmit={regForm.handleSubmit}>
                <input type="text" {...regForm.getFieldProps('firstname')} placeholder='Firstname'/><br></br>
                <input type="text" {...regForm.getFieldProps('lastname')} placeholder='Lastname'/><br></br>
                <input type="text" {...regForm.getFieldProps('username')} placeholder='Username'/><br></br>
                <input type="password" {...regForm.getFieldProps('password')} placeholder='Password'/><br></br>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Registration