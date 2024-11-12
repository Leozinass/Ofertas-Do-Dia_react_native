import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 200;
const valor = altura / largura * width;

export default function footer( { listaNomes, loja, endereco } ) {
    return (<View style={ style.container }>
                <View style={ { marginBottom: 10 } }>
                    <Text>MERCEARIA IPÊ LTDA: { loja }</Text>
                    <Text>ENDEREÇO: { endereco }</Text>
                </View>
                    {
                        listaNomes.map( ( { nome,numero } ) => {
                            return <View key={ nome }>
                                        <Text style={ style.texto }>{ nome } - { numero }</Text>
                                    </View> 
                        })
                    }
            </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#d18c21',
        borderRadius: 15,
        marginLeft: 20,
        marginBottom: 20,
    },
    texto:{
        marginBottom: 10,
        fontSize: 15,
        color: '#f7f8fc'
    }
});