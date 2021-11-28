import { useRef, useState } from "react"

enum Operations {
    addition, substraction, multiplication, division
}

interface Props {
    currentNumber: number;
    previousNumber: number
}

export const useCalculator = () => {
    const [previousNumber, setPreviousNumber] = useState('0')
    const [currentNumber, setCurrentNumber] = useState('0')
    const lastOperation = useRef<Operations>()

    const clearEntry = () => {
        setCurrentNumber('0');
        setPreviousNumber('0');
    }

    const createNumber = (inputValue: string) => {
        if( currentNumber.includes('.') && inputValue === '.' ) return;

        if( currentNumber.startsWith('0') || currentNumber.startsWith('-0') ) {

            if( inputValue === '.' ){

                setCurrentNumber( currentNumber + inputValue );

            } else if ( inputValue === '0' && currentNumber.includes('.') ) {

                setCurrentNumber( currentNumber + inputValue );

            } else if ( inputValue !== '0' && !currentNumber.includes('.')) {
                
                setCurrentNumber( inputValue );

            } else if (inputValue === '0' && !currentNumber.includes('.')) {
                
                setCurrentNumber( currentNumber );

            } else {
                setCurrentNumber( currentNumber + inputValue );
            }

        }else {
            setCurrentNumber( currentNumber + inputValue );
        } 
    }

    const changeToNegativeOrPositive = () => {
        if ( currentNumber.includes('-') ) {
            setCurrentNumber( currentNumber.replace('-', ''))
        } else {
            setCurrentNumber( '-' + currentNumber)
        }
    }

    const deleteLastEntry = () => {
        if(currentNumber.includes('-') && currentNumber.length <= 2 || currentNumber === '0' || currentNumber.length < 2){
            setCurrentNumber('0');
        } else {
            setCurrentNumber( currentNumber.substring(0, currentNumber.length - 1) )
        }
    }

    const switchBetweenCurrentAndPreviousNumber = () => {
        if( currentNumber.endsWith('.')) {
            setPreviousNumber( currentNumber.slice(0,-1) );
        } else {
            setPreviousNumber( currentNumber );
        }
        setCurrentNumber('0');
    }

    const divideNumbers = () => {
        switchBetweenCurrentAndPreviousNumber();
        lastOperation.current = Operations.division;
        
    }

    const multiplyNumbers = () => {
        switchBetweenCurrentAndPreviousNumber();
        lastOperation.current = Operations.multiplication;
    }

    const substractNumbers = () => {
        switchBetweenCurrentAndPreviousNumber();
        lastOperation.current = Operations.substraction;
    }

    const addNumbers = () => {
        switchBetweenCurrentAndPreviousNumber();
        lastOperation.current = Operations.addition;
    }

    const showResult = () => {
        const firstValue = Number( currentNumber );
        const secondValue = Number ( previousNumber );

        switch ( lastOperation.current ) {
            case Operations.addition:
                setCurrentNumber( ` ${ firstValue + secondValue}` );
                break;
            case Operations.substraction:
                setCurrentNumber( ` ${ secondValue - firstValue}` );
                break;
            case Operations.multiplication:
                setCurrentNumber( ` ${ firstValue * secondValue}` );
                break;
            case Operations.division:
                setCurrentNumber( ` ${ secondValue / firstValue}` );
                break;
            default:
                break;
        }

        if( firstValue === 0 && secondValue === 0 ) {
            setCurrentNumber('0');
        }

        if ( firstValue && !secondValue ) {
            setCurrentNumber(`${firstValue}`);
        }

        setPreviousNumber('0');
    }

    return {
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
    }

}