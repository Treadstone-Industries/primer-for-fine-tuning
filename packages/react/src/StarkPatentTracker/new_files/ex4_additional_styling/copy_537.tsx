import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8f575402-d6a0-4a2e-9862-b06986f9e8e5', title: 'PATENT_TITLE_6145' },
                { id: '67f1224f-6048-4134-803d-59f6e96859be', title: 'PATENT_TITLE_8997' },
                { id: '2a68850b-2e39-4744-adac-26c6cc2c27f6', title: 'PATENT_TITLE_7662' },
                { id: '32d767f9-9b27-4c1d-8e9f-8a08869bb55d', title: 'PATENT_TITLE_2751' },
                { id: '437f41e7-c7c5-4ac5-a5ef-85060875343d', title: 'PATENT_TITLE_3164' },
                { id: 'b342cde0-c7f3-4abb-9499-e7ca83ae9a66', title: 'PATENT_TITLE_4127' },
                { id: '75764e50-ab53-4e00-b650-2746aff5657d', title: 'PATENT_TITLE_6441' },
                { id: 'd3fb3931-e936-46a5-bb9d-09f3ca3a104a', title: 'PATENT_TITLE_5914' },
                { id: '9fc66980-2a85-4c1f-92c5-614b70466fe6', title: 'PATENT_TITLE_5979' },
            ]}
        />
    </Box>
)

export default App