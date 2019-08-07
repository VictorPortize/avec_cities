import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import CityButton from '../../Components/CityButton'


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
      return (
            <SafeAreaView>
                <View>
                    <CityButton onPress={this.loadCity} text={'Austin'} />
                    <CityButton onPress={this.loadCity} text={'jackson ms'} />
                </View>
            </SafeAreaView>
        );
    }

    loadCity = (city: String) => {
        console.log(city)
    }
};

export default MainPage
