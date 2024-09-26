import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a64d7816-0868-4ab6-b298-a423902ed803', title: 'PATENT_TITLE_7961' },
            { id: '5bad66f0-dad6-4aca-956d-39c17fea2adf', title: 'PATENT_TITLE_1364' },
            { id: '6b072f3f-599e-46ce-92fc-61ef04c4dec1', title: 'PATENT_TITLE_1387' },
            { id: 'b6e25716-8a72-48e5-87b9-8bd105086db4', title: 'PATENT_TITLE_4631' },
            { id: '05016223-fbbe-4c8a-bc99-515a93208ce9', title: 'PATENT_TITLE_9508' },
            { id: '8d3e49cf-4580-4ef9-afe7-558da10cb402', title: 'PATENT_TITLE_1000' },
        ]}
    />
)

export default App