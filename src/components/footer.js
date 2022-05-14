import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 200;
const valor = altura / largura * width;

export default function footer( { listaNomes, professor, materia } ) {
    return (<View style={ style.container }>
                <View style={ { marginBottom: 10 } }>
                    <Text>Professor: { professor }</Text>
                    <Text>Máteria: { materia }</Text>
                </View>
                    {
                        listaNomes.map( ( { nome, ra } ) => {
                            return <View key={ nome }>
                                        <Text style={ style.texto }>{ nome } - { ra }</Text>
                                    </View> 
                        })
                    }
            </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        height: valor,
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        marginLeft: 20,
        marginBottom: 20,
    },
    texto:{
        marginBottom: 10
    }
});