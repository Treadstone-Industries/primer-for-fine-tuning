import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd5196ff8-4462-4ff2-9f6c-ee1f2a878747', title: 'PATENT_TITLE_7853' },
                { id: '53ceb6f7-4189-44b2-b1df-8ef194b0818c', title: 'PATENT_TITLE_6830' },
                { id: 'ca6bf2dc-f2ac-461d-847c-a0b009b69926', title: 'PATENT_TITLE_5531' },
            ]}
        />
    </Box>
)

export default App