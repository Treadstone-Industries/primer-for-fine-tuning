import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9361bdeb-25ef-47e7-9b03-b09118e349ee', title: 'PATENT_TITLE_8794' },
                { id: 'dc4b9145-0153-4ebe-b7a0-47f6b480f31b', title: 'PATENT_TITLE_3769' },
                { id: 'ec009e04-ad64-466b-b403-d78b0bd819e9', title: 'PATENT_TITLE_9802' },
            ]}
        />
    </Box>
)

export default App