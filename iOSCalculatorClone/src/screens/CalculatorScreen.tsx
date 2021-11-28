import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/appTheme'
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        previousNumber,
        currentNumber,
        clearEntry,
        createNumber,
        changeToNegativeOrPositive,
        deleteLastEntry,
        divideNumbers,
        multiplyNumbers,
        substractNumbers,
        addNumbers,
        showResult
    } = useCalculator();

    return (
        <View style={ styles.resultContainer }>
            {
                (previousNumber !== '0') && (<Text style={ styles.smallResult }>{ previousNumber }</Text>)
            }       
            <Text
                style={ styles.result }
                numberOfLines= {1}
                adjustsFontSizeToFit
            >
                { currentNumber }
            </Text>

            <View style={ styles.rowButtons }>
                <CalcButton text="C" color="#9B9B9B" action={ clearEntry }/>
                <CalcButton text="+/-" color="#9B9B9B" action={ changeToNegativeOrPositive }/>
                <CalcButton text="del" color="#9B9B9B" action={ deleteLastEntry }/>
                <CalcButton text="÷" color="#FF9427" action={ divideNumbers }/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="7" action={ createNumber }/>
                <CalcButton text="8" action={ createNumber }/>
                <CalcButton text="9" action={ createNumber }/>
                <CalcButton text="X" color="#FF9427" action={ multiplyNumbers }/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="4" action={ createNumber }/>
                <CalcButton text="5" action={ createNumber }/>
                <CalcButton text="6" action={ createNumber }/>
                <CalcButton text="-" color="#FF9427" action={ substractNumbers }/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="1" action={ createNumber }/>
                <CalcButton text="2" action={ createNumber }/>
                <CalcButton text="3" action={ createNumber }/>
                <CalcButton text="+" color="#FF9427" action={ addNumbers }/>
            </View>

            <View style={ styles.rowButtons }>
                <CalcButton text="0" width action={ createNumber }/>
                <CalcButton text="." action={ createNumber }/>
                <CalcButton text="=" color="#FF9427" action={ showResult }/>
            </View>

        </View>
    )
}
