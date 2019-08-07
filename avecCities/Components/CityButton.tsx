import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')

interface CityButton{
    text: String;
    onPress : (props : String) => void
}



export default (props : CityButton) => (
    <TouchableOpacity style={styles.wrapper} onPress={ () => props.onPress(props.text)}>
        <Text style={styles.text} >{props.text}</Text>
        <Icon style={styles.icon} name={'ios-arrow-forward'} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    wrapper : {
        height: height*0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width*0.05,
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    text : {
        fontSize : width*0.06
    },
    icon : {
        fontSize: width*0.06
    }
})