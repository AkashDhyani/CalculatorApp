import React, {useState, useContext, useEffect} from "react";
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import ResultContext from "../context/ResultContext";
//import {FlatGrid} from 'react-native-super-grid';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ComputeScreen = ({navigation}) => {

    useEffect(() => {
        navigation.addListener('focus', () => {
            clearScreen();
        })
    }, [])

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    
    const {operate} = useContext(ResultContext);

    const onNumberClick = (btnValue) => {
        if (firstNumber.length < 10){
            setFirstNumber(firstNumber + btnValue)
        }
    }

    const onOperatorClick = (btnValue) => {
        if (operator.length === 0)
        {
            setOperator(btnValue);
            setSecondNumber(firstNumber);
            setFirstNumber('');
        }
    }

    const clearScreen = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputScreen}>
                <Text style={styles.secondNumber}>{secondNumber}</Text>
                <Text style={styles.operator}>{operator}</Text>
                <Text style={styles.firstNumber}>{firstNumber}</Text>
                {/* <Text style={styles.firstNumber}>{result}</Text> */}
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('7')}>
                    <Text style={styles.itemName}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('8')}>
                    <Text style={styles.itemName}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('9')}>
                    <Text style={styles.itemName}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOrange} onPress={() => onOperatorClick('/')}>
                    <Text style={styles.itemName}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('4')}>
                    <Text style={styles.itemName}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('5')}>
                    <Text style={styles.itemName}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('6')}>
                    <Text style={styles.itemName}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOrange} onPress={() => onOperatorClick('x')}>
                    <Text style={styles.itemName}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('1')}>
                    <Text style={styles.itemName}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('2')}>
                    <Text style={styles.itemName}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('3')}>
                    <Text style={styles.itemName}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOrange} onPress={() => onOperatorClick('+')}>
                    <Text style={styles.itemName}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btnClear} onPress={() => clearScreen()}>
                    <Text style={styles.itemName}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray} onPress={() => onNumberClick('0')}>
                    <Text style={styles.itemName}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGray}>
                    <Text style={styles.itemName}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOrange} onPress={() => onOperatorClick('-')}>
                    <Text style={styles.itemName}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resultContainer}>
                <TouchableOpacity style={styles.resultButton} onPress={firstNumber.length > 0 && secondNumber.length > 0 ? () => operate(operator, firstNumber, secondNumber, () => navigation.navigate("Result")) : () => navigation.navigate('Error')}>
                    <Text style={styles.resultText}>Show Result</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        marginTop: 60,
        marginHorizontal: 20
    },
    inputScreen:{
        width: windowWidth - 20,
        height: windowHeight - 600,
        paddingHorizontal: 20,
        alignItems: "flex-end",
        justifyContent:"flex-end"
    },
    firstNumber:{
        fontSize: 45,
        padding: 10
    },
    operator:{
        paddingHorizontal:10
    },
    secondNumber:{
        fontSize: 30,
        padding: 10
    },
    row:{
        maxWidth: '100%',
        flexDirection: 'row'
    },
    btnGray:{
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#34495e',
        justifyContent: "center",
        alignItems:"center",
        margin: 8
    },
    btnOrange:{
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#f39c12',
        justifyContent: "center",
        alignItems:"center",
        margin: 8
    },
    btnClear:{
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#e74c3c',
        justifyContent: "center",
        alignItems:"center",
        margin: 8
    },
    itemName: {
        fontSize: 30,
        alignSelf:"center",
        color: '#fff',
        fontWeight: '600',
    },
    resultContainer:{
        marginTop: 40
    },
    resultButton:{
        backgroundColor: "green",
        width: windowWidth - 60,
        height: 50,
        borderRadius: 8,
        alignItems:"center",
        justifyContent:"center"
    },
    resultText:{
        fontSize: 20,
        color: "white"
    }
});

export default ComputeScreen;