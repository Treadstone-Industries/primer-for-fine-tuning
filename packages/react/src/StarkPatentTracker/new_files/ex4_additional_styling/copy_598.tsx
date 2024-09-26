import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c836e1f0-f433-44d2-aa42-9c0a355e0ebc', title: 'PATENT_TITLE_7977' },
                { id: '54995948-ab78-4c0b-8c82-8f4027178c93', title: 'PATENT_TITLE_5591' },
            ]}
        />
    </Box>
)

export default App