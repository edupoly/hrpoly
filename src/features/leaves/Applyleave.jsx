import React,{useState} from 'react'
import { useApplyLeaveMutation } from '../../services/leavesApi'
import { useSelector } from 'react-redux'

function Applyleave() {
    const userDetails = useSelector(state=>state.user.userDetails)
    const [leave, setLeave] = useState({
        startDate:'',
        endDate:'',
        reason:'',
        empid:'',
        status:'waiting'
    })
    var [applyLeaveFn]=useApplyLeaveMutation()
    function applyLeave(){
        console.log(userDetails)
        applyLeaveFn(leave).then((res)=>{console.log(res)})
    }
    React.useEffect(()=>{
        setLeave({...leave,empDetails:userDetails})
    },[userDetails.id])
    return (
        <div className='border border-2 border-info m-2 p-2'>
            <h1>Applyleave</h1>
            <input type="date" onChange={(e)=>{setLeave({...leave,startDate:e.target.value})}} placeholder='Start'/><br></br>
            <input type="date" onChange={(e)=>{setLeave({...leave,endDate:e.target.value})}} placeholder='end'/><br></br>
            <textarea onChange={(e)=>{setLeave({...leave,reason:e.target.value})}} placeholder='reason'/><br></br>
            <button onClick={applyLeave}>Apply</button>
        </div>
    )
}

export default Applyleave