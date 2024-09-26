import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9e286ed7-927c-48ef-a7dc-ec1260a572d1', title: 'PATENT_TITLE_2334' },
            { id: '3c15d44d-4b2f-4d47-8405-36848b81b34d', title: 'PATENT_TITLE_3106' },
            { id: '3f6ac4f2-9193-437c-a43e-ceed0899ff36', title: 'PATENT_TITLE_8213' },
            { id: 'fe997882-40c3-44ee-b02b-d9af76d240aa', title: 'PATENT_TITLE_5531' },
            { id: 'eab24efe-3728-42ba-9b6a-381d17243d2a', title: 'PATENT_TITLE_3827' },
            { id: '87f82774-063d-4268-b7c2-54c4df86085b', title: 'PATENT_TITLE_9833' },
            { id: '1f36865e-d4da-4763-a398-80a12783888d', title: 'PATENT_TITLE_5853' },
        ]}
    />
)

export default App