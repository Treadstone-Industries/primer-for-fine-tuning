import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1159d4d9-99cc-49ef-a231-caf034082356', title: 'PATENT_TITLE_8279' },
            { id: '268f27df-1f15-4240-a88b-16a7d697c19a', title: 'PATENT_TITLE_7061' },
            { id: 'e20f8c6a-6091-42b3-849b-ca5500f67a16', title: 'PATENT_TITLE_1610' },
            { id: '91e7dd55-4ae2-4b71-922c-561236b20c51', title: 'PATENT_TITLE_9302' },
            { id: '85e2309c-a704-4175-8f5d-3ccf6c13604f', title: 'PATENT_TITLE_2340' },
            { id: 'a5c12f21-3b2e-48d7-8e23-d6928c64b3c7', title: 'PATENT_TITLE_1781' },
            { id: '25b9c787-c971-4c5e-b8ac-95215aa9830a', title: 'PATENT_TITLE_2232' },
            { id: 'f4eae2aa-00ca-464c-84be-c76b27b26de8', title: 'PATENT_TITLE_7829' },
            { id: '4f5c4b2f-43e6-4afa-846b-7a831a31077a', title: 'PATENT_TITLE_1853' },
        ]}
    />
)

export default App