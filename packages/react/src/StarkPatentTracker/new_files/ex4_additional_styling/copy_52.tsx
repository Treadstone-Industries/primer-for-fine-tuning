import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '522407a6-9633-48a5-9b8b-82f114137968', title: 'PATENT_TITLE_5480' },
                { id: 'f3b79ad8-3669-4a70-856a-593a1c144acc', title: 'PATENT_TITLE_7097' },
                { id: '9a4784d6-8bf1-4f33-9c46-ce2d4aef0df9', title: 'PATENT_TITLE_9096' },
            ]}
        />
    </Box>
)

export default App