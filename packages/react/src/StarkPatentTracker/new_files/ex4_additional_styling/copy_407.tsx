import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7d6215a1-6850-458a-a301-aea7f883653f', title: 'PATENT_TITLE_8343' },
                { id: 'aac11c89-22af-4220-b5af-58bcaae1ca51', title: 'PATENT_TITLE_6198' },
                { id: '5f023101-e7b7-497b-8537-62d2e10b6aec', title: 'PATENT_TITLE_5455' },
                { id: '9fe258ef-b2d4-47e4-9a63-f42cc545fddc', title: 'PATENT_TITLE_4494' },
            ]}
        />
    </Box>
)

export default App