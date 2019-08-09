import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  NativeEventEmitter
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import CityButton from '../../Components/CityButton'
import { connect } from 'react-redux'

const Event = new NativeEventEmitter()

class MainPage extends Component{

    state = {
        list : [],
        name: 'asda'
    }

    public static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name={'city'} size={25} color={tintColor} />,
        tabBarOptions : {
            activeTintColor : '#a100ae',
            inactiveTintColor: '#939393'
        },
        title:'CITIES'
    }

    componentDidMount(){
        Event.addListener('change', () => {
            this.setState({list: this.props.countrys, name: 'ohmay'})
        } )
    }

    render(){
      return (
            <SafeAreaView>
                <View>
                    {this.state.list.map((value,index) => {
                        console.log(value)
                        return <CityButton text='asd' onPress={() => {}} />
                    })}
                </View>
                <CityButton text={this.state.name} onPress={ this.loadCity } />
            </SafeAreaView>
        );
    }

    loadCity = (city: String) => {
        console.log(this.props)
        this.forceUpdate()
    }
};

const mapStateToProps = (state: any) => {
    return state
}

export default connect( mapStateToProps, null)(MainPage)
