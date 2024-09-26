import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2f2c3bd6-a1f5-4889-a18c-fba4157f9aa2', title: 'PATENT_TITLE_8790' },
            { id: '0368bd10-1a6e-499f-bc64-b82871c1200c', title: 'PATENT_TITLE_1441' },
            { id: 'e5d1095f-0c89-4955-826c-fafef6c58dbb', title: 'PATENT_TITLE_7183' },
            { id: 'bbce09ec-05c9-4f33-b5aa-c298142bea4a', title: 'PATENT_TITLE_9597' },
            { id: '17cb8b5d-5747-44b4-a5aa-8090dd1f1f4a', title: 'PATENT_TITLE_8122' },
        ]}
    />
)

export default App