import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '17c0ff56-ec28-4126-9e45-d6e9037d2d2f', title: 'PATENT_TITLE_8577' },
                { id: '5c461c49-4e09-40af-9e23-3b3c676af68a', title: 'PATENT_TITLE_9035' },
            ]}
        />
    </Box>
)

export default App