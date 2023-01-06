
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CalculateContext } from "../context/CalculateContex";
import colors from "../shared/utils/colors";

export default function CalculateResult(props) {
    const {loan, months, interest, setErrorQuoterForm, setResult} = useContext(CalculateContext)
    const [appIsRendered, setAppIsRendered] = useState(false);

    useEffect(() => {
        if (appIsRendered) calculateResult()
        else setAppIsRendered(true)
    },[loan, months, interest])

    const calculateResult = () =>{
        if (!loan) setErrorQuoterForm("Loan is not valid!")
        else if (!interest || interest > 100) setErrorQuoterForm("Interest is not valid!")
        else if (!months) setErrorQuoterForm("Months is not valid!")
        else setErrorQuoterForm("")
        const loanFee = (loan/100) * interest 
        const totalPayable = (loan + loanFee).toFixed(2)
        const monthlyFee = (totalPayable/months).toFixed(2)
        setResult({
            monthlyFee,
            totalPayable
        })
    }

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculateResult}>
                <Text style={styles.text}>Calculate</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});