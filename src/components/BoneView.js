import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height / 3;
const altura = 168;
const largura = 300;
const valor = (altura / largura * width);
const numero = 1;

export default function BoneView({ skate } ) {
    return <>           
        {
            skate.map( ( { imagem, marca, preco } ) => {
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
        width: '90%',
        height: height,
        borderRadius: 7,
        padding: 3  
              
    },
    image: {
        width: '100%',
        height: valor,
        borderRadius: 7,
        alignSelf: 'center'
    },
    marca: {
        textAlign: 'center',
        color: '#DCDCDC',
        fontSize: 25,
        fontStyle: 'italic'
    },
    textImage: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: '11%',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7
    },
    sifrao: {
        width: '20%',
        textAlign: 'center',
        marginTop: 2.5,
        marginBottom: 2.5,
        marginLeft: 2.5,
        borderBottomLeftRadius: 7,
        backgroundColor: '#6868',
        fontSize : 20
    },
    preco: {
        color : '#FFFFFF',
        width: '78%',
        textAlign: 'center',
        backgroundColor: '#836FFF',
        marginTop: 2.5,
        marginBottom: 2.5,
        marginLeft: 2.5,
        borderBottomRightRadius: 7,
        fontSize: 21
    }
});