import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const medplum = new MedplumClient({
    clientId: '654455ae-918e-4650-9cfd-01ea08ec702b',
});

const patient = await medplum.createResource({
    resourceType: 'Patient',
    name : [{
        given: ['Adam'],
        family: 'Smith',
        use: 'official',
        prefix: ['Mr'],
        suffix: ['Jnr']
    }],
    gender: 'Male',
    birthDate: '1990-01-01'
});

ReactDOM.render(
        <React.StrictMode>
            <MedplumProvider medplum={medplum}>
                <App />
            </MedplumProvider>
        </React.StrictMode>,
        document.getElementById('root')
        );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
