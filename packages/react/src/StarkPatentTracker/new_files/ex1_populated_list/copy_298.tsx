import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cffaeb65-f65c-42b4-96ab-d2b9de99c265', title: 'PATENT_TITLE_1283' },
            { id: '8c88db55-5b51-4664-a19a-eb6b20441b87', title: 'PATENT_TITLE_6554' },
            { id: '15bea8fa-2e91-490b-bb42-b173b2e4ca6d', title: 'PATENT_TITLE_6691' },
        ]}
    />
)

export default App