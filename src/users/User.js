import React, {useState,useEffect} from 'react'
import apiUser from '../api/apiUser'
import { useHistory } from 'react-router-dom'

export default function User() {
    let history = useHistory()
    const [user,setuser] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiUser.list().then(data => {
            setuser(data)
        })
    },[])

    useEffect(()=>{
        apiUser.list().then(data =>{
            setuser(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`user/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiUser.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
    }
  return (
    <div>
        <h2>List of User</h2>
        <button onClick={()=>history.push('/user/new')}>Add User</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                User Name 
            </thead>
            <tbody>
                {
                    user && user.map(u =>{
                        return(
                        <tr>
                            <td>{u.user_id}</td>
                            <td>{u.user_name}</td>
                            <td>{u.user_email}</td>
                            <td>{u.user_password}</td>
                            <button onClick={()=>onEdit(u.user_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
                                    onDelete(u.user_id)
                                }
                            }}>Delete</button>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
