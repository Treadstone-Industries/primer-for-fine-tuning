import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '56c0a9dd-0451-4d77-86c6-1685347e4a1b', title: 'PATENT_TITLE_1054' },
                { id: '8b440681-8235-4900-9243-2e9bc395be1c', title: 'PATENT_TITLE_4790' },
                { id: '7a67fc7b-46be-4d0d-b2e3-be6ab741f2cd', title: 'PATENT_TITLE_1926' },
                { id: 'b38b1051-9ae0-46d8-9997-b8ef401879e1', title: 'PATENT_TITLE_9216' },
                { id: 'eb36b21e-9837-408b-9f0a-4ffe688aa017', title: 'PATENT_TITLE_3261' },
            ]}
        />
    </Box>
)

export default App