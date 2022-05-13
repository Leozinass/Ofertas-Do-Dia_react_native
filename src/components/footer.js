import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 200;
const valor = altura / largura * width;

export default function footer() {
    return (<View style={style.container}>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: width,
        height: valor
    }
});