import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '98ff7e58-9a0d-4e3a-a137-fdd924226fd4', title: 'PATENT_TITLE_7787' },
            { id: '64dedf24-bdc7-4506-af00-c609a0d8456e', title: 'PATENT_TITLE_5764' },
            { id: 'ec575c2b-222d-4315-84a9-ce34a029bb43', title: 'PATENT_TITLE_7583' },
            { id: 'c3c66f52-1701-4d40-8734-1738bf0cb47a', title: 'PATENT_TITLE_7281' },
            { id: 'a49ec6e6-1a07-4e4b-9e60-a63688d96550', title: 'PATENT_TITLE_7088' },
            { id: '9d4e1f94-6518-48ca-8933-aae3f5afba50', title: 'PATENT_TITLE_6736' },
            { id: '65c8bd68-93c9-4a57-bc61-b11fc4c64759', title: 'PATENT_TITLE_6859' },
            { id: '0fac41e0-9753-4d4f-8dbf-a2528dd87475', title: 'PATENT_TITLE_1568' },
        ]}
    />
)

export default App