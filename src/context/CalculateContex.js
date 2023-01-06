import React, { useState } from "react";

const CalculateContext = React.createContext(undefined);

function CalculateContextProvider({children}){

    const [loan, setLoan] = useState();
    const [interest, setInterest] = useState();
    const [months, setMonths] = useState()
    const [errorMessage, setErrorMessage] = useState('');
    const [errorQuoterForm, setErrorQuoterForm] = useState('');
    const [result, setResult] = useState();


    const data = {
        loan, setLoan,
        interest, setInterest,
        months, setMonths,
        errorMessage, setErrorMessage,
        errorQuoterForm, setErrorQuoterForm,
        result, setResult
    } 

    return (
        <CalculateContext.Provider value={data}>
            {children}
        </CalculateContext.Provider>
    )

}



export { CalculateContext, CalculateContextProvider }


