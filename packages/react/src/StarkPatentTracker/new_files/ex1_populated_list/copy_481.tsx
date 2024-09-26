import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '99037d6e-5dfc-4a40-89b2-ec6c5b7be783', title: 'PATENT_TITLE_7648' },
            { id: 'f9228c61-db74-4563-b3e8-4b6066af753e', title: 'PATENT_TITLE_5163' },
            { id: '31f3151a-8cec-49d9-b24c-65b47a639d91', title: 'PATENT_TITLE_1780' },
            { id: 'fb01a223-a1ab-4a98-b766-4e973186833f', title: 'PATENT_TITLE_2283' },
            { id: '5dace405-ff34-4e5a-a523-f8c58323abe2', title: 'PATENT_TITLE_9493' },
            { id: '900de844-d8ca-441b-ab98-6e640997488d', title: 'PATENT_TITLE_9599' },
            { id: '529cd816-5a57-405e-aa8c-2db890fd7065', title: 'PATENT_TITLE_7516' },
            { id: 'dddb6f79-f952-4e9d-89e2-ff5f5f7c7fba', title: 'PATENT_TITLE_3526' },
            { id: '60ef21fa-3732-4960-9dee-cfc6f8067ba0', title: 'PATENT_TITLE_2913' },
            { id: '827d2ccb-c592-44d7-8706-3a8d9df49b0b', title: 'PATENT_TITLE_9494' },
        ]}
    />
)

export default App