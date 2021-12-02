import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string;
    color?: string;
    width?: boolean;
    action: (stringAction: string) => void;

}

export const CalcButton = ( { text, color = '#2D2D2D', width = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(text) }
        >
            <View style={{
            ...styles.button,
            backgroundColor: color,
            width: ( width ) ? 180 : 80
            }}>
            <Text style={{
                ...styles.textButton,
                color: ( color === '#9B9B9B') ? 'black' : 'white'
                }}>{ text }</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        height: 80,
        width: 80,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        padding: 10,
        textAlign: 'center'
    }
})
