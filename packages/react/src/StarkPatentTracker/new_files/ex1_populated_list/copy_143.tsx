import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8899d51a-c741-47a5-83ba-69ab812d3762', title: 'PATENT_TITLE_9090' },
            { id: '97e9203f-17da-46a2-a51a-e4f603340b1f', title: 'PATENT_TITLE_5391' },
            { id: 'bbfc65cc-2d8e-45e3-a140-bbe9e3e570af', title: 'PATENT_TITLE_8501' },
            { id: 'c64a2336-8b20-47ef-8ca0-fb53c7212381', title: 'PATENT_TITLE_9134' },
            { id: 'f6a0f250-c546-4196-8c3a-9a2c9d8ce372', title: 'PATENT_TITLE_7918' },
            { id: '81a7c134-3448-4049-9f3b-6d8d47468ddc', title: 'PATENT_TITLE_4757' },
        ]}
    />
)

export default App