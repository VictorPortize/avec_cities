import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Submit from '../../Components/Submit'

import { connect } from 'react-redux'
import { Actions } from '../../redux/Actions/index'
const {height, width} = Dimensions.get('window')


class AddCity extends Component{

    state = {
        cityName: '',
        countryName: ''
    }

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
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title} >C I T I E S</Text>
                    <TextInput value={this.state.cityName} onChangeText={this.changeCity} placeholder='City name' style={styles.textInput} />
                    <TextInput value={this.state.countryName} onChangeText={this.changeCountry} placeholder='Country name' style={styles.textInput} />
                    <Submit text={'Submit'} onPress={ this.onPress } />
                </View>
            </SafeAreaView>
        );
    }

    changeCity = ( text : String ) => this.setState({cityName: text})
    changeCountry = ( text : String ) => this.setState({countryName: text})
    eraseText = () => this.setState({cityName:'',countryName:''})

    onPress = () => {
        this.props.saveCountry({name: this.state.cityName, city: this.state.cityName})
        this.props.navigation.navigate('MainPage')
    }

};

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#a100ae',
        alignItems:'center',
        height,
        paddingTop:height*0.2
    },
    title:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: width*0.06
    },
    textInput:{
        width: width*0.9,
        height: height*0.1,
        backgroundColor:'white',
        padding:10,
        marginTop: height*0.02,
        fontSize: width*0.05
    }
});

export default connect( null, {saveCountry:Actions.saveCountry})(AddCity)
