import React,{useState} from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddEmployeeRequest } from '../redux-saga/action/EmployeeAction'

export default function AddEmployee() {
    let history = useHistory()
    const dispatch = useDispatch()
    const [previewImg, setPreviewImg] = useState()

    const formik = useFormik({
        initialValues:{
            first_name : '',
            last_name :'',
            email:'',
            phone_number:'',
            hire_date:'',
            job_id : 0,
            salary : 0,
            manager_id : 0,
            department_id : 0,
            profile : undefined
        },
        onSubmit : async (values) =>{
            let payload = new FormData();
            payload.append('first_name',values.first_name)
            payload.append('last_name',values.last_name)
            payload.append('email',values.email)
            payload.append('phone_number',values.phone_number)
            payload.append('hire_date',values.hire_date)
            payload.append('job_id',parseInt(values.job_id))
            payload.append('salary',values.salary)
            payload.append('manager_id',parseInt(values.manager_id))
            payload.append('department_id',parseInt(values.department_id))
            payload.append('profile',values.profile)

            dispatch(AddEmployeeRequest(payload))

            history.push('/employee')
        }
        
    })
    const uploadOnChange = name => event =>{
        let reader = new FileReader()
        let file = event.target.files[0]

        reader.onload=()=>{
            formik.setFieldValue('profile',file);
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const onClearImage = event =>{
        event.preventDefault()
        setPreviewImg(null)
    }
  return (
    <div>
            <h1>Add Employee</h1>
            <form>
                <div>
                    <label>
                        First Name :
                    </label>
                    <input type='text' name='first_name' id='first_name' onChange={formik.handleChange} value={formik.values.first_name} />
                </div>
                <div>
                    <label>
                        Last Name :
                    </label>
                    <input type='text' name='last_name' id='last_name' onChange={formik.handleChange} value={formik.values.last_name} />
                </div>
                <div>
                    <label>
                       Email :
                    </label>
                    <input type='text' name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div>
                    <label>
                        Phone Number : 
                    </label>
                    <input type='text' name='phone_number' id='phone_number' onChange={formik.handleChange} value={formik.values.phone_number} />
                </div>
                <div>
                    <label>
                        Hire Date : 
                    </label>
                    <input type='date' name='hire_date' id='hire_date' onChange={formik.handleChange} value={formik.values.hire_date} />
                </div>
                <div>
                    <label>
                        Job Id :
                    </label>
                    <input type='text' name='job_id' id='job_id' onChange={formik.handleChange} value={formik.values.job_id} />
                </div>
                <div>
                    <label>
                        Salary :
                    </label>
                    <input type='text' name='salary' id='salary' onChange={formik.handleChange} value={formik.values.salary} />
                </div>
                <div>
                    <label>
                        Manager Id :
                    </label>
                    <input type='text' name='manager_id' id='manager_id' onChange={formik.handleChange} value={formik.values.manager_id} />
                </div>
                <div>
                    <label>
                        Department Id :
                    </label>
                    <input type='text' name='department_id' id='department_id' onChange={formik.handleChange} value={formik.values.department_id} />
                </div>

                <div>
                    <label>
                        Profile :
                    </label>
                    <>
                    <img src={previewImg} alt='image' className='max-auto h-48 w-48'/>
                    <button onClick={onClearImage}>Remove</button>
                    </>
                    <label htmlFor='profile'>
                    <span>Upload a file</span>
                    <input className='sr-only' type='file' name='profile' id='profile' accept='image/*' onChange={uploadOnChange('file')}/>
                    </label>
                </div>
            </form>
            <div>
                <button type='button' onClick={formik.handleSubmit}>
                    Submit
                </button>
                <button type='button' onClick={() => history.goBack()}>
                    Cancel
                </button>
            </div>
        </div>
  )
}
