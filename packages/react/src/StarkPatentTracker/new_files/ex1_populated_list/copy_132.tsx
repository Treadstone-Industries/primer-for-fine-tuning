import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4de19b77-9aab-4872-a2ae-7393b6bc5706', title: 'PATENT_TITLE_5431' },
            { id: 'ba1301cd-a035-45e3-8528-a5b1ea26092b', title: 'PATENT_TITLE_5088' },
            { id: 'c6e209ac-0127-4168-afe6-dbd81aaac57f', title: 'PATENT_TITLE_9818' },
            { id: '8fa5183c-91d2-42ce-9c1f-83ee4079eb7d', title: 'PATENT_TITLE_7056' },
            { id: 'a8f94b43-e774-4c1e-9341-b95597da23e4', title: 'PATENT_TITLE_5648' },
        ]}
    />
)

export default App