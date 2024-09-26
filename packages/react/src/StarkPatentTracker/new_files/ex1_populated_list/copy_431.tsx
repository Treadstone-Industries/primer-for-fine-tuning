import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0d15fbec-db6d-44ef-b567-dda06ae5bf30', title: 'PATENT_TITLE_4749' },
            { id: '55e955fd-61c0-4c43-9949-d67ea4974dcd', title: 'PATENT_TITLE_6590' },
            { id: '8a51f38f-4025-43ab-8933-4d17c3dd7ca1', title: 'PATENT_TITLE_6761' },
            { id: '32d05931-641f-46eb-aca8-eb8ba6f36ced', title: 'PATENT_TITLE_8251' },
            { id: '675ec4f6-6f9f-4c79-b3f2-e315a193fbed', title: 'PATENT_TITLE_1562' },
            { id: 'e7d4f75e-0421-415d-a58d-5020b6d2ebb2', title: 'PATENT_TITLE_3025' },
        ]}
    />
)

export default App