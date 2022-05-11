import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width  / 1.1;
const height = Dimensions.get('screen').height / 3;
const altura = 168;
const largura = 245
const valor = (altura / largura * width);
const numero = 1;

export default function BoneView({ skate } ) {
    return <>           
        {
            skate.map(({ imagem, marca, preco }) => {
                return <View key={marca} style={ style.container }>
                            <Image style={ style.image } source={ imagem }/>
                            <Text style={ style.marca }>{ marca }</Text>
                            <View style={ style.textImage }>
                                <Text style={ style.sifrao }>R$:</Text>
                                <Text style={ style.preco }>{ preco }</Text>
                            </View>
                        </View>
            })
        }
    </> 

    numero++;
}

const style = StyleSheet.create ({
    container: {
        backgroundColor: '#836FFF',
        margin: 20,
        height: height,
        width: width,
        borderRadius: 7        
    },
    image: {
        width: '100%',
        height: valor,
        borderRadius: 7
    },
    marca: {
        textAlign: 'center',
        color: '#DCDCDC',
        fontSize: 20,
        fontStyle: 'italic'
    },
    textImage: {
        flexDirection: 'row'
    },
    sifrao: {
        backgroundColor: '#CCC',
        width: '20%'
    },
    preco: {
        backgroundColor: '#000',
        color : '#FFFFFF',
        width: '80%',
        textAlign: 'center'
    }
});