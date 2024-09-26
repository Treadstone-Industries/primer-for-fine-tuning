import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '13b26e3c-99b7-46a4-887b-9410d4b64f78', title: 'PATENT_TITLE_9772' },
                { id: '6f91c8f8-6e01-4d1e-8c23-e3ad1f7ed70c', title: 'PATENT_TITLE_1620' },
                { id: 'e85d19da-403a-4298-b3c1-cee5f85631ba', title: 'PATENT_TITLE_2506' },
                { id: 'cf09f136-8ccf-40ab-a7d2-ba2f63f533d4', title: 'PATENT_TITLE_7850' },
            ]}
        />
    </Box>
)

export default App