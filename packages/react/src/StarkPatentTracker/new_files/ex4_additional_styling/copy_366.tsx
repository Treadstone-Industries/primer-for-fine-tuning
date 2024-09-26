import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b23f2e8a-db82-48f8-8133-cb2b53f88ba5', title: 'PATENT_TITLE_4675' },
                { id: '94bd46f0-74c5-4fd9-a708-dea139f88fc8', title: 'PATENT_TITLE_3729' },
                { id: '8ba61508-9fe6-4f4b-8127-9e7ca134021c', title: 'PATENT_TITLE_3703' },
            ]}
        />
    </Box>
)

export default App