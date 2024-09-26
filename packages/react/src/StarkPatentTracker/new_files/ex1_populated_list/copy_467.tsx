import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7a63f0f8-dd78-4ad9-9809-636c5b85b96e', title: 'PATENT_TITLE_1512' },
            { id: 'ac66fd34-bfba-4507-bd04-4a75e8e6c9bb', title: 'PATENT_TITLE_5008' },
            { id: '97090a72-c082-438a-8a39-b19e4f2348df', title: 'PATENT_TITLE_1251' },
            { id: '7dc5f751-6d0b-48a0-aa7f-6aa927e43e8c', title: 'PATENT_TITLE_9036' },
            { id: '0749612b-a1b5-464f-a799-67725c52574a', title: 'PATENT_TITLE_2975' },
            { id: 'a06e081b-0640-4a9c-b58e-ac0ea16df131', title: 'PATENT_TITLE_8081' },
            { id: 'd61b3b87-950c-4735-8028-e3f87b523b71', title: 'PATENT_TITLE_8188' },
            { id: '0b159e8f-655e-4b1b-99ea-97c1dbee2f6a', title: 'PATENT_TITLE_3426' },
            { id: '17cef6af-a2c5-40e9-9408-c954c9688a86', title: 'PATENT_TITLE_1418' },
        ]}
    />
)

export default App