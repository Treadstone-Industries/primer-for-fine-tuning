import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '75ffe7e0-6e1a-4ba9-b37b-3fea8a8f5156', title: 'PATENT_TITLE_2455' },
            { id: 'cb587b08-061f-4451-acf3-93181a34cc8b', title: 'PATENT_TITLE_2748' },
            { id: '4ef11692-edce-4f9b-9430-77f46e73d69f', title: 'PATENT_TITLE_4609' },
            { id: '35a9af22-56cb-4ef7-8059-1c43bb9a00de', title: 'PATENT_TITLE_7950' },
            { id: '855776c6-07db-4034-bbfc-4bf16adbb299', title: 'PATENT_TITLE_2405' },
            { id: '1667931d-0938-4255-b53b-e4179ddb7c1d', title: 'PATENT_TITLE_9049' },
        ]}
    />
)

export default App