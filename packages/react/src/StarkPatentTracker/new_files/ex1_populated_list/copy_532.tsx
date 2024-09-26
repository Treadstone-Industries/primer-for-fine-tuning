import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f3b0af30-7dd3-4a7c-bffc-a555e18760da', title: 'PATENT_TITLE_2858' },
            { id: '22844ebb-f5e7-4e89-88de-fca63e7154a4', title: 'PATENT_TITLE_7370' },
            { id: '52321b30-7bfa-4b1d-89dd-5c9e68d3abab', title: 'PATENT_TITLE_9596' },
            { id: 'e599516d-6b29-412e-8818-f5003bf0ee20', title: 'PATENT_TITLE_5563' },
            { id: 'f0640610-6745-4983-bdb1-871ffe64e185', title: 'PATENT_TITLE_3615' },
            { id: '25265905-6181-4a7d-9e04-f28092d0d4f1', title: 'PATENT_TITLE_9090' },
            { id: '1a1b5e95-f7b0-4a4d-8181-02aa897f2796', title: 'PATENT_TITLE_7040' },
            { id: 'f2223a5d-2798-4a0c-a3a9-016f2ceb76b8', title: 'PATENT_TITLE_2581' },
            { id: 'edccb6e1-3792-4a8e-b961-63f55cfa9b16', title: 'PATENT_TITLE_6556' },
            { id: '91cacb7c-721b-4fbf-b21d-b376a4f08a86', title: 'PATENT_TITLE_2636' },
        ]}
    />
)

export default App