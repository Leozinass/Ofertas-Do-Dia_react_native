import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 350;
const valor = altura / largura * width;

export default function header({ titulo, subTitulo }) {
    return (<View style={style.container}>
            <View style={style.espaco}></View>
            <LinearGradient style={style.borda} colors={['#836FFF','#E6E6FA']}>
                <View style={style.letreiro}>
                    <Text style={style.fonteTitulo}>{ titulo }</Text>
                    <Text style={style.FonteSubTitulo}>{ subTitulo }</Text>
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
        height: '20%'
    },
    letreiro: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        width: '94%',
        height: '75%',
        marginTop: 16,
        borderRadius: 7,
        paddingTop: 12
    },
    fonteTitulo: {
        fontSize: 50
    },   
    FonteSubTitulo: {
        fontSize: 20
    },
    borda: {
        width: width,
        alignItems: 'center'
    }
});