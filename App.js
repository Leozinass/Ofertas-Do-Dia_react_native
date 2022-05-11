import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Index from './src/Index';
import dados from './src/mocks/dados';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Loja de Bones!</Text>
      <Index {...dados}/>
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
});
