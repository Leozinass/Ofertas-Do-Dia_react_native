import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 350;
const valor = altura / largura * width;

export default function header() {
    return (<View style={style.container}>
            <View style={style.espaco}></View>
            <LinearGradient style={style.borda} colors={['#A62A5C','#6A2597']}>
                <View style={style.letreiro}>
                    <Text style={{fontSize: 40}}>SK8</Text>
                    <Text style={{fontSize: 15}}>Life stateboards</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: width,
        height: valor,
        alignItems: 'center'
    },
    espaco: {
        backgroundColor : '#FFFFFF',
        height: '25%'
    },
    letreiro: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        width: '96%',
        height: '75%',
        marginTop: 12,
        borderRadius: 7,
        paddingTop: 12
    },
    borda: {
        width: width,
        alignItems: 'center',
        borderRadius: 7
    }
});