import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

    const [previousNumber, setPreviousNumber] = useState('0')
    const [currentNumber, setCurrentNumber] = useState('0')

    const clear = () => {
        setCurrentNumber('0')
    }

    return (
        <View style={ styles.resultContainer }>
            <Text style={ styles.smallResult }>{ previousNumber }</Text>
            <Text style={ styles.result }>{ currentNumber }</Text>

            <View style={ styles.rowButtons }>
                <CalcButton text="C" color="#9B9B9B" action={ clear}/>
                <CalcButton text="+/-" color="#9B9B9B"/>
                <CalcButton text="del" color="#9B9B9B"/>
                <CalcButton text="÷" color="#FF9427"/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="7"/>
                <CalcButton text="8"/>
                <CalcButton text="9"/>
                <CalcButton text="X" color="#FF9427"/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="4"/>
                <CalcButton text="5"/>
                <CalcButton text="6"/>
                <CalcButton text="–" color="#FF9427"/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="1"/>
                <CalcButton text="2"/>
                <CalcButton text="3"/>
                <CalcButton text="+" color="#FF9427"/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="0" width/>
                <CalcButton text="."/>
                <CalcButton text="=" color="#FF9427"/>
            </View>

        </View>
    )
}
