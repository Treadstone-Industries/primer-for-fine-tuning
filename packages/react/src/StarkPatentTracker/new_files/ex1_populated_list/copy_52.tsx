import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e3c6d7a4-7b45-4b2e-b1b1-1268873d1ed9', title: 'PATENT_TITLE_8819' },
            { id: 'fe912f7c-1af6-4f05-9d46-9b80058902e5', title: 'PATENT_TITLE_2895' },
            { id: 'd07835e1-9e29-4d84-9f76-f20d339c7a44', title: 'PATENT_TITLE_5234' },
            { id: 'f09f3176-3703-450f-857a-c6d9a30f7253', title: 'PATENT_TITLE_2981' },
            { id: '1c6edce0-9200-4366-8711-9420f3664862', title: 'PATENT_TITLE_2464' },
            { id: '391fc117-0659-446f-b0b1-90fa71f0479f', title: 'PATENT_TITLE_3033' },
            { id: '757d2f6f-3bd6-4b38-8c21-2628ff6a599e', title: 'PATENT_TITLE_2218' },
            { id: '8d51301a-a410-49cd-89d4-0fda8ef4e59d', title: 'PATENT_TITLE_9601' },
            { id: 'd9427778-fb84-445c-a6fd-f4d1a1f01e07', title: 'PATENT_TITLE_8428' },
        ]}
    />
)

export default App