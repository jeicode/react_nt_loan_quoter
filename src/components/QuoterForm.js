
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import colors from '../shared/utils/colors';
import { CalculateContext } from '../context/CalculateContex';
import { useContext } from 'react';

export default function QuoterForm(props) {
    const listMonths = Array(12).fill(0);
    const {setLoan, setInterest, months, setMonths} = useContext(CalculateContext);
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Loan"
                    keyboardType="numeric"
                    onChange={(event) => setLoan(Number(event.nativeEvent.text))}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Interest %"
                    keyboardType="numeric"
                    onChange={(event) => setInterest(Number(event.nativeEvent.text))}
                    style={[styles.input, styles.inputPercentage]}
                />
            </View>
            <Picker
                style={pickerStyles.input}
                selectedValue={months}
                onValueChange={(value) => setMonths(value)}>
                    <Picker.Item label='Select month' value={null}/>
                {
                    listMonths.map( (i, index) => <Picker.Item key={index} label={index+1+' Months'} value={index+1} />)
                }
            </Picker>

        </View>
    );
}



const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '95%',
        paddingHorizontal: 30,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});

const pickerStyles = StyleSheet.create({
    input: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
});