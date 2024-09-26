import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f2a1e2ab-6199-44ed-920e-113db5bdfbb2', title: 'PATENT_TITLE_9037' },
                { id: '0b543724-f5f3-4296-ba6e-a80ef12f0ea3', title: 'PATENT_TITLE_1115' },
            ]}
        />
    </Box>
)

export default App