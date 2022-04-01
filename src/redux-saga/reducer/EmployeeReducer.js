import * as ActionType from '../constants/EmployeeConstant'

const INIT_STATE ={
    employees : []
}

const EmployeeReduce = (state=INIT_STATE,action) =>{
    switch (action.type) {
        case ActionType.GET_EMPLOYEE_REQUEST:
            return {...state}
        case ActionType.GET_EMPLOYEE_SUCCESS:
            return GetEmployeeSucceed(state,action)
        case ActionType.ADD_EMPLOYEE_REQUEST:
            return {...state}
        case ActionType.ADD_EMPLOYEE_SUCCESS:
            return AddEmployeeSucceed(state,action)
        default:
            return GetEmployeeSucceed(state,action)
    }
}

const GetEmployeeSucceed = (state,action) =>{
    return{
        ...state,
        employees:action.payload
    }
}

const AddEmployeeSucceed = (state,action) =>{
    let {payload} = action
    return {
        ...state,
        employees:[...state.employees,payload]
    }
    
}
export default EmployeeReduce