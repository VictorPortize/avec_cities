import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import CityButton from '../../Components/CityButton'
import { connect } from 'react-redux'

class MainPage extends Component{

    public static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name={'city'} size={25} color={tintColor} />,
        tabBarOptions : {
            activeTintColor : '#a100ae',
            inactiveTintColor: '#939393'
        },
        title:'CITIES'
    }

    render(){
        console.log(this.props)
      return (
            <SafeAreaView>
                <View>
                    {/* {this.props.countrys.map((value,index) => {
                        console.log(value)
                        return <CityButton text='asd' onPress={() => {}} />
                    })} */}
                </View>
            </SafeAreaView>
        );
    }

    loadCity = (city: String) => {
        console.log(city)
    }
};

const mapStateToProps = (state: any) => state

export default connect( mapStateToProps, null)(MainPage)
