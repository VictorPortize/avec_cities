import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'


class AddCity extends Component{

    public static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name={'md-add'} size={25} color={tintColor} />,
        tabBarOptions : {
            activeTintColor: '#a100ae',
            inactiveTintColor: '#939393'
        },
        title:'ADD CITY'
    }


    render(){
      return (
            <SafeAreaView style={{height:499}}>
                <View style={styles.container}>
                    
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#a100ae',
        height:100,
        width:100
    }
});

export default AddCity
