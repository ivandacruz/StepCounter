import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  title: string;
  label: string;
  value: string;
}

const Value = ({ label, value, title }: ValueProps) => (
  <View style={styles.valueContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>

      <View >
        <Value title='Step Counter' />
      </View>

      <View style={{ flexDirection: 'row', }}>
        <Value label='Steps' value="1219" />
        <Value label='Distance' value="0,75 km" />
      </View>

      <Value label='Flights Climbed' value="12" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    // margin right  =  margem direita
  },
  title: {
    color: 'gold',
    fontSize: 33,
    margin: 1,
  },
  valueContainer: {
    marginRight: 50,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
  value: {
    color: 'green',
    fontSize: 28,
    // font weight = espessura da fonte
    fontWeight: '500',

  },

});
