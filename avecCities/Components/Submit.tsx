import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'
import { Color } from 'csstype';

const { width, height } = Dimensions.get('window')

interface SubmitProps{
    text: String
    onPress : () => void
    color?: Color
}

export default (props : SubmitProps) => (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress} style={[styles.button,{backgroundColor: props.color || styles.button.backgroundColor}]} >
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    text : {
        fontSize: width*0.05,
        textAlign:'center',
        color:'white'
    },
    button : {
        width: width*0.9,
        height: height*0.1,
        backgroundColor: '#8e8e8e',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:height*0.02
    }
})