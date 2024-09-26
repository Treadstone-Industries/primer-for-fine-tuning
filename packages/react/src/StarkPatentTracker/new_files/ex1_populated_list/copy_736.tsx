import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '37d77ae6-92e5-406f-b21a-9ebeff8c0b26', title: 'PATENT_TITLE_9371' },
            { id: 'fd9b19d8-a148-4705-a7cd-30f3247ecb4a', title: 'PATENT_TITLE_6156' },
            { id: '98cb29f6-bc29-46b0-8cf3-62d05e17678c', title: 'PATENT_TITLE_7892' },
            { id: 'ded83946-f2d1-4d7e-89a1-191f8ddb9554', title: 'PATENT_TITLE_8105' },
        ]}
    />
)

export default App