import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Avec from '../avec_cities/screens/avec_router'
import Store from './redux/reducers'

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