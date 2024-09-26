import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7d69341f-60c9-474b-b849-4d41897f0402', title: 'PATENT_TITLE_7441' },
                { id: '4ef12361-cf65-4e3f-b93e-122fd91e8445', title: 'PATENT_TITLE_5709' },
                { id: '798b9dd7-4122-4674-b8f8-df867dc7d287', title: 'PATENT_TITLE_2555' },
                { id: '2525c02b-2bef-465d-b1bf-7c6616c5115c', title: 'PATENT_TITLE_5033' },
                { id: '5a144937-176c-4be5-8a44-479a90c3cdee', title: 'PATENT_TITLE_6574' },
                { id: 'c0216c20-1dac-4889-be88-f713667bd3d8', title: 'PATENT_TITLE_6123' },
            ]}
        />
    </Box>
)

export default App