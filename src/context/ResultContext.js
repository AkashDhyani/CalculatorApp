import React, { useState } from "react";

const ResultContext = React.createContext();

// const resultReducer = (state, action) => {
//     switch(action.type){               
//         case 'add':
//             return {result: state.result + 1};
//         default:
//             return state;
//     } 
// }

export const ResultProvider = ({children}) => {

    const [result, setResult] = useState(0)

    const operate = (operator, firstNumber, secondNumber, callback) => {
        console.log(operator)
        switch (operator){
            case '+':
                console.log('add called')
                setResult(parseInt(secondNumber) + parseInt(firstNumber))
                callback();
                break;
            case '-':
                console.log('subtract called')
                setResult(parseInt(secondNumber) - parseInt(firstNumber))
                callback();
                break;
            case 'x':
                console.log('multiplication called')
                setResult(parseInt(secondNumber) * parseInt(firstNumber))
                callback();
                break;
            case '/':
                console.log('division called')
                setResult(parseInt(secondNumber) / parseInt(firstNumber))
                callback();
                break;
            default:
                callback();
                break;
        }
    }

    // const add = (firstNumber, secondNumber) => {
    //     dispatch({type: 'add', payload: {firstNumber, secondNumber}})
    // }

    return (
        <ResultContext.Provider value={{data: result, operate}}>
            {children}
        </ResultContext.Provider>
    )
}

export default ResultContext;