import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb459371-08d7-47e6-b2af-0c3b8516aa6d', title: 'PATENT_TITLE_4348' },
            { id: 'c878a00c-872f-478f-a258-2469b8b4a301', title: 'PATENT_TITLE_9228' },
            { id: 'aeebf70a-1690-4638-9257-9b570341c052', title: 'PATENT_TITLE_6184' },
            { id: '91220a5d-1212-4dde-b558-0b9634a101bc', title: 'PATENT_TITLE_8308' },
            { id: '2fde8a29-6710-4076-b3ad-85e8033d7603', title: 'PATENT_TITLE_2604' },
            { id: 'c3acbbfb-1120-4302-ba83-c838aafaeebf', title: 'PATENT_TITLE_6482' },
        ]}
    />
)

export default App