import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e47626e3-de0c-4195-831b-8b9bc073864d', title: 'PATENT_TITLE_3227' },
                { id: '2c8ff19c-4d71-4ff6-b91a-62baf603b3e1', title: 'PATENT_TITLE_1644' },
                { id: '47346a78-cf3a-487a-bdf5-ab72ede8ef6e', title: 'PATENT_TITLE_1261' },
                { id: '36139df6-d1e4-412d-94e5-1bd9f7599211', title: 'PATENT_TITLE_8826' },
                { id: 'e9b7e67f-e423-45a1-b842-91588d79458f', title: 'PATENT_TITLE_9814' },
            ]}
        />
    </Box>
)

export default App