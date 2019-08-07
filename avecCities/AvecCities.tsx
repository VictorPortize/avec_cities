import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Avec from './screens/AvecRouter'
import Store from './redux/Reducers/index'

const store = createStore(Store)

export default class Avec_Cities extends Component{
    render(){
        return(
            <Provider store={store}>
                <Avec />
            </Provider>
        )
    }
}