import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CalculateContext } from "../context/CalculateContex";



export default function Results(props) {
    const {result, loan, interest, months, errorQuoterForm} = useContext(CalculateContext);
    return (
        <ScrollView style={styles.content}>
            { (!errorQuoterForm && result) && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Loan:" value={`${loan} €`} />
                    <DataResult title="Interest %:" value={`${interest} %`} />
                    <DataResult title="Months:" value={`${months} meses`} />
                    <DataResult title="Monthly fee:" value={`${result?.monthlyFee} €`} />
                    <DataResult
                        title="Total payment:"
                        value={`${result?.totalPayable} €`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorQuoterForm}</Text>
            </View>
        </ScrollView>
    );
}

function DataResult(props) {
    const { title, value } = props;

    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});