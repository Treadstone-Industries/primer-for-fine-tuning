import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a6d5eefe-e72e-4f63-a489-7a6edc6289d4', title: 'PATENT_TITLE_4883' },
                { id: '09503f1f-0386-4a10-9307-6321f159619b', title: 'PATENT_TITLE_5757' },
            ]}
        />
    </Box>
)

export default App