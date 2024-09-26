import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bdad6591-d1f9-4adf-bc73-fa5152186766', title: 'PATENT_TITLE_9648' },
            { id: 'e39b5f9e-b37c-4b33-b12d-b7dac84c9045', title: 'PATENT_TITLE_7138' },
            { id: 'a69b8677-2728-4275-87d5-9a12bcc374e1', title: 'PATENT_TITLE_7516' },
            { id: '58978d5e-b94b-4148-a0c2-a8f2abd7bbdf', title: 'PATENT_TITLE_7656' },
            { id: '2bed94dd-9415-45af-a98a-726c4dd292a5', title: 'PATENT_TITLE_2370' },
            { id: 'f6ae4e26-0065-45c2-8c1b-de005658366c', title: 'PATENT_TITLE_7105' },
        ]}
    />
)

export default App