import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'daa3391e-f18e-4a81-bb75-338b37445c5b', title: 'PATENT_TITLE_4290' },
                { id: 'cc23b450-5054-4211-b683-bbc8ea741de8', title: 'PATENT_TITLE_4754' },
                { id: 'c2f23957-fd6a-4144-92e8-390ed0b9a7e7', title: 'PATENT_TITLE_2917' },
            ]}
        />
    </Box>
)

export default App