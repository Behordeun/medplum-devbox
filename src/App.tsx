import { PatientTimeline, SignInForm, useMedplumProfile } from '@medplum/react';
import './App.css';

function App() {
    const profile = useMedplumProfile();
    return profile ? (
            <div className="App">
                <PatientTimeline patient={{ reference: 'Patient/6bace1c2-d7a6-4d37-a226-04e1eb03f350' }} />
            </div>
            ) : (
                    <SignInForm />
                    );
}

export default App;
