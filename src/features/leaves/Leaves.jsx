import React from 'react'
import { useGetAllLeavesQuery, useLazyGetAllLeavesQuery, useUpdateLeaveMutation } from '../../services/leavesApi'

function Leaves() {
    var {isLoading,data}= useGetAllLeavesQuery()
    var [ updateLeave ] = useUpdateLeaveMutation()
    var [getAllLeaves]= useLazyGetAllLeavesQuery()

    function handleUpdate(leave,status){
        var updatedleave = {...leave,status:status}
        updateLeave(updatedleave).then(()=>{
            alert("One leave approved");
            getAllLeaves();
        })
    }
    React.useEffect(()=>{
        console.log(data)
    },[data])
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>Leaves</h1>
        {
            isLoading && (<h1>Please wait...</h1>)
        }
        {
            !isLoading && (
                <table className="table" cellPadding={20}>
                    {
                        data.map((leave)=>{
                            return (leave.status==='waiting' && (
                                <tr>
                                <td>{leave.empDetails.id}</td>
                                <td>{leave.empDetails.firstname}</td>
                                <td>{leave.startDate}</td>
                                <td>{leave.endDate}</td>
                                <td>{leave.reason}</td>
                                <td>
                                    <button className='btn btn-success' onClick={()=>{handleUpdate(leave,'approved')}}>Approve</button>
                                    <button className='btn btn-danger' onClick={()=>{handleUpdate(leave,'reject')}}>Reject</button>
                                    <button className='btn btn-warning' onClick={()=>{handleUpdate(leave,'pending')}}>Pending</button>
                                </td>
                            </tr>
                            ))
                        })
                    }
                </table>
            )
        }
    </div>
  )
}

export default Leaves