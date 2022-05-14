import React from "react";
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import BoneView from './components/BoneView'
import Footer from './components/footer'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height /3;

export default function Index({ bones, footer }) {
    return (
        <ScrollView style={ style.container }>
            <BoneView style={ style.bone } { ...bones }/>
            <Footer { ...footer }/>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#E6E6FA',
        flexDirection: 'column',
    },
    bone: {
        backgroundColor : '#836FFF'
    }
});