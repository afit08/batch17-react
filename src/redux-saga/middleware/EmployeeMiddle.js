import { call, put } from 'redux-saga/effects'
import apiEmployee from '../../api/apiEmployee'
import { GetEmployeeSuccess, GetEmployeeFailed, AddEmployeeSuccess, AddEmployeeFailed } from '../action/EmployeeAction'

function* handleEmployee() {
    try {
        const result = yield call(apiEmployee.list)
        yield put(GetEmployeeSuccess(result))
    } catch (error) {
        yield put(GetEmployeeFailed(error))
    }
}


function* handleAddEmployee(action) {
    const { payload } = action
    try {
        const result = yield call (apiEmployee.create,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}

export {
    handleEmployee,
    handleAddEmployee
}