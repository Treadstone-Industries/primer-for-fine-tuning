import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '13145148-d2b0-42a1-9f7d-0c6b7f7c0ed6', title: 'PATENT_TITLE_9195' },
            { id: 'e1e920cc-6c9d-48f2-b55b-72ca5a65e5f6', title: 'PATENT_TITLE_3275' },
            { id: 'dcf39609-db52-4a12-b71a-d25a66dfa847', title: 'PATENT_TITLE_1843' },
            { id: '4035625c-dea3-42fb-9efc-6937f800e4bc', title: 'PATENT_TITLE_1038' },
            { id: '712a2231-11b4-4379-a240-ec4848ba58ab', title: 'PATENT_TITLE_5661' },
            { id: '64484508-8e87-4655-accc-56651ca1e4af', title: 'PATENT_TITLE_4767' },
        ]}
    />
)

export default App