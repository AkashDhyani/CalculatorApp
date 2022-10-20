import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResultContext from '../context/ResultContext';

const ResultScreen = ({navigation}) => {

    const {data} = useContext(ResultContext)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Your computed value is:</Text>
            <Text style={styles.value}>{data}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Compute')}>
                    <Text style={styles.btnText}>Calculate another result</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 150
    },
    text:{
        fontSize: 45,
        marginBottom: 30,
        textAlign:'center'
    },
    value:{
        fontSize: 30,
        textAlign:'center',
        fontWeight:'bold'
    },
    btnContainer:{
        marginTop: 40
    },
    btn:{
        backgroundColor: "green",
        width: "90%",
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        alignItems:"center",
        justifyContent:"center"
    },
    btnText:{
        fontSize: 20,
        color: "white"
    }
})

export default ResultScreen;