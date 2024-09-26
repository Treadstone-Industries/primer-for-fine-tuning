import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c434f88e-5ae3-4605-a8d1-4536f469db28', title: 'PATENT_TITLE_3301' },
                { id: 'b7c906f2-5a0e-4789-9b31-847063914b5e', title: 'PATENT_TITLE_9373' },
                { id: '329a6694-da98-442d-8d88-e6697047cab6', title: 'PATENT_TITLE_3174' },
            ]}
        />
    </Box>
)

export default App