import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '21127f59-b6b8-4c27-a0ef-17bddca1a042', title: 'PATENT_TITLE_4460' },
                { id: '939fdeae-6ad6-48e3-a71c-433da45c31b7', title: 'PATENT_TITLE_7751' },
                { id: 'a63be888-49b9-43ac-9a40-06bb5400f072', title: 'PATENT_TITLE_9433' },
            ]}
        />
    </Box>
)

export default App