import { ActionsType } from '../Actions'

interface ActionType{
    type: String
    payload: Object | any
}

const initialState = {

}

const Store = ( state = initialState , action: ActionType ) => {
    
    switch(action.type){
        case ActionsType.saveCitie:
            return state
        default:
            return state
    }
}

export default Store