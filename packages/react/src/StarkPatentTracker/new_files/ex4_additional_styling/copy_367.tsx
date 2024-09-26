import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3098f00c-af1f-4293-925e-955238aa69a8', title: 'PATENT_TITLE_1296' },
                { id: 'b9107d32-cd62-4aa4-82da-1c3f292282a1', title: 'PATENT_TITLE_1929' },
                { id: '275be284-eec6-4efc-9a5b-c5080757d35d', title: 'PATENT_TITLE_5228' },
                { id: '12a194ef-26d4-4f8f-ade2-0ce03729e0da', title: 'PATENT_TITLE_9513' },
            ]}
        />
    </Box>
)

export default App