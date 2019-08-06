import { ActionsType } from '../actions'

interface ActionType{
    type: String
    payload: Object | any
}

const initialState = {

}

export default ( state = initialState , action: ActionType ) => {
    
    switch(action.type){
        case ActionsType.saveCitie:
            return state
        default:
            return state
    }
}