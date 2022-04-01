import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GetEmployeeRequest } from '../redux-saga/action/EmployeeAction'

export default function Employee() {
    let history = useHistory()
    const dispatch = useDispatch()
    const {employees} = useSelector(state => state.employeeStated)

    useEffect(()=>{
        dispatch(GetEmployeeRequest())
    },[])
    
  return (
    <div>
            <h2>List of Employee</h2>
            <button onClick={() => history.push('/employee/new')}>Add Employee</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Employee Name
                </thead>
                <tbody>
                    {
                        employees && employees.map(emp => {
                            return (
                                <tr>
                                    <td>{emp.employee_id}</td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone_number}</td>
                                    <td>{emp.hire_date}</td>
                                    <td>{emp.job_id}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.manager_id}</td>
                                    <td>{emp.department_id}</td>
                                    <td>{emp.profile}</td>
                                    {/* <button onClick={()=>onEdit(regi.region_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
                                        }
                                    }}>Delete</button> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
  )
}
