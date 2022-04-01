import * as ActionType from '../constants/RegionConstant'

const INIT_STATE = {
    regions : []
}

const RegionsReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_REGION_REQUEST:
            return {...state}
        case ActionType.GET_REGION_SUCCESS:
            return GetRegionSucceed (state,action)
        case ActionType.DEL_REGION_REQUEST:
            return {...state}
        case ActionType.DEL_REGION_SUCCESS:
            return DelRegionSucceed (state,action)
        case ActionType.ADD_REGION_REQUEST:
            return {...state}
        case ActionType.ADD_REGION_SUCCESS:
            return AddRegionSucceed (state,action)
        case ActionType.EDIT_REGION_REQUEST:
            return {...state}
        case ActionType.EDIT_REGION_SUCCESS:
            return EditRegionSucceed (state,action)
        default:
            return GetRegionSucceed (state,action)
    }
}

const GetRegionSucceed = (state,action) =>{
    return{
        ...state,
        regions : action.payload 
    }
}

const DelRegionSucceed = (state,action) =>{
    const {payload} = action
    const filterRegion = state.regions.filter(el=>el.region_id !== payload)
    return {
        ...state,
        regions : [...filterRegion]
    }
}

const AddRegionSucceed = (state,action) =>{
    const {payload} = action
    return{
        ...state,
        regions : [...state.regions,payload]
    }
}

const EditRegionSucceed = (state,action) =>{
    const {payload} = action
    return{
        ...state,
        regions : [...state.regions,payload]
    }
}

export default RegionsReduce