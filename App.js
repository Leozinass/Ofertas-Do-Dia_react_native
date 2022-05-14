import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Header from './src/components/header';
import Index from './src/Index';
import dados from './src/mocks/dados';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function App() {
  return (
    <View style={ styles.container }>
      <Header style={ styles.header } { ...dados.header } />
      <Index { ...dados }/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height
  },
  header: {
    marginBottom: 1
  }
});
