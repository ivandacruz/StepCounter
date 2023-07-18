import { StyleSheet, Text, View, } from 'react-native';

type ValueProps = {
    title: string;
    label: string;
    value: string;
}

const Value = ({ label, value, title }: ValueProps) => (
    <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    title: {
        color: 'gold',
        fontSize: 33,
        margin: 1,
    },
    label: {
        color: '#fff',
        fontSize: 18,
    },
    value: {
        color: 'green',
        fontSize: 30,
        fontWeight: '500',
    },

});

export default Value;