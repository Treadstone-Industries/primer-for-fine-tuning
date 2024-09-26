import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2037231a-3aff-427a-b55e-04af29b81af0', title: 'PATENT_TITLE_7864' },
            { id: '517af7ab-3a80-45b8-a69d-2b1984a271db', title: 'PATENT_TITLE_4164' },
            { id: 'de382269-ff0d-4ec9-850e-9bda095306b7', title: 'PATENT_TITLE_9661' },
            { id: '7b779485-a3b0-4f33-8cfd-bf93550a3181', title: 'PATENT_TITLE_9491' },
            { id: '8528d939-fe0d-49b1-83a6-25a3c79cc0e1', title: 'PATENT_TITLE_2711' },
            { id: 'fad3ca21-0137-47ef-a74f-323c1fa8047f', title: 'PATENT_TITLE_2794' },
        ]}
    />
)

export default App