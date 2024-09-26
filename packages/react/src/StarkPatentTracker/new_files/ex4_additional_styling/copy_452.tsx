import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9a397dca-2682-4aa9-89c6-3cee9863eced', title: 'PATENT_TITLE_9157' },
                { id: 'a3a713cb-225a-4f49-ac11-3ee4b2d07c32', title: 'PATENT_TITLE_8428' },
            ]}
        />
    </Box>
)

export default App