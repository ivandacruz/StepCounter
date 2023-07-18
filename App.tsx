import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Value from './src/components/Value';

// 

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Value title='Step Counter' />
      </View>

      <View style={styles.values}>
        <Value label='Steps' value="1219" />
        <Value label='Distance' value="0,75 km" />
        <Value label='Flights Climbed' value="12" />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    justifyContent: 'center',
    padding: 13,
    // margin right  =  margem direita
  },
  title: {
    color: 'gold',
    fontSize: 33,
    margin: 1,
    // justifyContent: 'center',

  },
  values: {
    flexDirection: 'row',
    gap: 25,
    // rowGap: 20,
    flexWrap: 'wrap',
  },


});
