import {takeEvery, all} from 'redux-saga/effects'
import { handleAddRegion, handleDelRegion, handleGetRegion } from './RegionMiddle'
import * as ActionTypeRegion from '../constants/RegionConstant'

import * as ActionTypeEmployee from '../constants/EmployeeConstant'
import {handleEmployee,handleAddEmployee} from './EmployeeMiddle'


function * watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_REGION_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.DEL_REGION_REQUEST,handleDelRegion),
        takeEvery(ActionTypeRegion.ADD_REGION_REQUEST,handleAddRegion),
        takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST,handleEmployee),
        takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST,handleAddEmployee)
    ])
}

export default watchAll