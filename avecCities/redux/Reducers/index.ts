import { ActionsType } from '../Actions'

interface ActionType{
    type: String
    payload: Country
}

interface Place{
    name: String
    type: String
    address: String
    note: String
}

interface City{
    name: String
    places?: Array<Place>
}

interface Country{
    name: string
    city?: Array<City> 
}

const initialState = {
    countrys:[]
}

const Store = ( state = initialState , action: ActionType ) => {
    switch(action.type){
        case ActionsType.saveCountry:
            // let country = action.payload.name.toUpperCase() || ''
            // let data = {}
            // if(state.countrys[country] == undefined){
            //     data[country] = {
            //         citys:[
            //             action.payload.city.toUpperCase()
            //         ]
            //     }
            // }
            // else{
            //     data[country] = {
            //         citys:[
            //             ...state.countrys[country].citys,action.payload.city.toUpperCase()
            //         ]
            //     }
            // }
            console.log(state)  
            return Object.assign(state,{countrys:[...state.countrys, action.payload ]})
        default:
            return state
    }
}

export default Store