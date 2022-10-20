import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const ErrorScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.error}>
                <Text style={styles.text}>Error</Text>
                <MaterialIcons name="error-outline" size={60} color="white" />
            </View>
            <Text style={styles.message}>Please select two numbers for calculation</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Compute')}>
                    <Text style={styles.btnText}>Calculate result</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 140,
        backgroundColor: 'red'
    },
    error:{
        alignItems: 'center',
        marginBottom: 40,
    },
    text:{
        fontSize: 45,
        marginBottom: 20,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    },
    message:{
        fontSize: 30,
        textAlign:'center',
        fontWeight:'500',
        color: 'white',
        marginHorizontal: 30
    },
    btnContainer:{
        marginTop: 50
    },
    btn:{
        backgroundColor: "#316fd4",
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

export default ErrorScreen;