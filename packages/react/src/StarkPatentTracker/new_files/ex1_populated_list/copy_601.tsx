import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5ea26ca4-d9fa-4544-b403-d1241c26af67', title: 'PATENT_TITLE_6332' },
            { id: '5493a607-c8f6-4aac-ac9e-1a7548a028d2', title: 'PATENT_TITLE_8201' },
            { id: 'e34ad2a9-79d4-4e0d-b81d-0f0603b02c5f', title: 'PATENT_TITLE_5063' },
            { id: 'ab0a0378-4330-4446-9be9-ed93623e0575', title: 'PATENT_TITLE_7363' },
            { id: '17ffcb67-27ce-4354-bfda-d8b5d7bb17fb', title: 'PATENT_TITLE_3756' },
            { id: 'dbf65532-12c7-4b12-bcc7-4799b58cec3a', title: 'PATENT_TITLE_9058' },
        ]}
    />
)

export default App