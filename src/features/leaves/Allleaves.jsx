import React from 'react'
import { useGetAllLeavesByEmpIdQuery } from '../../services/leavesApi'
import { useSelector } from 'react-redux'

function Allleaves() {
    var {userDetails}=useSelector(state=>state.user)
    var {isLoading,data}=useGetAllLeavesByEmpIdQuery(userDetails['id']);
    return (
        <div className='border border-2 border-primary m-2 p-2'>
            <h1>Allleaves</h1>
            {
                isLoading && (<h1>Agehey....</h1>)
            }
            {
                !isLoading && (
                    <table className="table table-bordered table-sm">
                        {
                            data.map((leave)=>{
                                return <tr>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.reason}</td>
                                </tr>
                            })
                        }
                    </table>
                )
            }
            {
                !isLoading && data.length===0 && (
                    <>
                        <h1>No Leaves </h1>
                    </>
                )
            }
        </div>
    )
}

export default Allleaves