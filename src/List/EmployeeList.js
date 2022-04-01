import React, {useState,useEffect} from 'react'

export default function EmployeeList() {
    const listEmployee =[
        {empId:1,fullName:'naufal',salary:4500},
        {empId:2,fullName:'dian',salary:5500},
        {empId:3,fullName:'firdaus',salary:5000}
    ]
    const [employee, setEmployee] = useState(listEmployee)
    const [cart, setCart] = useState(listEmployee)
    const [total,setTotal] = useState(0)
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                }
                else {
                    return emp
                }
            })]
        )
    }
    const raise = (id) =>{
        setCart(
            [...cart.map(emp =>{
                if (id === emp.empId) {
                    emp.salary = emp.salary * 0.1
                    return emp
                }
                else {
                    return emp
                }
            })]
        )
    }
    const cut = (id) =>{
        setCart(
            [...cart.map(emp =>{
                if (id === emp.empId) {
                    emp.salary = emp.salary * 0.05
                    return emp
                }
                else {
                    return emp
                }
            })]
        )
    }
    useEffect(()=>{
        const TotalHarga = cart.reduce((sum,el)=> sum + (el.salary),0)
        setTotal(TotalHarga)
    },[cart])
  return (
    <div>
        <h2>List Employees</h2>
        <ul>
            {
                (employee || []).map(emp =>(
                    <li key={emp.empId}>
                        <p>EmpId : {emp.empId}</p>
                        <p>Full name : {emp.fullName}</p>
                        <p>Salary : {emp.salary}</p>
                        <button onClick={()=>PenambahanGaji(emp.empId)}>Penambahan gaji</button>
                        <button onClick={()=>raise(emp.empId)}>Raise salary 10%</button>
                        <button onClick={()=>cut(emp.empId)}>cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
        <h3>Total Salary : Rp. {total}</h3>
    </div>
  )
}
