import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import QuoterForm from './src/components/QuoterForm';
import Results from './src/components/Results';
import colors from './src/shared/utils/colors';
import { CalculateContextProvider } from './src/context/CalculateContex';
import CalculateResult from './src/components/CalculateResult';

export default function App() {
  
  return (
    <CalculateContextProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        {/* background */}
        <View style={styles.background} />
        {/* background */}
        <Text style={styles.titleApp}>Loan Quoter</Text>
        <QuoterForm />
      </SafeAreaView>
      <Results />
      <CalculateResult/>
    </CalculateContextProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
  },
});
