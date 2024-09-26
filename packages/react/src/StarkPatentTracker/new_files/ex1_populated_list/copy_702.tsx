import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f4a3de8d-32a1-4bf3-bc1b-8da8128e8c19', title: 'PATENT_TITLE_2522' },
            { id: '8be21121-072f-40be-8908-9a65c1e7467d', title: 'PATENT_TITLE_8031' },
            { id: 'ec0eb90a-9a31-46b3-8406-081f6d172472', title: 'PATENT_TITLE_6157' },
            { id: '746499f5-7d67-449b-acab-e5ff5d9649d9', title: 'PATENT_TITLE_7007' },
            { id: '701abd89-2a1c-4fad-a311-b3dccec473bb', title: 'PATENT_TITLE_2373' },
            { id: '53fac1c4-799c-4452-8cae-4b3fb6a27559', title: 'PATENT_TITLE_9099' },
            { id: 'd04fa31c-194f-46f2-be33-2dd57fc2aa8f', title: 'PATENT_TITLE_1640' },
            { id: '20af9a51-70a3-4e0f-9681-cf5391c8ded4', title: 'PATENT_TITLE_6221' },
            { id: 'f27c0b24-33d9-4481-a951-fbfbd0813378', title: 'PATENT_TITLE_2618' },
        ]}
    />
)

export default App